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
                    />
                    <div :class="{
                      'acc-drop': true,
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
                </div>
            </ClientOnly>
        </nav>
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
                <div v-if="!user">
                    <!--
                        I don't know why but v-else would break stuff here
                        so I'm using v-if instead.

                        Div intentionally left blank to keep the layout
                    -->
                </div>
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

header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: colors.$secondary-color-alpha75;
    padding: 0.5em 1.5em;
    border-bottom: 0.15em dotted colors.$secondary-color;

    @media (min-width: #{consts.$header-collapse-width}) {
        button.hamburger, nav.mobile {
            display: none;
        }
    }

    @media (max-width: #{consts.$header-collapse-width}) {
        nav.desktop {
            display: none !important;
        }

        button.hamburger, nav.mobile {
            display: flex;
        }
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

    .acc-drop {
        position: absolute;
        display: flex;
        pointer-events: none;
        flex-direction: column;
        min-width: fit-content;
        gap: 0.25em;
        top: calc(100% + 1em);
        right: -1em;
        left: -16ch;
        z-index: 2;
        background-color: colors.$secondary-color-darker;
        border-radius: 1em;
        padding: 0.75em;
        opacity: 0;
        transform: translateY(-1em);
        transition: opacity 250ms, transform 250ms;

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

    .acc-drop.show {
        opacity: 1;
        transform: translateY(0);
        pointer-events: auto;
    }

    nav.mobile {
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
}
</style>