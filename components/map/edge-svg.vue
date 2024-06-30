<template>
    <svg class="edge-svg">
        <g v-for="origin in mapData.modes">
            <line
                v-for="targetIndex in origin.unlock"
                :key="`${origin.name}-${targetIndex}`"
                :x1="origin.x"
                :y1="origin.y"
                :x2="mapData.modes[targetIndex].x"
                :y2="mapData.modes[targetIndex].y"
            />
        </g>
    </svg>
</template>

<script lang="ts" setup>
import { type MapData } from '~/assets/types/map';

const props = defineProps({
    mapData: {
        type: Object as PropType<MapData>,
        required: true
    }
});
</script>

<style scoped lang="scss">
@use '~/assets/scss/colors';

.edge-svg {
    position: absolute;
    z-index: -1;
    user-select: none;
    pointer-events: none;
    caret-color: transparent;
    overflow: visible;

    line {
        stroke-width: 8px;
        stroke: colors.$map-edge-color;
    }
}
</style>