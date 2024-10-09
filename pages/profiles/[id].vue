<template>
    <div class="page-outer">
        <Title>
            {{ $t('profile.tabTitle', {
                username: profile.username
            }) }}
        </Title>
        <Meta property="og:title" :content="$t('profile.tabTitle', {
            username: profile.username
        })" />
        <section class="top">
            <ProfileAvatar
                :profile-id="profile.id"
                :fallback-only="!hasAvy"
            />
            <div class="right">
                <h1>
                    {{ profile.username }}
                </h1>
                <ProfileRole
                    class="pf-roles"
                    :account-state="(profile.account_state)"
                    :role="(profile.role)"
                />
                <p>
                    {{ profile.bio }}
                </p>
                <NuxtLinkLocale
                  v-if="myProfile && myProfile.id === profile.id"
                  to="/account/settings">
                    {{ $t('profile.edit') }}
                </NuxtLinkLocale>
            </div>
        </section>
        <section>
            <h1>
                {{ $t('profile.section.latestSubmissions') }}
            </h1>
            <br>
            <ProfileSubmissions
                :user-id="profile.id"
            />
        </section>
        <section v-if="amVerifier" class="actions">
            <h2>
                {{ $t('profile.actions.title') }}
            </h2>
            <div>
                <label for="acc-state">
                    {{ $t('profile.actions.setState') }}
                </label>
                <div>
                    <select name="accState" id="acc-state" v-model="stateSelect">
                        <option v-for="state in Object.values(AccountState)" :key="state" :value="state">
                            {{ $t(`profile.state.${state}`) }}
                        </option>
                    </select>
                    <button class="web-btn" type="button" @click="setState">
                        {{ $t('profile.actions.set')}}
                    </button>
                </div>
            </div>
            <div v-if="amAdmin">
                <label for="role">
                    {{ $t('profile.actions.setRole') }}
                </label>
                <div>
                    <select name="role" id="role" v-model="roleSelect">
                        <option v-for="role in Object.values(Role)" :key="role" :value="role">
                            {{ $t(`profile.role.${role}`) }}
                        </option>
                    </select>
                    <button class="web-btn" type="button" @click="setRole">
                        {{ $t('profile.actions.set')}}
                    </button>
                </div>
            </div>
        </section>
    </div>
</template>

<script lang="ts" setup>
import { type User } from '@supabase/supabase-js';
import { AccountState, type Profile, Role } from '~/assets/types/database';

const route = useRoute();
const router = useRouter();
const database = useDatabase();

const user = ref<User | null>(null);
const myProfile = ref<Profile | null>(null);

const amAdmin = ref(false);
const amVerifier = ref(false);

const id = route.params.id as string;

const { data, error } = await useFetch('/api/v2/fetch-profile', {
    method: 'GET',
    params: { id }
});

if(error.value) {
    console.error(error.value);
    throw new Error('Failed to fetch profile data');
}

if(!data.value) {
    throw new Error('Profile not found');
}

const profile = data.value;

const stateSelect = ref(profile.account_state);
const roleSelect = ref(profile.role);

const { data: hasAvy } = await useFetch('/api/v1/check-avatar', {
    method: 'GET',
    params: { id: profile.id }
});

if(hasAvy) {
    useHead({
        meta: [
            {
                property: 'og:image',
                content: database.getAvatarUrlByUserId(profile.id)
            }
        ]
    });
}

onMounted(async function() {
    router.push(`/profiles/${profile.id}`);
    user.value = (await database.supabase.auth.getUser()).data.user;

    if(!user.value) return;

    myProfile.value = await database.getProfileById(user.value.id);

    if(myProfile.value.account_state !== AccountState.Normal) return;

    amAdmin.value = myProfile.value.role === Role.Admin;
    amVerifier.value = ([Role.Admin, Role.Verifier] as Role[]).includes(myProfile.value.role);
});

function setState() {
    database.editProfile(profile.id, {
        account_state: stateSelect.value
    });
}

function setRole() {
    database.editProfile(profile.id, {
        role: roleSelect.value
    });
}
</script>

<style scoped lang="scss">
@use '~/assets/scss/colors';

.page-outer {
    display: flex;
    flex-direction: column;
    padding: 2em 2em;
    gap: 2em;
    font-family: 'techmino-proportional';
}

.top {
    display: flex;
    flex-direction: row;
    justify-content: start;
    gap: 3ch;

    @media (max-width: 700px) {
        flex-direction: column;
        align-items: center;
        gap: 1.5em;
    }

    > div.avy {
        flex-grow: 0;
        flex-shrink: 0;
    }

    > div.right {
        display: flex;
        flex-direction: column;
        width: stretch;
        gap: 0.5em;
    }

    a {
        display: inline;
        width: fit-content;
    }
}

h1 {
    font-size: 2em;
    margin-block: 0;
    padding-block-end: 0.25em;
    border-block-end: 0.026em solid colors.$pf-page-name-underline-color;
}

.actions {
    display: flex;
    flex-direction: column;
    width: fit-content;
    margin-inline: auto;
    padding: 1em 2em;
    gap: 1em;
    border: 0.1em solid colors.$tertiary-color;
    border-radius: 0.5em;
    background-color: colors.$tertiary-color-alpha10;

    h2 {
        margin-block: 0;
    }

    > div {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
        gap: 5ch;
        row-gap: 1em;

        > div {
            display: flex;
            flex-direction: row;
            gap: 1ch;
        }
    }

    select {
        font-family: 'techmino-proportional';
        background-color: black;
        color: white;
        border: 0.15em solid colors.$primary-color;
        border-radius: 0.5em;
        padding: 0.25em 0.5em;
        font-size: 1em;
    }

    button {
        margin-block: 0;
    }
}
</style>