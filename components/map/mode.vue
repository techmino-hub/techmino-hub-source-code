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

        const size = mode.size * 2;
        const radius = 0.5 * size;

        style.left = `${mode.x - radius}px`;
        style.top = `${mode.y - radius}px`;
        style.setProperty('--size', `${size}px`)
    }
});
</script>

<template>
    <button :class="`mode ${ModeShape[mode.shape]} rank-${Rank[rank]}`" ref="modeElement" @click="$emit('click')">
        <div
            v-if="mode.shape == ModeShape.square"
            class="border square"
        ></div>
        <svg
          v-else-if="mode.shape == ModeShape.octagon"
          class="border octagon"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="-4.5 -4.5 109 109">
            <polygon
                points="100,50 85.36,85.36 50,100 14.64,85.36 0,50 14.64,14.64 50,0 85.36,14.64"
                stroke-width="5"
            />
        </svg>
        <svg
          v-else-if="mode.shape == ModeShape.diamond"
          class="border diamond"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="-4.5 -4.5 109 109">
            <polygon
                points="100,50 50,100 0,50 50,0"
                stroke-width="5"
            />
        </svg>
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
    --bg-color: #{colors.$mode-bg-q};
    --border-color: #{colors.$mode-border};

    &.rank-B { --bg-color: #{colors.$mode-bg-b}; }
    &.rank-A { --bg-color: #{colors.$mode-bg-a}; }
    &.rank-S { --bg-color: #{colors.$mode-bg-s}; }
    &.rank-U { --bg-color: #{colors.$mode-bg-u}; }
    &.rank-X { --bg-color: #{colors.$mode-bg-x}; }

    &:active {
        --border-color: #{colors.$mode-border-active};
    }

    .border {
        color: var(--border-color);
        border-color: var(--border-color);
        stroke: var(--border-color);
    }

    .square {
        box-sizing: border-box;
        width: var(--size);
        height: var(--size);
        background-color: var(--bg-color);
        border: solid 5px;
    }
}
</style>