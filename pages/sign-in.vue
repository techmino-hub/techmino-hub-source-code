<template>
<div class="page-outer">
    <Title>{{ $t('signIn.tabTitle') }}</Title>
    <h1 v-t="'signIn.title'"></h1>
    <i18n-t keypath="signIn.ruleNote" scope="global" tag="p" class="tos-note hide-noscript">
        <NuxtLink class="glow-style" :to="localePath('/rules')" v-t="'signIn.ruleNoteLink'"></NuxtLink>
    </i18n-t>
    <div class="oauth-buttons hide-noscript" v-show="!user">
        <button
          type="button"
          class="discord"
          @click="oauth('discord')">
            <i class="bi bi-discord"></i>
            <span>{{ $t('signIn.oauth.discord') }}</span>
        </button>
    </div>
    <div v-show="user">
        {{ $t('signIn.alreadySignedIn') }}
    </div>
    <noscript>{{ $t('signIn.noscriptWarn') }}</noscript>
</div>
</template>

<script lang="ts" setup>
import { type Provider } from '@supabase/supabase-js';
import { useSupabase } from '~/composables/database';

const localePath = useLocalePath();

const supabase = useSupabase();

const { data } = await supabase.auth.getUser();
const user = data.user;

console.debug("user:", user); // DEBUG

function oauth(provider: Provider) {
    supabase.auth.signInWithOAuth({ provider });
}
</script>

<style scoped lang="scss">
@use '~/assets/scss/colors';
@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css");

.page-outer {
    padding: 1em 2em;
}

.oauth-buttons {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 1em;
    flex-wrap: wrap;

    i {
        width: 1em;
        height: 1em;
        margin-inline-end: 0.5em;
        margin-block: auto;
    }

    .discord {
        background-color: colors.$oauth-discord-bg-color;
        color: colors.$oauth-discord-color;
        border: 0.15em solid colors.$oauth-discord-border-color;
        border-radius: 0.5em;
        padding: 0.5em 1em;
        transition: 300ms background-color, 300ms color, 250ms transform;
        font-family: 'techmino-proportional';
        font-size: 1.1em;
        cursor: pointer;

        &:hover {
            background-color: colors.$oauth-discord-border-color;

            @media (prefers-reduced-motion: no-preference) {
                transform: scale(1.026);
            }
        }

        &:active {
            @media (prefers-reduced-motion: no-preference) {
                transform: scale(0.962);
            }
        }

        @media (prefers-contrast: more) {
            background-color: black;

            &:hover {
                background-color: black;
                color: colors.$btn-hover-border-color;
            }
        }
    }
}
</style>