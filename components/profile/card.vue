<template>
    <div class="profile-card">
        <ProfileAvatar :profile-id="profile.id" />
        <div class="info">
            <h1>
                <NuxtLinkLocale :to="`/profiles/${profile.id}`" v-if="link">
                    {{ profile.username }}
                </NuxtLinkLocale>
                <span v-else>
                    {{ profile.username }}
                </span>
            </h1>
            <ProfileRole
                class="pf-roles"
                :account-state="(profile.account_state as AccountState)"
                :role="(profile.role as Role)"
            />
            <p>
                {{ profile.bio.slice(0, 100) }}
            </p>
        </div>
    </div>
</template>

<script lang="ts" setup>
import type { AccountState, Profile, Role } from '~/assets/types/database';

const props = defineProps({
    profile: {
        type: Object as PropType<Profile>,
        required: true
    },
    link: {
        type: Boolean,
        default: true
    }
});
</script>

<style scoped lang="scss">
@use '~/assets/scss/colors';
@use '~/assets/scss/index';

.profile-card {
    display: flex;
    flex-direction: row;
    justify-content: stretch;
    width: 30em;
    height: 10em;
    padding: 0.5em;
    gap: 1em;
    border: 0.15em solid colors.$secondary-color;
    background-color: colors.$pf-card-bg-color;
    color: white;
    text-align: start;

    .avy {
        flex-grow: 0;
        flex-shrink: 0;
        width: 10em;
        height: 10em;
    }

    .info {
        display: flex;
        flex-direction: column;
        overflow: hidden;

        font-family: 'techmino-proportional';

        h1 {
            margin: 0;
            font-weight: light;
            
            a {
                color: white;
                text-decoration: none;
                transition: 250ms color, 500ms text-shadow;
                text-shadow: 0 0 transparent;

                &:hover {
                    color: colors.$primary-color;
                    text-shadow: 0.1ch 0.1em colors.$primary-color-alpha25;
                }

                &:active {
                    color: colors.$primary-color-dark;
                }
            }
        }

        .pf-roles {
            margin-block-start: 0.2em;
        }
    }
}
</style>