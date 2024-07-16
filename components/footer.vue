<script setup>
import { getChar } from '~/assets/scripts/chars';
const localePath = useLocalePath();
</script>

<template>
  <footer>
    <div class="left" v-html="$t('common.footer.text')"></div>
    <span class="right">
        <NuxtLinkLocale to="/rules">
            {{ $t('common.nav.rules') }}
        </NuxtLinkLocale>
        <NuxtLinkLocale to="/privacy">
            {{ $t('common.nav.privacy') }}
        </NuxtLinkLocale>
        <NuxtLinkLocale to="/language">
            {{ getChar('icon.language') + ' ' + $t('common.footer.lang') }}
        </NuxtLinkLocale>
        <NuxtLinkLocale to="/settings">
            {{ $t('common.nav.settings') }}
        </NuxtLinkLocale>
        <a href="https://discord.gg/f9pUvkh">Discord</a>
    </span>
  </footer>
</template>

<style lang="scss">
footer {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    background-color: rgba(0, 0, 0, 0.6);
    padding: 0.5em 1.5em;
    border-top: 0.15em dotted grey;
    color: rgb(180,180,180);

    @media (min-width: 700px) {
        border-end-start-radius: 0.5em;
        border-end-end-radius: 0.5em;
    }

    @media (prefers-contrast: more) {
        color: white;
    }

    a {
        color: rgb(180,180,180);
        transition: color 200ms;
        &:hover {
            color: lightgray;
        }

        @media(prefers-contrast: more) {
            color: white;
            &:hover {
                color: yellow;
            }
        }
    }

    .mid {
        display: flex;
        flex-direction: row;
        justify-content: center;
        gap: 1em;
        align-items: center;
    }

    .right {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 1em;
        align-items: center;
    }
}
</style>