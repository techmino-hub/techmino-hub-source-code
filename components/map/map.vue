<template>
    <div
      :style="{
        '--cam-x': camX,
        '--cam-y': camY,
        '--cam-zoom': camZoom,
        '--scale-factor': scaleFactor,
        '--min-x': mapData?.min_x ?? 0,
        '--max-x': mapData?.max_x ?? 0,
        '--min-y': mapData?.min_y ?? 0,
        '--max-y': mapData?.max_y ?? 0
      }"
      class="map-outer"
      ref="mapOuterElement"
      tabindex="0">
        <div class="unfocused-warning" v-if="!fullscreen" v-show="isFocused">
            <div class="inner">
                {{ $t('map.unfocused') }}
            </div>
        </div>
        <div v-if="mapData" v-show="isMounted" class="map-elements">
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

const ZOOM_SPEED_MULT = 0.00262;
const ZOOM_SCROLL_MULT = -0.6;
const MIN_ZOOM = 0.126;
const MAX_ZOOM = 1.26;
const MAP_MARGIN = 62;

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

let keyDownSet = new Set<string>();
let prevTimestamp = performance.now();

let mapData: Ref<MapData | null> = ref(
    await import(`~/assets/data/maps/${props.map}.json`)
);

const mapOuterElement = ref<HTMLDivElement | null>(null);
const debugElement = ref<HTMLParagraphElement | null>(null);
const isMounted = ref<boolean>(false);
const isFocused = ref<boolean>(props.fullscreen);

const camX = ref<number>(0);
const camY = ref<number>(0);
const camZoom = ref<number>(1);
const scaleFactor = ref<number>(1);

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

    isMounted.value = true;
}

function addEventListeners() {
    window.addEventListener('resize', onResize);
    
    window.addEventListener('keydown', onKeyDown);
    window.addEventListener('keyup',   onKeyUp);
}

function handleKeys(dt: number) {
    if(keyDownSet.has('ControlLeft') || keyDownSet.has('ControlRight')) {
        // Zoom in/out
        const zoomExp =
            (+ keyDownSet.has("ArrowUp")) +
            (+ keyDownSet.has("ArrowRight")) -
            (+ keyDownSet.has("ArrowDown")) -
            (+ keyDownSet.has("ArrowLeft")) +
            (+ keyDownSet.has("KeyW")) +
            (+ keyDownSet.has("KeyD")) -
            (+ keyDownSet.has("KeyA")) -
            (+ keyDownSet.has("KeyS")) +
            (+ keyDownSet.has("Equal")) +
            (+ keyDownSet.has("NumpadAdd")) -
            (+ keyDownSet.has("Minus")) -
            (+ keyDownSet.has("NumpadSubtract"));
        
        const zoomMultiplier =
            Math.exp(zoomExp * dt * ZOOM_SPEED_MULT);

        camZoom.value = clamp(
            MIN_ZOOM,
            camZoom.value * zoomMultiplier,
            MAX_ZOOM
        );
    }
}

function update(curTimestamp: number) {
    const dt = curTimestamp - prevTimestamp;
    prevTimestamp = curTimestamp;

    handleKeys(dt);

    if(keyDownSet.size > 0) {
        requestAnimationFrame(update);
    }
}

function isTargetInMap(target: EventTarget | null): boolean {
    if(!(target instanceof HTMLElement)) return false;
    
    if(props.fullscreen) return true;

    return mapOuterElement.value?.contains(target) ?? false;
}

const UNPREVENTED_CODES = new Set([
    'F5', 'F12', 'KeyR'
])

function onKeyDown(this: Window, ev: KeyboardEvent) {
    if(!isTargetInMap(ev.target)) return;

    const startUpdate = keyDownSet.size === 0;

    keyDownSet.add(ev.code);

    if(startUpdate) {
        prevTimestamp = performance.now();
        update(performance.now());
    }

    if(!UNPREVENTED_CODES.has(ev.code)) {
        ev.preventDefault();
    }
}

function onKeyUp(this: Window, ev: KeyboardEvent) {
    if(!isTargetInMap(ev.target)) return;

    keyDownSet.delete(ev.code);
}

function onModeClick(name: string) {
    // TODO
}

function onResize() {
    if(!mapOuterElement.value) return;

    const mapOuter = mapOuterElement.value;

    const width = mapOuter.clientWidth;
    const height = mapOuter.clientHeight;

    scaleFactor.value = getScaleFactor(width, height);
}

function clamp(min: number, val: number, max: number): number {
    return Math.min(Math.max(min, val), max);
}

init();
onMounted(mountedHook);
</script>

<style scoped lang="scss">
@use '~/assets/scss/colors';

.map-outer {
    position: relative;
    inset: 0;
    width: 100%;
    height: 100%;

    overflow: hidden;

    // To be set through refs
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

    .unfocused-warning {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    &.suppress-unfocused .unfocused-warning,
    &:focus .unfocused-warning,
    &:focus-within .unfocused-warning {
        display: none;
    }
}

.unfocused-warning {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;

    background-color: colors.$map-unfocused-bg-color;
    color: colors.$map-unfocused-text-color;

    z-index: 100;

    .inner {
        background-color: black;
        border: 0.1em solid colors.$map-unfocused-border-color;

        padding: 0.5em 1em;

    }
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
    transform-origin: 50% 50%;

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