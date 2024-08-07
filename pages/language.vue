<script setup lang="ts">
import { langNameMap } from '~/assets/types/lang';
const { locale: curLocale, availableLocales, setLocale } = useI18n();

function setLanguage(event: Event) {
    const language: string = (event.target as HTMLFormElement).language.value;
    setLocale(language);
}
</script>

<template>
    <div class="page">
        <h1>{{ $t('lang.title') }}</h1>
        <form @submit.prevent="setLanguage" class="hide-noscript-important">
            <select name="language">
                <option
                  v-for="locale in availableLocales"
                  :value="locale"
                  :selected="locale === curLocale"
                >
                    {{ langNameMap[locale] ?? locale }}
                </option>
            </select>
            <button type="submit" class="web-btn">{{ $t('lang.setLang') }}</button>
        </form>
        <noscript>
            <menu>
                <li v-for="locale in availableLocales">
                    <NuxtLinkLocale to="/language" :locale="locale">
                        {{ langNameMap[locale] ?? locale }}
                    </NuxtLinkLocale>
                </li>
            </menu>
        </noscript>
    </div>
</template>

<style scoped lang="scss">
@use '~/assets/scss/colors';

.page {
    width: fit-content;
    margin-inline: auto;
    padding-block: 2em;

    form {
        display: flex;
        max-width: 15em;
        flex-direction: column;
        margin-inline: auto;
        margin-top: 1em;
        gap: 0.5em;

        select {
            height: 2.5em;
            font-size: 1em;
            font-family: 'techmino-proportional';

            background-color: black;
            color: white;
            border: 0.15em solid colors.$primary-color;
            border-radius: 0.5em;
            padding: 0.25em;

            option {
                font-family: 'techmino-proportional';
            }
        }
    }
}
</style>