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
        <Title>{{ $t('lang.tabTitle') }}</Title>
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
        <i18n-t
          keypath="lang.note"
          scope="global"
          tag="p">
            <NuxtLink
              class="block-style"
              to="https://github.com/techmino-hub/techmino-hub-source-code/wiki/Contributing-to-Translations">
                {{ $t('lang.contribute') }}
            </NuxtLink>
        </i18n-t>
    </div>
</template>

<style scoped lang="scss">
@use '~/assets/scss/colors';

.page {
    padding: 1em 2em;

    h1, p {
        display: block;
        text-align: center;
    }

    form {
        display: flex;
        flex-direction: column;
        max-width: 15em;
        margin-inline: auto;
        margin-block: 2em;

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