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
        <pre class="debug" v-show="debugMode" v-text="debugText"></pre>
        <div class="lag-warn" v-show="showLagMessage">
            <span v-t="'map.lagWarnPre'"></span>
            <NuxtLink to="/map-lite" v-t="'map.lagWarnLink'" />
        </div>
        <svg class="crosshair" viewBox="0 0 10 10" v-show="showCrosshair">
            <line x1="0" y1="5" x2="10" y2="5" />
            <line x1="5" y1="0" x2="5" y2="10" />
        </svg>
        <div v-if="mapData" v-show="isMounted" class="map-elements">
            <MapEdgeSvg :mapData="mapData" />
            <div class="modes">
                <MapMode v-for="mode in Object.values(mapData.modes)"
                    :key="mode.name"
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
          }"
          ref="panelElement">
            <div class="small">
                <div class="top">
                    <h1
                        class="title"
                        v-html="$t(`modes.${lastSelectedMode.name}.title`)"
                    ></h1>
                    <h2
                        class="subtitle"
                        v-if="$te(`modes.${lastSelectedMode.name}.subtitle`)"
                        v-html="$t(`modes.${lastSelectedMode.name}.subtitle`)"
                    ></h2>
                    <br>
                    <h4
                        class="version-info"
                        v-if="$te(`modes.${lastSelectedMode.name}.versionInfo`)"
                        v-html="$t(`modes.${lastSelectedMode.name}.versionInfo`)"
                    ></h4>
                    <p
                        class="description"
                        v-if="$te(`modes.${lastSelectedMode.name}.description`)"
                        v-html="$t(`modes.${lastSelectedMode.name}.description`)"
                    ></p>
                </div>
                <div class="bottom">
                    <p v-t="'map.rankReqs'" class="rank-req-text"></p>
                    <MapModeRanks :mode="lastSelectedMode" />
                    <menu>
                        <button
                          type="button"
                          @click="expandPanel()"
                          :title="$t('map.tooltip.expand')">
                            &#xF0085;
                        </button>
                        <button
                          type="button"
                          @click="selectMode(null)"
                          :title="$t('map.tooltip.close')">
                            &#xF0083;
                        </button>
                    </menu>
                </div>
            </div>
            <div class="wide">
                <header>
                    <button
                      type="button"
                      @click="collapsePanel()"
                      :title="$t('map.tooltip.back')">
                        &#xF0083;
                    </button>
                    <h1>
                        {{ getModeI18nString(lastSelectedMode.name, $t) }}
                    </h1>
                </header>
                <div class="bottom">
                    <main>
                        <ul class="mode-info-list">
                            <li v-if="$te(`modes.${lastSelectedMode.name}.difficulty`)">
                                <h4 v-t="'map.info.difficulty'"></h4>
                                <p v-html="$t(`modes.${lastSelectedMode.name}.difficulty`)"></p>
                            </li>
                            <li v-if="$te(`modes.${lastSelectedMode.name}.length`)">
                                <h4 v-t="'map.info.length'"></h4>
                                <p v-html="$t(`modes.${lastSelectedMode.name}.length`)"></p>
                            </li>
                            <li
                              v-if="$te(`modes.${lastSelectedMode.name}.versionInfo`)">
                                <h4 v-t="'map.info.difficulty'"></h4>
                                <p v-html="$t(`modes.${lastSelectedMode.name}.difficulty`)"></p>
                            </li>
                            <li>
                                <a :href="lastSelectedMode.source"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    v-t="'map.info.source'"></a>
                            </li>
                        </ul>
                        <article ref="articleElement">

                        </article>
                    </main>
                    <aside>
                        <div
                          v-if="$te(`modes.${lastSelectedMode.name}.featuredVideo`)">
                            <h3
                                class="center-text"
                                v-t="'map.featuredVideo'"
                            ></h3>
                            <div class="video-outer">
                                <iframe
                                    :src="$t(`modes.${lastSelectedMode.name}.featuredVideo`)"
                                    loading="lazy"
                                    frameborder="0"
                                ></iframe>
                            </div>
                        </div>
                        <h3 v-t="'map.rankReqs'" class="center-text"></h3>
                        <MapModeRanks :mode="lastSelectedMode" />
                    </aside>
                </div>
            </div>
        </aside>
    </div>
</template>

<script setup lang="ts">
import {
    type MapData,
    type Mode,
    isMapDataValid,
    isModeValid,
    ModeShape
} from '~/assets/types/map';
import { getModeI18nString } from '~/assets/scripts/modes';
import { getArticle } from '~/assets/scripts/articles';

const i18n = useI18n();

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
let prevTouches: TouchList | Touch[] = [];

let totalMovement = 0;
let lagCounter = 0;
let isDragging = false;
let pendingUnselect = false;
let cancelNextModeSelect = false;
let isUpdateRunning = false;

let mapData: Ref<MapData> = ref(
    await import(`~/assets/data/maps/${props.map}.json`)
);

const mapOuterElement = ref<HTMLDivElement | null>(null);
const panelElement = ref<HTMLElement | null>(null);
const articleElement = ref<HTMLElement | null>(null);
const debugText = ref<string>('Update loop uninitialized.');
const isMounted = ref<boolean>(false);
const debugMode = ref<boolean>(false);
const showLagMessage = ref<boolean>(false);

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

    setInterval(() => lagCounter = Math.max(0, lagCounter - 250), 1000);
}

function addEventListeners() {
    window.addEventListener('resize', onResize);
    
    window.addEventListener('keydown', onKeyDown);
    window.addEventListener('keyup',   onKeyUp);

    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup',   onMouseUp);
    window.addEventListener('wheel',     onWheel, { passive: false });

    window.addEventListener('touchstart', onTouchStart);
    window.addEventListener('touchmove',  onTouchMove);
    window.addEventListener('touchend',   onTouchEnd);
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

function handleMapKeys(dt: number) {
    if(keyDownSet.has('ControlLeft') || keyDownSet.has('ControlRight')) {
        handleZoomKeys(dt);
    } else {
        handleMoveKeys(dt);
    }

    if(keyDownSet.has('Escape')) {
        selectMode(null);
    }

    if(keyDownSet.has('Enter')) {
        expandPanel();
    }
}

function handleKeys(dt: number) {
    if(isPanelExpanded.value) {
        if(keyDownSet.has('Escape')) {
            collapsePanel();
            keyDownSet.delete('Escape');
        }
    } else {
        handleMapKeys(dt);
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
    isUpdateRunning = true;
    const dt = curTimestamp - prevTimestamp;
    prevTimestamp = curTimestamp;

    handleKeys(dt);

    if(debugMode.value) {
        debugText.value = `dt: ${dt.toFixed(0)} ms\nlag: ${lagCounter}`;
    }

    if(dt > 250 || dt < 0) {
        lagCounter += Math.abs(dt);
    }
    if(lagCounter > 1000) {
        showLagMessage.value = true;
    }

    if(keyDownSet.size > 0) {
        requestAnimationFrame(update);
    } else {
        isUpdateRunning = false;
        debugText.value = "Update loop halted."
    }
}

function isTargetInMap(target: EventTarget | null): boolean {
    if(!(target instanceof HTMLElement) && !(target instanceof SVGElement)) return false;
    
    if(props.fullscreen) return true;

    return mapOuterElement.value?.contains(target) ?? false;
}

const UNPREVENTED_CODES = new Set([
    'KeyR', 'KeyI'
]);

function onKeyDown(ev: KeyboardEvent) {
    if(!isTargetInMap(ev.target)) return;

    if(ev.repeat) return;

    if(ev.code === 'F3') {
        debugMode.value = !debugMode.value;
        ev.preventDefault();
        return;
    }

    const startUpdate = keyDownSet.size === 0 && !isUpdateRunning;

    keyDownSet.add(ev.code);

    // console.debug('keydown', ev.code);

    if(startUpdate) {
        prevTimestamp = performance.now();
        update(prevTimestamp);
    }

    if(
        (ev.code.includes("Key") || ev.code.includes("Arrow"))
        && !UNPREVENTED_CODES.has(ev.code)
    ) {
        ev.preventDefault();
    }
}

function onKeyUp(event: KeyboardEvent) {
    if(!isTargetInMap(event.target)) return;

    keyDownSet.delete(event.code);
}

function onMouseDown(event: MouseEvent) {
    if(!isTargetInMap(event.target) || isPanelExpanded.value) return;

    totalMovement = 0;

    if(event.button === 0) {
        isDragging = true;
        showCrosshair.value = false;
    }

    if(event.target === mapOuterElement.value) {
        pendingUnselect = true;
    }
    cancelNextModeSelect = false;
}

function onMouseMove(event: MouseEvent) {
    if(isDragging) {
        let totalScale = scaleFactor.value * camZoom.value;
        moveMap(-event.movementX / totalScale, -event.movementY / totalScale);

        let movement = Math.hypot(event.movementX, event.movementY);
        totalMovement += movement;

        if(totalMovement > 10) cancelNextModeSelect = true;
    }

    pendingUnselect = false;
}

function onMouseUp(event: MouseEvent) {
    if(!isTargetInMap(event.target)) return;

    if(pendingUnselect) {
        pendingUnselect = false;
        selectMode(null);
    }
    isDragging = false;
}

function onWheel(event: WheelEvent) {
    if(!isTargetInMap(event.target)) return;

    if(panelElement.value?.contains(event.target as Node)) return;
    if(isPanelExpanded.value) return;

    event.preventDefault();

    const dZoom = event.deltaY * ZOOM_SCROLL_MULT * ZOOM_SPEED_MULT * camZoom.value;

    camZoom.value = clamp(
        MIN_ZOOM,
        camZoom.value + dZoom,
        MAX_ZOOM
    );
}

function onTouchStart(event: TouchEvent) {
    if(event.touches.length === 1 && isTargetInMap(event.target)) {
        isDragging = true;
        showCrosshair.value = false;
    }
    if(event.target === mapOuterElement.value && event.touches.length === 1) {
        pendingUnselect = true;
    }
    if(event.touches.length > 1) {
        isDragging = false;
    }
    cancelNextModeSelect = false;

    prevTouches = event.touches;

    totalMovement = 0;
}

function onTouchMove(event: TouchEvent) {
    if(isDragging) {
        const totalScale = scaleFactor.value * camZoom.value;
        const dx = event.touches[0].clientX - prevTouches[0].clientX;
        const dy = event.touches[0].clientY - prevTouches[0].clientY;

        moveMap(dx / totalScale, dy / totalScale);

        totalMovement += Math.hypot(dx, dy);

        if(totalMovement > 10) cancelNextModeSelect = true;
    } else if(event.touches.length >= 2) {
        event.preventDefault();

        const prevTouchA = prevTouches[0];
        const prevTouchB = prevTouches[1];
        const touchA = event.touches[0];
        const touchB = event.touches[1];

        const prevTouchDist = 
            Math.hypot(prevTouchA.clientX - prevTouchB.clientX,
                prevTouchA.clientY - prevTouchB.clientY);
        
        const touchDist =
            Math.hypot(touchA.clientX - touchB.clientX,
                touchA.clientY - touchB.clientY);
        
        const zoomFactor = touchDist / prevTouchDist;

        camZoom.value *= zoomFactor;
    }

    if(totalMovement > 10) pendingUnselect = false;

    prevTouches = event.touches;
}

function onTouchEnd(event: TouchEvent) {
    if(pendingUnselect) {
        pendingUnselect = false;
        selectMode(null);
    }

    isDragging = event.touches.length === 1;

    prevTouches = event.touches;
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

    if(mode.name === selectedMode.value?.name) {
        expandPanel();
        return;
    }

    selectMode(mode);
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
    }
}

function expandPanel() {
    isPanelExpanded.value = true;

    if(articleElement.value) {
        articleElement.value.innerHTML = "";
        articleElement.value.textContent = i18n.t("map.loadingArticle");

        getArticle(`mode.${lastSelectedMode.value.name}`, i18n.locale.value)
            .then(article => {
                if(!articleElement.value) return;
                
                if(article) {
                    articleElement.value.innerHTML = article;
                } else {
                    articleElement.value.textContent = i18n.t("map.noArticle");
                }
            });
    }
}

function collapsePanel() {
    isPanelExpanded.value = false;
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

.lag-warn {
    position: absolute;
    inset: 1em 1em auto 1em;
    text-align: center;
    color: orange;
    font-size: 1.5em;

    a {
        color: colors.$btn-border-color;
        transition: 200ms;

        &:hover {
            text-shadow: 0 0 0.15em colors.$btn-hover-border-color;
            color: colors.$btn-hover-border-color;
        }

        &:active {
            text-shadow: 0 0 0.3em colors.$btn-active-border-color;
            color: colors.$btn-active-border-color;
        }
    }
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
    background-color: colors.$map-panel-bg-color;
    transition: transform 500ms, background-color 750ms;
    z-index: 2;

    font-size: calc(var(--scale-factor) * 0.696em);

    &.open {
        transform: translateX(-23.0769231%); // ~ 3/13
    }
    &.expanded {
        transform: translateX(-100%);
        background-color: colors.$map-panel-expanded-bg-color;
    }

    > .small {
        display: grid;
        grid-template-rows: 3fr 7fr;
        overflow-y: auto;
        height: 100%;

        border-inline-start: 0.2em dashed colors.$map-panel-border-color;

        > div {
            box-sizing: border-box;
            width: 100%;

            &.top {
                padding-block-start: 1em;

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

            &.bottom {
                display: flex;
                flex-direction: column;
                width: 100%;
                justify-content: end;
                padding-block-end: 1em;

                .rank-req-text {
                    font-size: 1.25em;
                    font-weight: bold;
                    text-align: center;
                    margin-block: 0.5em;
                    
                    @media (min-aspect-ratio: 5) {
                        display: none;
                    }
                }

                .rank-reqs {
                    display: flex;
                    flex-shrink: 1;
                    margin-inline: 1em;

                    @media (min-aspect-ratio: 5) {
                        display: none;
                    }
                }

                menu {
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                    margin: 1em 1em 0;
                    gap: 1em;
                    padding: 0;

                    button {
                        font-size: 1.5em;
                        width: 100%;
                        height: 2em;
                    }
                }
            }
        }
    }
    > .wide {
        position: relative;

        > header {
            position: absolute;
            inset: 1.5em 1.5em auto 1.5em;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            font-size: 1.2em;
            padding-bottom: 0.5em;
            border-bottom: 0.1em solid colors.$map-panel-border-color;
            box-sizing: border-box;
            height: 3em;

            button {
                width: 5em;
                height: 100%;
                margin-block: 0;
                font-size: 1.25em;
                transform-origin: center;
            }

            h1 {
                margin-block: 0.25em;
            }
        }

        > .bottom {
            position: absolute;
            inset: 6em 1.862em 1.5em 1.862em;
            display: flex;
            overflow-y: auto;
            padding-inline-end: 1em;

            main {
                display: flex;
                flex-direction: column;
                padding-top: 1em;
                height: fit-content;

                .mode-info-list {
                    display: flex;
                    flex-direction: column;
                    gap: 0.5em;
                    justify-content: space-evenly;
                    padding: 0 0 1em 0;
                    overflow-x: auto;
                    flex-shrink: 0;
                    font-size: 1.2em;
                    padding-block-end: 1em;
                    border-block-end: 0.1em solid colors.$map-panel-border-color;

                    li {
                        display: flex;
                        flex-direction: row;
                        justify-content: space-between;
                        color: white;
                        text-decoration: none;
                        align-items: center;

                        &:not(:last-child) {
                            border-bottom: 0.1em dashed colors.$primary-color;
                        }

                        h4, p {
                            margin: 0 0 0.5em 0;
                        }
                    }

                    a {
                        width: 100%;
                        text-align: center;
                        text-decoration: none;
                        padding: 0.25em 0.5em;
                        border-radius: 5em;
                        color: var(--color);
                        border: 0.1em solid var(--color);
                        background-color: transparent;

                        transition: color 500ms, background-color 500ms;

                        --color: #{colors.$btn-border-color};

                        &:hover {
                            --color: #{colors.$btn-hover-border-color};
                            background-color: colors.$btn-hover-bg-color;
                        }

                        &:active {
                            --color: #{colors.$btn-active-border-color};
                            background-color: colors.$btn-active-bg-color;
                        }
                    }
                }

                article {
                    text-align: start;
                    padding-top: 1em;

                    :deep(table) {
                        display: block;
                        max-width: fit-content;
                        border-collapse: collapse;
                        overflow-x: auto;
                    }

                    :deep(th) {
                        text-align: start;
                        font-weight: bold;
                        font-size: 1.1em;
                    }

                    :deep(th), :deep(td) {
                        padding: 0.5em 1em;
                    }

                    :deep(table), :deep(th), :deep(td) {
                        border: 0.1em solid white;
                    }
                }
            }

            aside {
                height: fit-content;

                .video-outer {
                    position: relative;
                    width: 100%;
                    height: 0;
                    margin: 1em 0;
                    padding-bottom: 56.25%;

                    iframe {
                        position: absolute;
                        inset: 0 0 1em 0;
                        width: 100%;
                        height: calc(100% - 1em);
                    }
                }
                
                .rank-reqs {
                    margin-top: 1em;
                }
            }

            @media (min-aspect-ratio: 4/3) {
                flex-direction: row;
                justify-content: space-between;
                min-height: 0;

                main {
                    width: 57.5%;
                    overflow-y: auto;
                }

                aside {
                    width: 37.5%;
                    padding: 1em 0;
                    overflow-y: auto;
                }
            }
            @media (max-aspect-ratio: 4/3) {
                flex-direction: column-reverse;
                overflow-y: auto;

                main {
                    flex-shrink: 0;
                    overflow-y: hidden;
                }

                .rank-reqs {
                    max-width: 50%;
                    margin-inline: auto;
                }
            }
        }
    }

    button {
        color: colors.$map-panel-button-text-color;
        border: 0.1em solid colors.$map-panel-button-border-color;
        border-radius: 0.25em;
        background-color: colors.$map-panel-button-bg-color;
        cursor: pointer;
        font-family: 'techmino-proportional';
        text-align: center;
        transition: 150ms;

        &:hover {
            background-color: colors.$map-panel-button-hover-bg-color;
            transform: scale(1.05);
        }

        &:active {
            background-color: colors.$map-panel-button-active-bg-color;
            box-shadow: 0 0 0.5em 0.25em colors.$map-panel-button-active-bg-color;
        }
    }
}
</style>