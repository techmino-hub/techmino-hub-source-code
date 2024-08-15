<template>
    <div class="sub-form-inp">
        <input
            :type="props.type"
            :required="props.required"
            :id="props.id"
            :name="props.name"
            :readonly="props.readonly"
            v-model.lazy="props.modelValue"
            @change="onChange"
        >
        <p>{{ message }}</p>
    </div>
</template>

<script lang="ts" setup>
import { type InputHTMLAttributes } from 'vue';

const props = defineProps({
    modelValue: {
        type: [String, Number] as PropType<string | number>,
        required: false
    },
    type: {
        type: String as PropType<InputHTMLAttributes['type']>,
        default: 'text'
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
    transformer: {
        type: [Function] as PropType<((value: string) => string | number)>,
        default: (s: string) => s,
    }
});

const emit = defineEmits(['update:modelValue']);
const message = ref('');
const isMessageError = ref(false);

function onChange(event: Event) {
    const target = event.target as HTMLInputElement;
    emit('update:modelValue', props.transformer(target.value));
}
</script>

<style lang="scss" scoped>
.sub-form-inp {
    display: flex;
    flex-direction: column;
    gap: 0.2em;
}
input {

}
.err {
    color: red;
}
</style>