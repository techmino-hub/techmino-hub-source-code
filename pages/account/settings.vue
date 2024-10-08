<template>
  <div class="page" :aria-busy="loading">
    <Title>{{ $t('account.tabTitle') }}</Title>
    <Meta property="og:title" :content="$t('account.tabTitle')" />
    <h1>{{ $t('account.title') }}</h1>
    <ClientOnly>
        <div v-if="loading">
            {{ $t('account.loading') }}
        </div>
        <div v-else-if="!user || !profile">
            {{ $t('account.loggedOut') }}
        </div>
        <div v-else-if="profile.account_state !== AccountState.Normal">
            {{ $t(`account.state${profile.account_state}`) }}
        </div>
        <form v-else class="content">
            <div class="inputs">
                <div class="avy-changer">
                    <label for="avatar">{{ $t('account.changeAvy') }}</label>
                    <div
                      class="avy"
                      role="button"
                      @click="fileInput?.click()">
                        <img :src="imgPath" :alt="$t('profile.avy')" />
                        <div class="overlay">
                            <label for="avatar">{{ $t('account.changeAvy') }}</label>
                        </div>
                    </div>
                    <input
                        type="file"
                        accept="image/*"
                        ref="fileInput"
                        id="avatar"
                        @change="handleFileChange"
                    />
                </div>
                <div class="bio-changer">
                    <div>
                        <label for="username">{{ $t('account.username') }}</label>
                        <input
                            type="text"
                            id="username"
                            v-model="username"
                            :placeholder="$t('account.username')"
                        />
                    </div>
                    <div>
                        <label for="bio">{{ $t('account.bio') }}</label>
                        <textarea
                            id="bio"
                            v-model="bio"
                            :placeholder="$t('account.bioPlaceholder')"
                        ></textarea>
                    </div>
                </div>
            </div>
            <button
              class="web-btn"
              type="button"
              @click="submit">
                {{ $t('account.save') }}
            </button>
        </form>
        <NuxtLinkLocale class="delete" v-if="user" to="/account/delete">
            {{ $t('account.deleteLink') }}
        </NuxtLinkLocale>
    </ClientOnly>
    <noscript>
        {{ $t('account.noscriptWarn') }}
    </noscript>
  </div>
</template>

<script lang="ts" setup>
import { type User } from '@supabase/supabase-js';
import { AccountState, type Profile } from '~/assets/types/database';
import * as nsfwjs from 'nsfwjs';

const database = useDatabase();
const i18n = useI18n();
let nsfwModel: nsfwjs.NSFWJS | null = null;

const user = ref<User | null>(null);
const profile = ref<Profile | null>(null);
const loading = ref<boolean>(true);
const imgPath = ref<string>('');

const fileInput = ref<HTMLInputElement | null>(null);

const avatarSet = ref<boolean>(false);
const username = ref<string>('');
const bio = ref<string>('');

onMounted(async function() {
    user.value = (await database.supabase.auth.getUser()).data.user;

    if(user.value) {
        imgPath.value = database.getAvatarUrlByUserId(user.value.id);

        profile.value = await database.getProfileById(user.value.id);

        username.value = profile.value.username;
        bio.value = profile.value.bio;
    }

    nsfwModel = await nsfwjs.load("/data/nsfwjs/mobilenet_v2/model.json");

    loading.value = false;
});

const SAFE_CLASSES = [ "Neutral", "Drawing" ];

function handleFileChange(event: Event) {
    const target = event.target as HTMLInputElement;
    if(target.files && target.files[0]) {
        const file = target.files[0];

        if(file.size > 512 * 1024) {
            alert(i18n.t('account.avyTooBig'));
            return;
        }

        if(file.size < 32 * 1024) {
            alert(i18n.t('account.avyTooSmall'));
            return;
        }

        const reader = new FileReader();
        reader.onload = async (e) => {
            const link = e.target?.result as string;

            const img = new Image();
            img.src = link;

            // wait for image to load
            await new Promise((resolve) => {
                img.onload = resolve;
            });

            if(!nsfwModel) {
                alert(i18n.t('account.errNotLoaded'));
                return;
            }

            const predictions = await nsfwModel.classify(img);
            const prediction = predictions.reduce((prev, current) => {
                return current.probability > prev.probability ? current : prev;
            });

            if(!SAFE_CLASSES.includes(prediction.className)) {
                console.warn(`NSFW detection triggered: ${prediction.className} (${prediction.probability * 100}% confidence)`);
                alert(i18n.t('account.nsfwWarn'));
                return;
            }

            avatarSet.value = true;
            imgPath.value = link;
        };
        reader.readAsDataURL(file);
    }
}

async function submit() {
    if(!user.value || !profile.value) return;

    if(avatarSet.value) {
        try {
            const session = (await database.supabase.auth.getSession()).data.session;
            if(!session) {
                console.error("No session found. Are you logged in?");
                alert(i18n.t('account.errAvy'));
                return;
            }

            fetch('/api/v1/update-avatar', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    user: user.value.id,
                    avatar: imgPath.value,
                    // scary!
                    access_token: session.access_token,
                    refresh_token:
                        session.provider_refresh_token ||
                        session.refresh_token,
                }),
            });
        } catch (e) {
            console.error(e);
            alert(i18n.t('account.errAvy'));
            return;
        }
    }

    try {
        await database.editProfile(user.value.id, {
            username: username.value,
            bio: bio.value,
        });
    } catch (e) {
        console.error(e);
        alert(i18n.t('account.errProfile'));
        return;
    }
}
</script>

<style lang="scss" scoped>
.page {
    padding: 2em;
}

h1 {
    margin-block-start: 0;
}

.avy {
    position: relative;
    min-width: 100px;
    min-height: 100px;
    width: 20vw;
    height: 20vw;
    max-width: 200px;
    max-height: 200px;
    border: 0.1em solid white;
    cursor: pointer;

    > * {
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
        cursor: pointer;
    }

    .overlay {
        display: flex;
        flex-direction: column;
        text-align: center;
        justify-content: center;
        background-color: #000B;
        opacity: 0;
        z-index: 1;
        transition: opacity 350ms;

        label {
            pointer-events: none;
        }
    }

    .overlay:hover {
        cursor: pointer;
        opacity: 1;
    }
}

.content {
    display: flex;
    flex-direction: column;
    gap: 1em;

    .inputs {
        display: flex;
        flex-direction: row;
        gap: 3ch;

        @media (max-width: 626px) {
            flex-direction: column;
        }
    }
}

.avy-changer {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    > label {
        display: none;

        @media (max-width: 626px) {
            display: block;
        }
    }
}

.bio-changer {
    display: flex;
    flex-direction: column;
    gap: 1em;
    flex-grow: 1;
    max-width: 56ch;

    @media (max-width: 626px) {
        max-width: none;
    }

    > div {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 4ch;
        row-gap: 1em;
        justify-content: space-between;
        flex-grow: 1;

        @media (max-width: 450px) {
            flex-direction: column;
        }
    }
}

input[type="file"] {
    display: none;
}

textarea {
    resize: none;
    height: 10em;
}

input[type="text"], textarea {
    border: 0.1em solid white;
    background-color: transparent;
    color: white;
    max-width: 26ch;
    flex: 1;
    padding: 0.5em;
    font-size: 1em;
    font-family: inherit;
    border-radius: 0.5em;

    @media (max-width: 450px) {
        max-width: none;
    }
}

.delete {
    display: flex;
    flex-direction: row;
    margin-block: 2em;
    padding-block: 0.5em;
    padding-inline: 2ch;
    color: red;
    border: 0.2em solid transparent;
    border-radius: 0.5em;
    box-shadow: 0 0 0 transparent;
    transition: text-shadow 300ms 200ms, box-shadow 600ms, border-color 400ms, background-color 250ms;

    &:hover {
        border-color: red;
        background-color: #F002;
        box-shadow: 0 0 1em red;
    }

    &:active {
        background-color: red;
        color: black;
        box-shadow: 0 0 3em red;
        text-shadow: 0 0 0.2ch black;
    }
}
</style>