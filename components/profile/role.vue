<template>
    <span class="pf-roles">
        <span
          :class="{
            state: true,
            normal: accountState === 'Normal',
            banned: accountState === 'Banned',
            unverified: accountState === 'Unverified'
          }">
            {{ $t(`profile.state.${accountState}`) }}
        </span>
        <span class="separator">
            {{ "·" }}
        </span>
        <span
          :class="{
            role: true,
            user: role === 'User',
            verifier: role === 'Verifier',
            admin: role === 'Administrator'
          }">
            {{ $t(`profile.role.${role}`) }}
        </span>
    </span>
</template>

<script lang="ts" setup>
import { AccountState, Role } from '~/assets/types/database';

const props = defineProps({
    accountState: {
        type: String as PropType<AccountState>,
        required: true
    },
    role: {
        type: String as PropType<Role>,
        required: true
    }
});
</script>

<style lang="scss" scoped>
@use '~/assets/scss/colors';

.pf-roles {
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
</style>