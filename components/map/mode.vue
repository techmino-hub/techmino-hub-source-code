<script lang="ts" setup>
import { type Mode, ModeShape, Rank } from '~/assets/types/map';
import { getModeIconPath } from '~/assets/data/mode-icons';

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
</script>

<template>
    <button
      :class="`mode ${ModeShape[mode.shape]} rank-${Rank[rank]}`"
      :style="{
        left: mode.x - mode.size + 'px',
        top: mode.y - mode.size + 'px',
        '--size': 2 * mode.size + 'px'
      }">
        <div
            v-if="mode.shape == ModeShape.square"
            class="border square"
            @click="$emit('click')"
        ></div>
        <svg
          v-else-if="mode.shape == ModeShape.octagon"
          class="border octagon"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="-4.5 -4.5 109 109"
          @click="$emit('click')">
            <polygon
                points="100,50 85.36,85.36 50,100 14.64,85.36 0,50 14.64,14.64 50,0 85.36,14.64"
                stroke-width="7"
            />
        </svg>
        <svg
          v-else-if="mode.shape == ModeShape.diamond"
          class="border diamond"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="-4.5 -4.5 109 109"
          @click="$emit('click')">
            <polygon
                points="100,50 50,100 0,50 50,0"
                stroke-width="5"
            />
        </svg>

        <img
            :src="getModeIconPath(mode)"
            alt=""
            class="icon"
            onerror="false"
        >
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
        position: absolute;
        inset: 0;
        width: var(--size);
        height: var(--size);
        color: var(--border-color);
        border-color: var(--border-color);
        stroke: var(--border-color);
        z-index: -1;
        cursor: pointer;

        &.square {
            box-sizing: border-box;
            background-color: var(--bg-color);
            border: solid 5px;
        }

        &.diamond {
            width: calc(1.25 * var(--size));
            height: calc(1.25 * var(--size));
            inset: calc(-0.125 * var(--size));
        }
    }

    .icon {
        position: absolute;
        inset: calc(0.05 * var(--size));
        width: calc(0.9 * var(--size));
        height: calc(0.9 * var(--size));
        margin: auto;
    }

    &.octagon .icon {
        inset: calc(0.125 * var(--size));
        width: calc(0.75 * var(--size));
        height: calc(0.75 * var(--size));
        margin: auto;
    }
}
</style>