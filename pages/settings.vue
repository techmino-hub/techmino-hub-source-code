<script setup lang="ts">
const settings = ref([
    {
        name: "bgEnabled",
        label: "Enable background",
        type: "checkbox",
        value: true
    },
    {
        name: "bgSpeed",
        label: "Background animation speed",
        type: "range",
        value: 1,
        min: 0,
        max: 2,
        step: 0.1
    }
]);

function submitForm() {
    for(let setting of settings.value) {
        localStorage.setItem(setting.name, setting.value.toString());
    }
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
}

onMounted(init);
</script>

<template>
    <div>
        <Title>Techmino Hub - Settings</Title>
        <h1 class="hide-noscript">Settings</h1>
        <form @submit.prevent="submitForm" class="hide-noscript-important">
            <div v-for="setting of settings" :key="setting.name"
              :class="`setting${ setting.type === 'checkbox' ? ' inline' : '' }`">
                <label :for="setting.name">{{ setting.label }}</label>
                <input :type="setting.type" :id="setting.name"
                  :name="setting.name" v-model="setting.value"
                  :min="setting.min" :max="setting.max" :step="setting.step" />
            </div>
            <button type="submit" class="web-btn">Save</button>
        </form>
        <noscript>
            <h1>
                You cannot change your settings with JavaScript disabled.
            </h1>
        </noscript>
    </div>
</template>

<style scoped lang="scss">
@use '~/assets/scss/main';
@use '~/assets/scss/colors';

h1 {
    text-align: center;
}
form {
    display: flex;
    flex-direction: column;
    gap: 0.5em;
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
        padding-bottom: 0.5em;
    }
}
</style>