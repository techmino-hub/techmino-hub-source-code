<template>
    <div class="duration-inp">
        <input
            type="number"
            class="hours"
            v-model.lazy="hours"
            placeholder="000"
            :required="required"
            :readonly="readonly"
            @change="onChange"
        >
        <span>{{ $t('common.time.hour') }}</span>
        <input
            type="number"
            class="minutes"
            v-model.lazy="minutes"
            maxlength="2"
            placeholder="00"
            :required="required"
            :readonly="readonly"
            @change="onChange"
        >
        <span>{{ $t('common.time.minute') }}</span>
        <input
            type="number"
            class="seconds"
            v-model.lazy="seconds"
            maxlength="2"
            placeholder="00"
            :required="required"
            :readonly="readonly"
            @change="onChange"
        >
        <span>{{ $t('common.separator.decimal') }}</span>
        <input
            type="number"
            class="ms"
            v-model.lazy="ms"
            maxlength="3"
            placeholder="000"
            :required="required"
            :readonly="readonly"
            @change="onChange"
        >
        <span>{{ $t('common.time.second') }}</span>
    </div>
</template>

<script lang="ts" setup>
const props = defineProps({
    id: String,
    required: {
        type: [Boolean, String] as PropType<boolean | "true" | "false">,
        default: true
    },
    name: String,
    readonly: {
        type: [Boolean, String] as PropType<boolean | "true" | "false">,
        default: false
    },
});

const emits = defineEmits(['change']);
const model = defineModel<number>({ default: 0 });

const hours = ref(0);
const minutes = ref(0);
const seconds = ref(0);
const ms = ref(0);

function onChange() {
    // Normalize input
    if (hours.value < 0) hours.value = 0;
    if (minutes.value < 0) minutes.value = 0;
    if (seconds.value < 0) seconds.value = 0;
    if (ms.value < 0) ms.value = 0;

    if (ms.value > 999) {
        seconds.value += Math.floor(ms.value / 1000);
        ms.value %= 1000;
    }
    if (seconds.value > 59) {
        minutes.value += Math.floor(seconds.value / 60);
        seconds.value %= 60;
    }
    if (minutes.value > 59) {
        hours.value += Math.floor(minutes.value / 60);
        minutes.value %= 60;
    }

    model.value =
        hours.value * 3600 +
        minutes.value * 60 +
        seconds.value +
        ms.value * 0.001;

    emits('change', model.value);
}
</script>

<style lang="scss" scoped>
@use '~/assets/scss/colors';

.duration-inp {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.25ch;
    font-family: 'techmino-monospace';
    background-color: black;
    color: white;
    border: 0.1em solid colors.$primary-color;
    padding: 0.5em 1ch;
    border-radius: 0.5em;
    transition: border-color 250ms, box-shadow 150ms;

    &:hover {
        border-color: colors.$btn-hover-border-color;
        box-shadow: 0 0 0.5ch colors.$btn-hover-box-shadow-color;
    }

    &:focus-within {
        border-color: colors.$btn-active-border-color;
        box-shadow: 0 0 1ch colors.$btn-active-box-shadow-color;
    }
}

span {
    color: grey;
    font-size: 1.1em;
}

input {
    box-sizing: content-box;
    appearance: textfield;
    text-align: end;
    font-size: 1em;
    font-family: 'techmino-proportional';
    background-color: transparent;
    border: 0 none grey;
    padding: 0;
    border-block-end: 0.1em solid grey;
    color: white;
    transition: border-color 250ms;

    &:focus {
        outline: 0.1em dashed colors.$btn-active-border-color;
        border-color: colors.$btn-active-border-color;
        box-shadow: 0 0 2ch colors.$btn-active-box-shadow-color;
    }

    &.hours {
        width: 3ch;
    }
    &.minutes {
        width: 2ch;
    }
    &.seconds {
        width: 2ch;
    }
    &.ms {
        width: 3ch;
    }
}

</style>