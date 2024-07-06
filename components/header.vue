<script setup lang="ts">
const localePath = useLocalePath();

const supabase = useSupabase();

const user = ref((await supabase.auth.getUser()).data.user);

async function signOut() {
    const { error } = await supabase.auth.signOut();

    if(error) {
        console.error(error);
    }
}
</script>

<template>
    <header>
        <NuxtLink :to="localePath('/')">
            <h1 v-html="$t('common.appName')"></h1>
        </NuxtLink>
        <nav>
            <NuxtLink
                :to="localePath('/')"
                class="hide-no-error"
                v-thtml="$t('common.nav.home')"
            />
            <NuxtLink
                :to="localePath('/faq')"
                class="hide-error"
                v-thtml="$t('common.nav.faq')"
            />
            <NuxtLink
                :to="localePath('/map')"
                class="hide-error"
                v-thtml="$t('common.nav.map')"
            />
            <NuxtLink
                :to="localePath('/sign-in')"
                class="hide-noscript hide-error"
                v-show="!user"
                v-thtml="$t('common.nav.signIn')"
            />
            <button
                class="hide-noscript hide-error"
                v-show="user"
                @click="supabase.auth.signOut()"
                v-thtml="$t('common.nav.signOut')"
            ></button>
        </nav>
    </header>
</template>

<style scoped lang="scss">
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

    @media (max-width: 700px) {
        flex-direction: column;
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

        @media (max-width: 700px) {
            h1 {
                margin-block: 0.5em;
            }
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

    nav {
        display: flex;
        flex-direction: row;
        align-items: center;
        align-self: center;
        justify-content: center;
        flex-wrap: wrap;
        padding: 0 1em;
        font-size: 1.2em;
        gap: 1em;

        @media (max-width: 700px) {
            width: fit-content;
            align-self: start;
            padding: 0.2em 0.5em;
            gap: 0.5em;
            row-gap: 0.5em;
            font-size: 1.3em;
        }

        > * {
            position: relative;
            text-decoration: none;
            color: colors.$primary-color;
            padding: 0.15em 0.3em;
            border: 0.15em dashed transparent;
            border-radius: 0.2em;
            font-family: 'techmino-proportional';
            font-size: 1em;
            background-color: transparent;
            cursor: pointer;
            transition: background-color 200ms, color 200ms, border-color 200ms;

            @media (prefers-contrast: more) {
                background-color: black !important;
            }

            p {
                margin-block: auto;
            }

            &:hover {
                background-color: colors.$primary-color-alpha25;
            }
            &:active {
                color: colors.$primary-color;
                border: 0.15em dashed colors.$primary-color-dark;
            }
        }
    }
}
</style>