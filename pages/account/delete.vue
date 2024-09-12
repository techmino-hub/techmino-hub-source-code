<template>
    <div class="page-outer" :aria-busy="loading">
        <Title>{{ $t('accountDelete.tabTitle') }}</Title>
        <Meta property="og:title" :content="$t('accountDelete.tabTitle')" />
        <h1>{{ $t('accountDelete.title') }}</h1>
        <noscript>
        {{ $t('accountDelete.noscriptWarn') }}
        </noscript>
        <p v-if="loading" class="hide-noscript">
            {{ $t('accountDelete.loading') }}
        </p>
        <p v-else-if="!user || !profile">
            {{ $t('accountDelete.notSignedIn') }}
        </p>
        <div v-else-if="!deleted">
            <p
                v-html="$t('accountDelete.desc', { username: profile?.username })"
            ></p>
            <div class="card">
                <p>
                    {{ $t('accountDelete.instruction') }}
                </p>
                <p class="phrase">
                    {{ $t('accountDelete.confirmPhrase') }}
                </p>
                <input
                    type="text"
                    v-model="confirmInput"
                    :placeholder="$t('accountDelete.placeholder')"
                />
                <NuxtLinkLocale
                    v-if="!phraseTyped"
                    class="cancel"
                    to="/"
                    v-t="'accountDelete.cancel'"
                />
                <button
                    v-if="phraseTyped"
                    type="button"
                    v-t="'accountDelete.confirm'"
                    @click="deleteAccount"
                ></button>
            </div>
        </div>
        <p v-if="deleted" class="hide-noscript">
            {{ $t('accountDelete.success') }}
        </p>
    </div>
</template>

<script lang="ts" setup>
import { type User } from '@supabase/supabase-js';
import { type Profile } from '~/assets/types/database';

const database = useDatabase();
const i18n = useI18n();

const confirmPhrase = i18n.t('accountDelete.confirmPhrase');

const user = ref<User | null>(null);
const profile = ref<Profile | null>(null);
const loading = ref(true);

const confirmInput = ref('');

const phraseTyped = computed(() => {
    return confirmInput.value.trim() === confirmPhrase.trim();
});

const deleted = ref(false);

async function deleteAccount() {
    if(!phraseTyped.value) return;

    try {
        await database.deleteAccount();
    } catch(e) {
        let msg = "Unknown error";

        if(e && typeof e === 'object') {
            if('message' in e && typeof e.message === 'string') {
                msg = e.message;
            }
        } else if(typeof e === 'string') {
            msg = e;
        }

        console.error(msg);
        return;
    }

    deleted.value = true;
}

onMounted(async function() {
    user.value = (await database.supabase.auth.getUser()).data.user;

    if(user.value) {
        profile.value = await database.getProfileById(user.value.id);
    }

    loading.value = false;
});
</script>

<style lang="scss" scoped>
.page-outer {
    background-color: #100C;
    color: red;
    padding: 2em;
}

h1 {
    margin-block-start: 0;
}

.card {
    display: flex;
    flex-direction: column;
    max-width: 40ch;
    margin-inline: auto;
    padding-inline: 2ch;
    padding-block: 1em;
    gap: 1em;
    border: 0.2em dashed red;

    p {
        margin-block: 0;
    }

    p.phrase {
        width: fit-content;
        background-color: black;
        border: 0.1em dashed red;
        padding: 0.5em;
        margin-inline: auto;
        font-style: italic;
        pointer-events: none;
        user-select: none;
    }

    input {
        background-color: black;
        color: red;
        border: 0.2em double red;
        padding: 0.5em;
        font-family: monospace;
        font-size: 1.2em;
        font-weight: bold;
        transition: box-shadow 200ms;
    }

    input:focus {
        box-shadow: 0 0 1em 0.2ch red;
    }

    .cancel {
        display: block;
        background-color: black;
        color: currentColor;
        border: 0.1em solid currentColor;
        border-radius: 0.5em;
        text-decoration: none;
        text-align: center;
        padding: 0.25em 1em;
    }

    button {
        background-color: black;
        color: red;
        border: 0.25em double red;
        padding: 0.25em 1em;
        font-size: 1.1em;
        font-weight: 900;
        cursor: pointer;
        transition: box-shadow 500ms, transform 500ms, background-color 200ms, color 200ms;

        &:hover {
            background-color: red;
            color: black;
            box-shadow: 0 0 1em 0.2ch red;
        }

        &:active {
            box-shadow: 0 0 2em 1em red;
            
            @media (prefers-reduced-motion: no-preference) {
                transform: scale(1.2);
            }
        }
    }
}
</style>