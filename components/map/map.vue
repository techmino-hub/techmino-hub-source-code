<template>
    <div class="map-outer" ref="mapOuterElement">
        <div v-if="mapData" class="map-elements">
            <MapEdgeSvg :mapData="mapData" />
            <div class="modes">
                <MapMode v-for="mode in mapData.modes" :key="mode.name" :mode="mode" @click="onModeClick()" />
            </div>
        </div>
        <aside class="panel">
            <div class="small">

            </div>
            <div class="wide">

            </div>
        </aside>
    </div>
</template>

<script setup lang="ts">
import { type MapData, isMapDataValid, type Mode, isModeValid, ModeShape } from '~/assets/types/map';

const props = defineProps({
    map: {
        type: String,
        required: false,
        default: 'vanilla'
    }
});

const mapOuterElement = ref<HTMLDivElement | null>(null);
const debugElement = ref<HTMLParagraphElement | null>(null);

let mapData: MapData | undefined;

function isDangerousFileName(fileName: string): boolean {
    if(fileName.length > 32 || fileName.length < 1) {
        return true;
    }

    if(/[^a-zA-Z0-9_\-]/.test(fileName)) {
        return true;
    }

    return false;
}

async function init() {
    if(isDangerousFileName(props.map)) {
        console.error(`Map name '${props.map}' may be dangerous. Aborting.`);
        return;
    }

    const mapPath = `/data/maps/${props.map}.json`;

    const fetchedData = await fetch(mapPath)
        .then((response) => response.json())
        .catch((error) => {
            console.error("Error fetching map data: ", error);
        });

    if(!fetchedData) {
        return;
    }

    if(!isMapDataValid(fetchedData)) {
        console.error("Received invalid map data: ", fetchedData);
        return;
    }

    mapData = fetchedData;
}

function onModeClick() {
    // TODO
}

await init();
</script>

<style scoped lang="scss">
.map-outer {
    position: relative;
    inset: 0;
    width: 100%;
    height: 100%;

    // To be set from JavaScript
    --cam-x: 0; // Camera X position
    --cam-y: 0; // Camera Y position
    --cam-zoom: 1; // Camera zoom scale factor
    --scale-factor: 1; // Screen-based scale factor
    --min-x: 0; --max-x: 0; // Camera X bounds - const
    --min-y: 0; --max-y: 0; // Camera Y bounds - const
}

.debug {
    position: absolute;
    top: 1em; left: 1em;
    font-family: monospace;
}

.map-elements {
    position: relative;
    --total-scale: calc(var(--scale-factor) * var(--cam-zoom));

    width: calc(var(--max-x) - var(--min-x));
    height: calc(var(--max-y) - var(--min-y));

    overflow: visible;

    transform:
        translate(
            calc(50% + 1px * var(--cam-scale) * (var(--cam-y) + var(--min-y))),
            calc(50% + 1px * var(--cam-scale) * (var(--cam-x) + var(--min-x)))
        ), scale(
            calc(var(--cam-scale) * (var(--max-x) - var(--min-x))),
            calc(var(--cam-scale) * (var(--max-y) - var(--min-y)))
        );

    .edges {
        position: absolute;

        z-index: -1;
        pointer-events: none;
        touch-action: none;
    }
}

.panel {
    position: absolute;
    top: 0;
    left: 100%;
    width: 130%;
    height: 100%;
    transform: translateX(0);
    transition: transform 500ms;

    &.open { transform: translateX(-30%) }
    &.expanded { transform: translateX(-130%) }

    .small {
        width: 30%;
        height: 100%;
    }
    .wide {
        width: 100%;
        height: 100%;
    }
}
</style>