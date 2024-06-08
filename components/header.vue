<script lang="ts">

</script>

<template>
    <header>
        <NuxtLink to="/">
            <h1>
                Techmino Hub
            </h1>
        </NuxtLink>
        <nav>
            <NuxtLink to="/" class="hide-no-error">
                Home
            </NuxtLink>
            <NuxtLink to="/faq" class="hide-error">
                FAQ
            </NuxtLink>
            <NuxtLink to="/map" class="hide-error">
                Map
            </NuxtLink>
            <NuxtLink to="/sign-in" class="hide-noscript hide-error">
                Sign In
            </NuxtLink>
        </nav>
    </header>
</template>

<style lang="scss" scoped>
@use "~/assets/scss/main.scss";
header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: main.$secondary-color-dark-alpha75;
    padding: 0.5em 1.5em;
    border-bottom: 0.15em dotted main.$secondary-color;

    @media (min-width: 700px) {
        border-start-start-radius: 0.5em;
        border-start-end-radius: 0.5em;
    }

    > a {
        text-decoration: none;
        color: white;
        font-weight: bold;
        padding-inline: 1em;
        text-shadow: 0 0 0 main.$primary-color-alpha25;
        transition: text-shadow 150ms, color 200ms;
        
        &:hover {
            color: main.$primary-color;
            text-shadow: 0.2em 0.2em 0 main.$primary-color-alpha25;
        }
        &:active {
            color: main.$primary-color-dark;
            text-shadow: 0.2em 0.2em 0 rgb(0, 80, 0);
        }
    }
    &:not(.error) .hide-no-error {
        display: none;
    }
    &.error {
        background-color: main.$error-color-dark-alpha75;
        border-bottom-color: main.$error-color;

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
    color: main.$primary-color;
    padding: 0.15em 0.3em;
    border: 0.15em dashed transparent;
    border-radius: 0.2em;
    transition: background-color 200ms, color 200ms, border-color 200ms;

    &:hover {
        background-color: main.$primary-color-alpha25;
    }
    &:active {
        color: main.$primary-color;
        border: 0.15em dashed main.$primary-color-dark;
    }
}
</style>