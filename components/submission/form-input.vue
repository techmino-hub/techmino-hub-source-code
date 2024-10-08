<template>
    <div class="sub-form-inp">
        <input
            :class="{ err: errMessage }"
            :type="props.type"
            :required="props.required"
            :id="props.id"
            :name="props.name"
            :readonly="props.readonly"
            :placeholder="$t('submit.placeholder')"
            :value="props.value"
            @change="onChange"
        >
        <p
            :class="{ err: errMessage }"
            v-show="message.trim().length > 0"
            v-text="message"
        ></p>
    </div>
</template>

<script lang="ts" setup>
import { type InputHTMLAttributes } from 'vue';

const i18n = useI18n();

const props = defineProps({
    type: {
        type: String as PropType<InputHTMLAttributes['type']>,
        default: 'text'
    },
    convertToNumber: {
        type: Boolean,
        default: false
    },
    id: {
        type: String,
        required: false
    },
    required: {
        type: [Boolean, String] as PropType<boolean | "true" | "false">,
        default: true
    },
    name: {
        type: String,
        required: false
    },
    readonly: {
        type: [Boolean, String] as PropType<boolean | "true" | "false">,
        default: false
    },
    placeholder: {
        type: String,
        default: ''
    },
    transformer: {
        type: [Function] as PropType<((value: string) => string | null)>,
        default: (s: string) => s,
    },
    message: {
        type: String,
        default: ''
    },
    value: {
        type: [String, Number],
        required: false
    }
});

const errMessage = ref<string | null>(null);
const message = computed(() => errMessage.value || props.message);

const emits = defineEmits(['change']);

function onChange(e: Event) {
    const target = e.target as HTMLInputElement;
    
    const preVal = target.value;
    
    try {
        let postVal: string | number | null = props.transformer(preVal);
        
        if(postVal === null) {
            errMessage.value = i18n.t('submit.invalidInput');
            return;
        }

        if(props.convertToNumber || props.type === "number") {
            if(isNaN(postVal as any)) {
                errMessage.value = i18n.t('submit.invalidInput');
                return;
            }
            postVal = Number(postVal);
        }
        
        errMessage.value = '';

        emits('change', postVal);
    } catch (e) {
        errMessage.value = i18n.t('submit.invalidInput');
    }
}
</script>

<style lang="scss" scoped>
@use '~/assets/scss/colors';

.sub-form-inp {
    display: flex;
    flex-direction: column;
    gap: 0.2em;
}
input {
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

    &:focus {
        border-color: colors.$btn-active-border-color;
        box-shadow: 0 0 1ch colors.$btn-active-box-shadow-color;
    }

    &.err {
        border-color: colors.$error-color;
        box-shadow: none;
    }
}

input[readonly] {
    border-color: colors.$error-color;
    box-shadow: none !important;
    cursor: not-allowed;
}

p {
    margin: 0;

    &.err {
        color: red;
    }
}
</style>