<template>
    <div
      :style="{
        '--cam-x': -camX + 'px',
        '--cam-y': -camY + 'px',
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
        <pre class="debug">{{ debugText }}</pre>
        <svg class="crosshair" viewBox="0 0 10 10" v-show="showCrosshair">
            <line x1="0" y1="5" x2="10" y2="5" />
            <line x1="5" y1="0" x2="5" y2="10" />
        </svg>
        <div v-if="mapData" v-show="isMounted" class="map-elements">
            <MapEdgeSvg :mapData="mapData" />
            <div class="modes">
                <MapMode v-for="mode in Object.values(mapData.modes)"
                    :key="mode.name"
                    :title="mode.name"
                    :mode="mode"
                    :selected="(!!selectedMode) && (selectedMode.name === mode.name)"
                    @click="onModeClick(mode.name)"
                />
            </div>
        </div>
        <aside
          :class="{
            'panel': true,
            'open': !!selectedMode && !isPanelExpanded,
            'expanded': !!selectedMode && isPanelExpanded
          }">
            <div class="small">
                <div class="top">
                    <h1
                        class="title"
                        v-t="`modes.${lastSelectedMode.name}.title`"
                    ></h1>
                    <h2
                        class="subtitle"
                        v-t="`modes.${lastSelectedMode.name}.subtitle`"
                    ></h2>
                    <h4
                        class="version-info"
                        v-t="`modes.${lastSelectedMode.name}.version_info`"
                    ></h4>
                    <p
                        class="description"
                        v-t="`modes.${lastSelectedMode.name}.description`"
                    ></p>
                </div>
                <div class="bottom">

                </div>
            </div>
            <div class="wide">

            </div>
        </aside>
    </div>
</template>

<script setup lang="ts">
import { type MapData, isMapDataValid, type Mode, isModeValid, ModeShape } from '~/assets/types/map';

const MOVE_SPEED_MULT = 0.462;
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

let totalMovement = 0;
let isDragging = false;
let pendingUnselect = false;
let cancelNextModeSelect = false;

let mapData: Ref<MapData> = ref(
    await import(`~/assets/data/maps/${props.map}.json`)
);

const mapOuterElement = ref<HTMLDivElement | null>(null);
const debugText = ref<string>('Update loop halted.');
const isMounted = ref<boolean>(false);
const isFocused = ref<boolean>(props.fullscreen);

const camX = ref<number>(0);
const camY = ref<number>(0);
const camZoom = ref<number>(1);
const scaleFactor = ref<number>(1);

const showCrosshair = ref<boolean>(false);
const isPanelExpanded = ref<boolean>(false);

const selectedMode = ref<Mode | null>(null);
const lastSelectedMode = ref<Mode>(Object.values(mapData.value.modes)[0]);

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

    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup',   onMouseUp);
    window.addEventListener('wheel',     onWheel, { passive: false });
}

function handleZoomKeys(dt: number) {
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

    if(zoomMultiplier === 1) return;

    showCrosshair.value = false;

    camZoom.value = clamp(
        MIN_ZOOM,
        camZoom.value * zoomMultiplier,
        MAX_ZOOM
    );
}

function handleMoveKeys(dt: number) {
    const initialdx =
        (+ keyDownSet.has("ArrowRight")) -
        (+ keyDownSet.has("ArrowLeft")) +
        (+ keyDownSet.has("KeyD")) -
        (+ keyDownSet.has("KeyA"));
    
    const initialdy =
        (+ keyDownSet.has("ArrowDown")) -
        (+ keyDownSet.has("ArrowUp")) +
        (+ keyDownSet.has("KeyS")) -
        (+ keyDownSet.has("KeyW"));
    
    const dx = initialdx * dt * MOVE_SPEED_MULT / camZoom.value;
    const dy = initialdy * dt * MOVE_SPEED_MULT / camZoom.value;

    if(dx === 0 && dy === 0) return;

    showCrosshair.value = true;

    moveMap(dx, dy);

    const modeAtCenter = getModeAtCenter();

    if(modeAtCenter) {
        selectMode(modeAtCenter);
    }
}

function handleKeys(dt: number) {
    if(keyDownSet.has('ControlLeft') || keyDownSet.has('ControlRight')) {
        handleZoomKeys(dt);
    } else {
        handleMoveKeys(dt);
    }

    if(keyDownSet.has('Escape')) {
        selectMode(null);
    }
}

function moveMap(dx: number, dy: number) {
    const minX = (mapData.value?.min_x ?? 0) - MAP_MARGIN;
    const maxX = (mapData.value?.max_x ?? 0) + MAP_MARGIN;
    const minY = (mapData.value?.min_y ?? 0) - MAP_MARGIN;
    const maxY = (mapData.value?.max_y ?? 0) + MAP_MARGIN;

    camX.value = clamp(
        minX,
        camX.value + dx,
        maxX
    );

    camY.value = clamp(
        minY,
        camY.value + dy,
        maxY
    );
}

function update(curTimestamp: number) {
    const dt = curTimestamp - prevTimestamp;
    prevTimestamp = curTimestamp;

    handleKeys(dt);

    debugText.value = `dt: ${dt.toFixed(0)} ms\nsel: ${selectedMode.value?.name ?? 'none'}`;

    if(keyDownSet.size > 0) {
        requestAnimationFrame(update);
    } else {
        debugText.value = "Update loop halted."
    }
}

function isTargetInMap(target: EventTarget | null): boolean {
    if(!(target instanceof HTMLElement)) return false;
    
    if(props.fullscreen) return true;

    return mapOuterElement.value?.contains(target) ?? false;
}

const UNPREVENTED_CODES = new Set([
    'KeyR', 'KeyI'
]);

function onKeyDown(ev: KeyboardEvent) {
    if(!isTargetInMap(ev.target)) return;

    const startUpdate = keyDownSet.size === 0;

    keyDownSet.add(ev.code);

    // console.debug('keydown', ev.code);

    if(startUpdate) {
        prevTimestamp = performance.now();
        update(performance.now());
    }

    if(
        (ev.code.includes("Key") || ev.code.includes("Arrow"))
        && !UNPREVENTED_CODES.has(ev.code)
    ) {
        ev.preventDefault();
    }
}

function onKeyUp(ev: KeyboardEvent) {
    if(!isTargetInMap(ev.target)) return;

    keyDownSet.delete(ev.code);
}

function onMouseDown(ev: MouseEvent) {
    if(!isTargetInMap(ev.target)) return;

    totalMovement = 0;

    if(ev.button === 0) {
        isDragging = true;
        showCrosshair.value = false;
    }

    if(ev.target === mapOuterElement.value) {
        pendingUnselect = true;
    }
    cancelNextModeSelect = false;
}

function onMouseMove(ev: MouseEvent) {
    if(!isTargetInMap(ev.target)) return;

    if(isDragging) {
        let totalScale = scaleFactor.value * camZoom.value;
        moveMap(-ev.movementX / totalScale, -ev.movementY / totalScale);

        let movement = Math.hypot(ev.movementX, ev.movementY);
        totalMovement += movement;

        if(totalMovement > 10) cancelNextModeSelect = true;
    }

    pendingUnselect = false;
}

function onMouseUp(ev: MouseEvent) {
    if(!isTargetInMap(ev.target)) return;

    if(pendingUnselect) {
        pendingUnselect = false;
        selectMode(null);
    }
    isDragging = false;
}

function onWheel(ev: WheelEvent) {
    if(!isTargetInMap(ev.target)) return;

    ev.preventDefault();

    const dZoom = ev.deltaY * ZOOM_SCROLL_MULT * ZOOM_SPEED_MULT * camZoom.value;

    camZoom.value = clamp(
        MIN_ZOOM,
        camZoom.value + dZoom,
        MAX_ZOOM
    );
}

function onModeClick(name: string) {
    if(cancelNextModeSelect) {
        cancelNextModeSelect = false;
        return;
    }

    const mode = mapData.value?.modes[name];

    if(!isModeValid(mode)) {
        console.error(mode);
        throw new Error(`Invalid mode data for mode "${name}". An object dump is available in the console.`);
    }

    selectMode(mode);

    console.debug(`Selected mode "${name}"`); // DEBUG
}

function onResize() {
    if(!mapOuterElement.value) return;

    const mapOuter = mapOuterElement.value;

    const width = mapOuter.clientWidth;
    const height = mapOuter.clientHeight;

    scaleFactor.value = getScaleFactor(width, height);
}

function getModeAtCenter(): Mode | null {
    const map = mapData.value;

    if(!map) {
        return null;
    }

    const isSquareInCenter = (cx: number, cy: number, size: number) => {
        const L = cx - size; const R = cx + size;
        const U = cy - size; const D = cy + size;
        
        return (
            L < camX.value && camX.value < R &&
            U < camY.value && camY.value < D
        );
    }

    const isCircleInCenter = (cx: number, cy: number, radius: number) => {
        const maxDistSq = radius * radius;
        const dx = cx - camX.value;
        const dy = cy - camY.value;
        const distSq = dx * dx + dy * dy;

        return distSq < maxDistSq;
    }

    const isDiamondInCenter = (cx: number, cy: number, maxManhDist: number) => {
        const dx = Math.abs(cx - camX.value);
        const dy = Math.abs(cy - camY.value);

        return dx + dy < maxManhDist;
    }

    const isModeInCenter = (mode: Mode) => {
        const x = mode.x; const y = mode.y;

        switch(mode.shape) {
            case ModeShape.square:
                return isSquareInCenter(x, y, mode.size);
            case ModeShape.octagon:
                return isCircleInCenter(x, y, mode.size);
            case ModeShape.diamond:
                return isDiamondInCenter(x, y, mode.size);
            default:
                return false;
        }
    }

    // Small optimization if cursor moved a little
    if(selectedMode.value && isModeInCenter(selectedMode.value)) {
        return selectedMode.value;
    }

    for(const mode of Object.values(map.modes)) {
        if(isModeInCenter(mode)) {
            return mode;
        }
    }

    return null;
}

function clamp(min: number, val: number, max: number): number {
    return Math.min(Math.max(min, val), max);
}

function selectMode(mode: Mode | null) {
    selectedMode.value = mode;

    if(mode) {
        lastSelectedMode.value = mode;
    } else {
        isPanelExpanded.value = false;
    }
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
    font-size: 1.1em;
    z-index: 4000;
    user-select: none;
    pointer-events: none;
}

.crosshair {
    position: absolute;
    top: calc(50% - 25px * var(--scale-factor));
    left: calc(50% - 25px * var(--scale-factor));
    width: calc(50px * var(--scale-factor));
    height: calc(50px * var(--scale-factor));
    stroke: white;
    stroke-width: 0.6;

    z-index: 1;

    pointer-events: none;
    touch-action: none;
    user-select: none;
    caret-color: transparent;
}

.map-elements {
    position: absolute;

    width: var(--map-width);
    height: var(--map-height);

    top: 50%;
    left: 50%;

    overflow: visible;

    transform: translate(var(--cam-x), var(--cam-y)) scale(var(--total-scale));
    transform-box: view-box;
    transform-origin: calc(-1 * var(--cam-x)) calc(-1 * var(--cam-y));

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
    display: grid;
    grid-template-columns: 3fr 10fr;
    top: 0;
    left: 100%;
    width: 130%;
    height: 100%;
    transform: translateX(0);
    transition: transform 500ms;

    background-color: colors.$map-panel-bg-color;
    font-size: calc(var(--scale-factor) * 0.826em);

    &.open { transform: translateX(-23.0769231%) } // ~ 3/13
    &.expanded { transform: translateX(-100%) }

    .small {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;

        div {
            box-sizing: border-box;
            width: 100%;
            height: fit-content;
            padding: 1em 2em;

            &.top {
                * {
                    margin-block: 0;
                    text-align: center;
                }

                .title {
                    font-size: 2.26em;
                    margin-bottom: -0.1em;
                }

                .subtitle {
                    margin-bottom: 0.1em;
                }

                .version-info {
                    margin-bottom: 1em;
                }
            }
        }
    }
    .wide {
    }
}
</style>