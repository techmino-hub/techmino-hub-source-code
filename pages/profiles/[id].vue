<template>
    <div class="page-outer">
        <Title>
            {{ $t('profile.tabTitle', {
                username: profile.username
            }) }}
        </Title>
        <section class="top">
            <ProfileAvatar
                :profile-id="profile.id"
            />
            <div class="right">
                <h1>
                    {{ profile.username }}
                </h1>
                <ProfileRole
                    class="pf-roles"
                    :account-state="(profile.account_state as AccountState)"
                    :role="(profile.role as Role)"
                />
                <p>
                    {{ profile.bio }}
                </p>
            </div>
        </section>
        <section>
            <!-- TODO: Add "latest submissions" table -->
        </section>
    </div>
</template>

<script lang="ts" setup>
import type { AccountState, Role } from '~/assets/types/database';

const route = useRoute();

const id = route.params.id;

const { data, error } = await useFetch('/api/fetch-profile', {
    method: 'GET',
    params: { uuid: id }
});

if(error.value) {
    throw new Error('Failed to fetch profile data');
}

if(!data.value) {
    throw new Error('Profile not found');
}

const profile = data.value.profile;
</script>

<style scoped lang="scss">
@use '~/assets/scss/colors';

.page-outer {
    padding: 2em 2em;
}

.top {
    display: flex;
    flex-direction: row;
    justify-content: start;
    gap: 3ch;

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

    h1 {
        font-size: 2em;
        margin-block: 0;
        padding-block-end: 0.25em;
        border-block-end: 0.026em solid colors.$pf-page-name-underline-color;
    }
}
</style>