<template>
    <div>
        <Title>
            {{ $t('mapLite.tabTitle')}}
        </Title>
        <div
          v-if="mapData"
          class="map-elements"
          :style="{
            top: -mapData.min_y + 30 + 'px',
            left: -mapData.min_x + 30 + 'px'
          }">
            <MapEdgeSvg class="edges" :mapData="mapData" />
            <div class="modes">
                <MapModeLite
                    v-for="mode in Object.values(mapData.modes)"
                    :key="mode.name"
                    :mode="mode"
                    :map="currentMap"
                />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import {
    type MapData,
    isMapDataValid,
} from '~/assets/types/map';

const route = useRoute();
let currentMap: string = 'vanilla';

{
    const map = route.query.map;

    if(typeof map === 'string') {
        currentMap = map;
    } else if(Array.isArray(map) && map.length > 0) {
        currentMap = map[0] ?? 'vanilla';
    } else {
        currentMap = 'vanilla';
    }
}

definePageMeta({
    layout: 'bg-only'
});

let mapData: Ref<MapData> = ref(
    await import(`~/assets/data/maps/${currentMap}.json`)
);

function isDangerousFileName(fileName: string): boolean {
    if(fileName.length > 32 || fileName.length < 1) {
        return true;
    }

    if(/[^a-zA-Z0-9_\-]/.test(fileName)) {
        return true;
    }

    return false;
}
function init() {
    if(isDangerousFileName(currentMap)) {
        throw new Error(`Invalid map name "${currentMap}"`);
    }

    if(!isMapDataValid(mapData.value)) {
        console.error(mapData.value);
        throw new Error(`Invalid map data for map "${currentMap}". An object dump is available in the console.`);
    }
}

init();
</script>

<style scoped lang="scss">
.map-elements {
    position: absolute;

    top: var(--offset-x);
    left: var(--offset-y);
}
</style>