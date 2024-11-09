<script setup lang="ts">
import type { InputTypeHTMLAttribute } from 'vue';

type Setting = {
    name: string;
    type: InputTypeHTMLAttribute;
    value: boolean | number;
    min?: number;
    max?: number;
    step?: number;
    display?: ((value: boolean | number) => string);
}

const loading = ref(true);
const settings = ref([
    {
        name: "bgEnabled",
        type: "checkbox",
        value: true
    },
    {
        name: "bgSpeed",
        type: "range",
        value: 1,
        min: 0,
        max: 2,
        step: 0.1,
        display: (value: number) => `${(value * 100).toFixed(0)}%`
    },
    {
        name: "mainPanelBlur",
        type: "range",
        value: 0,
        min: 0,
        max: 10,
        step: 0.1,
        display: (value: number) => `${value} px`
    }
]) as Ref<Setting[]>;

function saveSettings() {
    for(let setting of settings.value) {
        localStorage.setItem(setting.name, setting.value.toString());
    }
    location.reload();
}

function init() {
    for(let setting of settings.value) {
        let value = localStorage.getItem(setting.name);
        if(value === null) continue;

        if(setting.type === "checkbox") {
            setting.value = value === "true";
        } else if(setting.type === "range") {
            setting.value = parseFloat(value);
        }
    }

    loading.value = false;
}

onMounted(init);
</script>

<template>
    <div class="page-outer">
        <Title>{{ $t('settings.tabTitle') }}</Title>
        <Meta property="og:title" :content="$t('settings.tabTitle')" />
        <h1 class="hide-noscript">{{ $t('settings.title') }}</h1>
        <p class="loading hide-noscript" v-if="loading">{{ $t('settings.loading') }}</p>
        <form @submit.prevent="saveSettings" v-if="!loading">
            <div v-for="setting of settings" :key="setting.name"
              :class="{
                setting: true,
                inline: setting.type === 'checkbox'
              }">
                <span>
                    <label :for="setting.name">
                        {{ $t(`settings.settings.${setting.name}`) }}
                    </label>
                    <span v-if="setting.display">
                        {{ setting.display(setting.value) }}
                    </span>
                </span>
                <input :type="setting.type" :id="setting.name"
                  :name="setting.name" v-model="setting.value"
                  :min="setting.min" :max="setting.max" :step="setting.step" />
            </div>
            <button type="submit" class="web-btn">
                {{ $t('settings.save') }}
            </button>
        </form>
        <p class="center-text hide-noscript">{{ $t('settings.note') }}</p>
        <noscript>
            <h1>{{ $t('settings.noscriptWarn') }}</h1>
        </noscript>
    </div>
</template>

<style scoped lang="scss">
@use '~/assets/scss/main';
@use '~/assets/scss/colors';

.page-outer {
    padding-block: 0.5em;
}
h1, #loading-text {
    text-align: center;
}
form {
    display: flex;
    flex-direction: column;
    gap: 1em;
    margin-inline: auto;
    max-width: 20em;
    background-color: colors.$primary-color-alpha10;
    border: 0.15em solid colors.$primary-color;
    border-radius: 0.5em;
    padding: 1em 2em;
    font-size: 1.25em;
}
.setting {
    display: flex;
    flex-direction: column;

    &.inline {
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
    }
    &:not(:last-child) {
        border-bottom: 0.1em solid colors.$primary-color-alpha10;
        padding-bottom: 1em;
    }

    span {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
}
</style>