<template>
    <div class="page-outer">
        <Title>{{ $t('mapLite.tabTitleModeDetail', { modeName }) }}</Title>
        <NuxtLink to="/map-lite" class="block-style">{{ $t('mapLite.backToMap') }}</NuxtLink>

        <h1>{{ modeName }}</h1>
        <i18n-t keypath="mapLite.modeDesc" tag="p">
            {{ $t(`modes.${modeCodeName}.description`) }}
        </i18n-t>

        <br>

        <i18n-t v-if="$te(`modes.${modeCodeName}.featuredVideo`)"
          keypath="map.featuredVideo" tag="p" class="vid-outer">
            <iframe
                width="560"
                height="315"
                :src="$t(`modes.${modeCodeName}.featuredVideo`)"
                frameborder="0"
                allowfullscreen
            ></iframe>
        </i18n-t>

        <i18n-t keypath="map.rankReqs" tag="p" class="rank-req-text">
            <MapModeRanksLite :mode="mode" />
        </i18n-t>
    </div>
</template>

<script lang="ts" setup>
import {
    type MapData,
    isMapDataValid,
    isModeValid
} from '~/assets/types/map';
import {
    getModeI18nString
} from '~/assets/scripts/modes';

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

const mapData: Ref<MapData> = ref(
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

const modeIndex = route.params.id as string;

const mode = mapData.value.modes[modeIndex];

if(!isModeValid(mode)) {
    throw new Error(`Invalid mode index "${modeIndex}"`);
}

const modeCodeName = mode.name;
const modeName = getModeI18nString(mode.name, useI18n().t);
</script>

<style scoped lang="scss">
.page-outer {
    margin: 1em 2em;
}

h1 {
    font-size: 1.5em;
    margin-bottom: 0.5em;
}

.rank-req-text {
    font-size: 1.126em;
    font-weight: bold;

    .rank-reqs {
        font-size: 1em;
        margin-top: 1em;
    }
}

.vid-outer {
    display: flex;
    flex-direction: column;
    font-size: 1.126em;
    font-weight: bold;

    iframe {
        margin-top: 0.5em;
    }
}
</style>