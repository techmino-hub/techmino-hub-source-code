<template>
    <svg class="edge-svg">

    </svg>
</template>

<script lang="ts" setup>
import { type MapData } from '~/assets/types/map';

const props = defineProps({
    mapData: {
        type: Object as PropType<MapData>,
        required: true
    }
})
</script>

<style scoped lang="scss">
.edge-svg {
    z-index: -1;
    user-select: none;
    pointer-events: none;
    caret-color: transparent;
}
</style>