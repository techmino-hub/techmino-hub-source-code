<template>
    <div class="profile-card">
        <ProfileAvatar :profile="profile" />
        <div class="info">
            <h1>
                <NuxtLinkLocale :to="`/profiles/${profile.id}`" v-if="link">
                    {{ profile.username }}
                </NuxtLinkLocale>
                <span v-else>
                    {{ profile.username }}
                </span>
            </h1>
            <span class="inline">
                <span
                  :class="{
                    state: true,
                    normal: profile.account_state === 'Normal',
                    banned: profile.account_state === 'Banned',
                    unverified: profile.account_state === 'Unverified'
                  }">
                    {{ $t(`profile.state.${profile.account_state}`) }}
                </span>
                <span class="separator">
                    {{ "·" }}
                </span>
                <span
                  :class="{
                    role: true,
                    user: profile.role === 'User',
                    verifier: profile.role === 'Verifier',
                    admin: profile.role === 'Administrator'
                  }">
                    {{ $t(`profile.role.${profile.role}`) }}
                </span>
            </span>
            <p>
                {{ profile.bio.slice(0, 100) }}
            </p>
        </div>
    </div>
</template>

<script lang="ts" setup>
import type { Profile } from '~/assets/types/database';

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

const i18n = useI18n();
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

        .inline {
            margin-block-start: 0.2em;

            .state {
                &.normal {
                    color: colors.$pf-state-normal;
                }
                &.banned {
                    color: colors.$pf-state-banned;
                }
                &.unverified {
                    color: colors.$pf-state-unverified;
                }
            }

            .role {
                &.user {
                    color: colors.$pf-role-user;
                }
                &.verifier {
                    color: colors.$pf-role-verifier;
                }
                &.admin {
                    color: colors.$pf-role-admin;
                }
            }

            .separator {
                margin-inline: 0.5em;
                user-select: none;
            }
        }
    }
}
</style>