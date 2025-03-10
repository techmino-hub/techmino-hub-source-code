<script setup lang="ts">
import type { User } from '@supabase/supabase-js';
import { getChar } from '~/assets/scripts/chars';
const router = useRouter();
const database = useDatabase();

const user: Ref<User | null> = ref(null);

async function signOut() {
    const { error } = await database.supabase.auth.signOut();

    if(error) {
        console.error(error);
    }
}

const navExpanded = ref(false);

onMounted(async function() {
    user.value = (await database.supabase.auth.getUser()).data.user;
})
</script>

<template>
    <header>
        <div class="header-inner">
            <NuxtLinkLocale to="/">
                <h1 v-html="$t('common.appName')"></h1>
            </NuxtLinkLocale>
            <button class="hamburger" @click="navExpanded = !navExpanded">
                <div aria-hidden="true"></div>
                <div aria-hidden="true"></div>
                <div aria-hidden="true"></div>
            </button>
            <nav class="desktop">
                <NuxtLinkLocale
                    to="/"
                    class="hide-no-error"
                    v-thtml="$t('common.nav.home')"
                />
                <NuxtLinkLocale
                    to="/faq"
                    class="hide-error"
                    v-thtml="$t('common.nav.faq')"
                />
                <NuxtLinkLocale
                    to="/map"
                    class="hide-error"
                    v-thtml="$t('common.nav.map')"
                />
                <NuxtLinkLocale
                    to="/leaderboard"
                    class="hide-error"
                    v-thtml="$t('common.nav.leaderboard')"
                />
                <ClientOnly>
                    <NuxtLinkLocale
                        to="/sign-in"
                        class="hide-noscript hide-error"
                        v-if="!user"
                        v-thtml="$t('common.nav.signIn')"
                    />
                    <div class="avy-wrapper" v-if="user">
                        <ProfileAvatar
                            class="avy hide-noscript hide-error"
                            @click="navExpanded = !navExpanded"
                            :profile-id="user.id"
                            role="button"
                        />
                    </div>
                </ClientOnly>
            </nav>
        </div>
        <div :class="{
          'acc-drop': true,
          'hide-mobile': true,
          show: navExpanded
        }">
            <NuxtLinkLocale
                :to="`/profiles/${user?.id}`"
                v-thtml="$t('common.nav.profile')"
            />
            <NuxtLinkLocale
                to="/account/settings"
                v-thtml="$t('common.nav.account')"
            ></NuxtLinkLocale>
            <button @click="signOut">
                {{ $t('common.nav.signOut') }}
            </button>
        </div>
        <nav :class="{ mobile: true, expand: navExpanded }">
            <div class="row">
                <button class="close" @click="navExpanded = !navExpanded">
                    {{ getChar('icon.cross_thick') }}
                </button>
                <ProfileAvatar
                    class="avy hide-noscript hide-error"
                    v-if="user"
                    :profile-id="user.id"
                />
                <div v-if="!user"></div>
            </div>
            <section>
                <em>{{ $t('common.nav.section.pages') }}</em>
                <NuxtLinkLocale
                    to="/"
                    v-thtml="$t('common.nav.home')"
                />
                <NuxtLinkLocale
                    to="/faq"
                    v-thtml="$t('common.nav.faq')"
                />
                <NuxtLinkLocale
                    to="/map"
                    v-thtml="$t('common.nav.map')"
                />
                <NuxtLinkLocale
                    to="/leaderboard"
                    v-thtml="$t('common.nav.leaderboard')"
                />
            </section>
            <section class="hide-noscript">
                <em>{{ $t('common.nav.section.account') }}</em>
                <NuxtLinkLocale
                    to="/sign-in"
                    v-show="!user"
                    v-thtml="$t('common.nav.signIn')"
                />
                <ClientOnly>
                    <NuxtLinkLocale
                        :to="`/profiles/${user?.id}`"
                        v-show="user"
                        v-thtml="$t('common.nav.profile')"
                    />
                </ClientOnly>
                <NuxtLinkLocale
                    to="/account/settings"
                    v-show="user"
                    v-thtml="$t('common.nav.settings')"
                ></NuxtLinkLocale>
                <button
                  type="button"
                  v-show="user"
                  @click="signOut">
                    {{ $t('common.nav.signOut') }}
                </button>
            </section>
        </nav>
    </header>
</template>

<style scoped lang="scss">
@use "~/assets/scss/main";
@use "~/assets/scss/colors";
@use "~/assets/scss/consts";
@use "sass:color";

@media (min-width: #{consts.$header-collapse-width}) {
    button.hamburger, nav.mobile {
        display: none !important;
    }
}

@media (max-width: #{consts.$header-collapse-width}) {
    nav.desktop, .hide-mobile {
        display: none !important;
    }

    button.hamburger, nav.mobile {
        display: flex;
    }
}

header {
    position: relative;
}

.header-inner {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: colors.$secondary-color-alpha75;
    padding: 0.5em 1.5em;
    border-bottom: 0.15em dotted colors.$secondary-color;

    backdrop-filter: blur(var(--blur));
    -webkit-backdrop-filter: blur(var(--blur));

    @media (prefers-reduced-transparency: reduce) {
        background-color: colors.$secondary-color-dark;
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

        @media (max-width: #{consts.$header-collapse-width}) {
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

    nav.desktop {
        display: flex;
        flex-direction: row;
        align-items: center;
        align-self: center;
        justify-content: center;
        flex-wrap: wrap;
        padding: 0 1em;
        font-size: 1.2em;
        gap: 1em;

        > a {
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

    .avy-wrapper {
        position: relative;
    }

    button.hamburger {
        $thickness: 0.125em;

        flex-direction: column;
        justify-content: space-around;
        width: 3.5em;
        height: 3.5em;
        padding: 0.75em;
        margin-block: auto;
        border: 0.1em solid transparent;
        border-radius: 0.5em;
        background-color: transparent;
        cursor: pointer;
        transition: background-color 200ms, border-color 200ms;

        &:hover {
            background-color: #fff2;
            border-color: #fff4;
        }

        &:active {
            background-color: #fff4;
            border-color: #fff6;
        }

        > div {
            width: 100%;
            height: $thickness;
            background-color: white;
            border-radius: $thickness;
        }
    }
}

.avy {
    position: relative;
    width: 2em;
    height: 2em;
    border-radius: 50%;

    :deep(*) {
        font-size: 1em;
    }
}

.desktop .avy {
    cursor: pointer;
}

.acc-drop {
    position: absolute;
    display: flex;
    flex-direction: column;
    font-size: 1.1em;
    min-width: fit-content;
    width: stretch;
    max-width: 16ch;
    gap: 0.25em;
    top: calc(100% - 1em);
    right: 2ch;
    z-index: 2;
    background-color: colors.$secondary-color-darker;
    border: 0.1em solid colors.$secondary-color-dark;
    border-radius: 1em;
    padding: 0.75em;
    opacity: 0;
    transform: translateY(-1em);
    transition: opacity 250ms, transform 250ms;
    pointer-events: none;

    @supports (backdrop-filter: blur(0)) or (-webkit-backdrop-filter: blur(0)) {
        background-color: color.adjust(colors.$secondary-color-alpha75, $lightness: -36.2%);
        backdrop-filter: blur(16.2px);
        -webkit-backdrop-filter: blur(16.2px);
    }

    @media (prefers-reduced-motion: reduce) {
        transition: none;
    }

    &.show {
        opacity: 1;
        transform: translateY(0);
        pointer-events: all;
    }

    a, button {
        box-sizing: border-box;
        width: 100%;
        text-align: start;
        color: white;
        margin: 0;
        padding: 0.25em 0.5em;
        font-weight: light;
        text-decoration: none;
        border: 0.1em solid transparent;
        border-radius: 0.5em;
        background-color: transparent;
        cursor: pointer;
        font-family: 'techmino-proportional';
        font-size: 1em;
        -webkit-user-drag: none;
        transition: background-color 200ms, border-color 200ms;

        &:hover {
            background-color: #fff2;
            border-color: #fff4;
        }

        &:active {
            background-color: #fff4;
            border-color: #fff6;
        }
    }
}

nav.mobile {
    display: flex;
    flex-direction: column;
    justify-content: start;
    text-align: start;

    position: fixed;
    top: 0; left: 100vw;
    padding: 0.5em 1em;
    gap: 1em;
    
    box-sizing: border-box;
    min-width: min-content;
    width: 62.6vw;
    height: 100vh;
    z-index: 2;
    
    overflow: auto;
    background-color: colors.$secondary-color-darker;

    transform: translateX(0);
    transition: transform 250ms;

    @supports (backdrop-filter: blur(0)) or (-webkit-backdrop-filter: blur(0)) {
        background-color: color.adjust(colors.$secondary-color-alpha50, $lightness: -36.2%);

        backdrop-filter: blur(16.2px);
        -webkit-backdrop-filter: blur(16.2px);
    }

    @media (prefers-reduced-motion: reduce) {
        transition: none;
    }

    &.expand {
        transform: translateX(-100%);
    }

    .row {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;

        button {
            width: 2em;
            height: 2em;
            box-sizing: border-box;
            font-family: 'techmino-proportional';
            background-color: transparent;
            color: white;
            font-size: 1.1em;
            border: 0.05em solid transparent;
            border-radius: 50%;
            cursor: pointer;
            user-select: none;
            transition: background-color 200ms, border-color 200ms;

            &:hover {
                background-color: #fff2;
                border-color: #fff4;
            }

            &:active {
                background-color: #fff4;
                border-color: #fff6;
            }
        }
    }

    section {
        display: flex;
        flex-direction: column;
    }

    em {
        font-weight: bold;
        border-block-end: 0.025em solid currentColor;
        margin-block-end: 0.5em;
    }

    a, button {
        box-sizing: border-box;
        width: 100%;
        text-align: start;
        color: white;
        margin: 0;
        padding: 0.25em 0.5em;
        font-weight: light;
        text-decoration: none;
        border: 0.1em solid transparent;
        border-radius: 0.5em;
        background-color: transparent;
        cursor: pointer;
        font-family: 'techmino-proportional';
        font-size: 1em;
        -webkit-user-drag: none;
        transition: background-color 200ms, border-color 200ms;

        &:hover {
            border-color: #fff2;
        }

        &:active {
            background-color: #fff1;
            border-color: #fff4;
        }
    }
}
</style>