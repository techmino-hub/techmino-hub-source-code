<template>
    <div class="map-outer" ref="mapOuterElement">
        <div v-if="mapData" class="map-elements">
            <MapEdgeSvg :mapData="mapData" />
            <div class="modes">
                <MapMode v-for="mode in Object.values(mapData.modes)"
                    :key="mode.name"
                    :title="mode.name"
                    :mode="mode"
                    @click="onModeClick(mode.name)"
                />
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
    },
    fullscreen: {
        type: Boolean,
        required: false,
        default: false
    }
});

// let mapData: MapData | null = await import(`~/assets/data/maps/${props.map}.json`);
let mapData: Ref<MapData | null> = ref(
    await import(`~/assets/data/maps/${props.map}.json`)
);

let isMounted = false;

const mapOuterElement = ref<HTMLDivElement | null>(null);
const debugElement = ref<HTMLParagraphElement | null>(null);

function isDangerousFileName(fileName: string): boolean {
    if(fileName.length > 32 || fileName.length < 1) {
        return true;
    }

    if(/[^a-zA-Z0-9_\-]/.test(fileName)) {
        return true;
    }

    return false;
}

function getScaleFactor(width: number, height: number): number {
    const sqrtArea = Math.sqrt(width * height);
    const targetSqrtArea = Math.sqrt(1280 * 720);

    return sqrtArea / targetSqrtArea * (props.fullscreen ? 1.26 : 1.62);
}

function init() {
    if(isDangerousFileName(props.map)) {
        throw new Error(`Invalid map name "${props.map}"`);
    }

    if(!isMapDataValid(mapData.value)) {
        console.error(mapData.value);
        throw new Error(`Invalid map data for map "${props.map}". An object dump is available in the console.`);
    }
    
    if(mapOuterElement.value) {
        const mapStyle = mapOuterElement.value.style;
        mapStyle.setProperty('--min-x', mapData.value?.min_x.toString() ?? '0');
        mapStyle.setProperty('--max-x', mapData.value?.max_x.toString() ?? '0');
        mapStyle.setProperty('--min-y', mapData.value?.min_y.toString() ?? '0');
        mapStyle.setProperty('--max-y', mapData.value?.max_y.toString() ?? '0');
    }

    onResize();
}

function mountedHook() {
    onResize();
    addEventListeners();
    isMounted = true;
}

function addEventListeners() {
    window.addEventListener('resize', onResize);
}

function onModeClick(name: string) {
    // TODO
}

function onResize() {
    if(!mapOuterElement.value) return;

    const mapOuter = mapOuterElement.value;

    const width = mapOuter.clientWidth;
    const height = mapOuter.clientHeight;

    const scaleFactor = getScaleFactor(width, height);

    mapOuter.style.setProperty('--scale-factor', scaleFactor.toString());
}

init();
onMounted(mountedHook);
</script>

<style scoped lang="scss">
.map-outer {
    position: relative;
    inset: 0;
    width: 100%;
    height: 100%;

    overflow: hidden;

    // To be set from JavaScript
    --cam-x: 0px; // Camera X position
    --cam-y: 0px; // Camera Y position
    --cam-zoom: 1; // Camera zoom scale factor
    --scale-factor: 1; // Screen-based scale factor
    --min-x: 0; --max-x: 0; // Camera X bounds - const
    --min-y: 0; --max-y: 0; // Camera Y bounds - const


    // Derived values
    --total-scale: calc(var(--scale-factor) * var(--cam-zoom));

    --map-width:  calc(1px * (var(--max-x) - var(--min-x)));
    --map-height: calc(1px * (var(--max-y) - var(--min-y)));
}

.debug {
    position: absolute;
    top: 1em; left: 1em;
    font-family: monospace;
}

.map-elements {
    position: absolute;

    width: var(--map-width);
    height: var(--map-height);

    left: 50%;
    top: 50%;

    overflow: visible;

    transform: translate(var(--cam-x), var(--cam-y)) scale(var(--total-scale));
    transform-box: view-box;

    .edges {
        position: absolute;

        z-index: -1;
        pointer-events: none;
        touch-action: none;
        caret-color: transparent;
    }

    .modes {
        user-select: none;
        caret-color: transparent;
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