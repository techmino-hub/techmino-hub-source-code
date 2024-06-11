<script setup lang="ts">
const { locale, setLocale } = useI18n();
</script>

<template>
    <header>
        <NuxtLink to="/">
            <h1 v-html="$t('common.appName')"></h1>
        </NuxtLink>
        <nav>
            <NuxtLink to="/" class="hide-no-error"
                v-html="$t('common.nav.home')"
            />
            <NuxtLink to="/faq" class="hide-error"
                v-html="$t('common.nav.faq')"
            />
            <NuxtLink to="/map" class="hide-error"
                v-html="$t('common.nav.map')"
            />
            <NuxtLink to="/sign-in" class="hide-noscript hide-error"
                v-html="$t('common.nav.signIn')"
            />
        </nav>
    </header>
</template>

<style lang="scss" scoped>
@use "~/assets/scss/main.scss";
@use "~/assets/scss/colors.scss";

header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: colors.$secondary-color-alpha75;
    padding: 0.5em 1.5em;
    border-bottom: 0.15em dotted colors.$secondary-color;

    @media (min-width: 700px) {
        border-start-start-radius: 0.5em;
        border-start-end-radius: 0.5em;
    }

    > a {
        text-decoration: none;
        color: white;
        font-weight: bold;
        padding-inline: 1em;
        text-shadow: 0 0 0 colors.$primary-color-alpha25;
        transition: text-shadow 150ms, color 200ms;
        
        &:hover {
            color: colors.$primary-color;
            text-shadow: 0.2em 0.2em 0 colors.$primary-color-alpha25;
        }
        &:active {
            color: colors.$primary-color-dark;
            text-shadow: 0.2em 0.2em 0 rgb(0, 80, 0);
        }
    }
    &:not(.error) .hide-no-error {
        display: none;
    }
    &.error {
        background-color: colors.$error-color-alpha75;
        border-bottom-color: colors.$error-color;

        .hide-error {
            display: none;
        }
        .show-error {
            display: block;
        }
    }
}
nav {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0 1em;
    font-size: 1.2em;
    gap: 1em;
}
a:not(header > a) {
    text-decoration: none;
    color: colors.$primary-color;
    padding: 0.15em 0.3em;
    border: 0.15em dashed transparent;
    border-radius: 0.2em;
    transition: background-color 200ms, color 200ms, border-color 200ms;

    &:hover {
        background-color: colors.$primary-color-alpha25;
    }
    &:active {
        color: colors.$primary-color;
        border: 0.15em dashed colors.$primary-color-dark;
    }
}
</style>