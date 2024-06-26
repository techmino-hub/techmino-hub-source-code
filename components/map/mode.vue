<script lang="ts" setup>
import { type Mode, ModeShape, Rank } from '~/assets/types/map';

const props = defineProps({
    mode: {
        type: Object as PropType<Mode>,
        required: true
    },
    rank: {
        type: Number as PropType<Rank>,
        required: false,
        default: Rank.Q
    }
});

defineEmits(['click']);

const modeElement = ref<HTMLButtonElement | null>(null);

onMounted(() => {
    const mode = props.mode;

    if(modeElement.value) {
        const style = modeElement.value.style;

        const radius = 0.5 * mode.size;

        style.left = `${mode.x - radius}px`;
        style.top = `${mode.y - radius}px`;
        style.setProperty('--size', `${mode.size}px`)
    }
});
</script>

<template>
    <button :class="`mode ${ModeShape[mode.shape]} rank-${Rank[rank]}`" ref="modeElement" @click="$emit('click')">
        <div :class="`border ${ModeShape[mode.shape]}`">

        </div>
    </button>
</template>

<style scoped lang="scss">
@use '~/assets/scss/colors';

.mode {
    position: absolute;
    width: var(--size);
    height: var(--size);
    border: 0 none transparent;
    background-color: transparent;
    cursor: pointer;
    padding: 0;

    --size: 40px;
    --disp-size: calc(var(--size) * var(--total-scale));
    --bg-color: colors.$mode-bg-q;

    &.rank-B { --bg-color: #{colors.$mode-bg-b}; }
    &.rank-A { --bg-color: #{colors.$mode-bg-a}; }
    &.rank-S { --bg-color: #{colors.$mode-bg-s}; }
    &.rank-U { --bg-color: #{colors.$mode-bg-u}; }
    &.rank-X { --bg-color: #{colors.$mode-bg-x}; }

    .square {
        box-sizing: border-box;
        width: var(--size);
        height: var(--size);
        background-color: var(--bg-color);
        border: solid white 2px;
    }
}
</style>