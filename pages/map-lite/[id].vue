<template>
    <div class="page-outer">
        <Title>{{ $t('mapLite.tabTitleModeDetail', { modeName }) }}</Title>
        <h1>
            <NuxtLink :to="localePath('/map-lite')" class="block-style">{{ $t('mapLite.backToMap') }}</NuxtLink>
            <span>{{ modeName }}</span>
        </h1>

        <div class="main-wrapper">
            <main>
                <ul class="mode-info-list">
                    <li v-if="$te(`modes.${modeCodeName}.difficulty`)">
                        <h4>{{ $t('map.info.difficulty') }}</h4>
                        <span v-html="$t(`modes.${modeCodeName}.difficulty`)"></span>
                    </li>
                    <li v-if="$te(`modes.${modeCodeName}.length`)">
                        <h4>{{ $t('map.info.length') }}</h4>
                        <span v-html="$t(`modes.${modeCodeName}.length`)"></span>
                    </li>
                    <li
                        v-if="$te(`modes.${modeCodeName}.versionInfo`)">
                        <h4>{{ $t('map.info.difficulty') }}</h4>
                        <span v-html="$t(`modes.${modeCodeName}.difficulty`)"></span>
                    </li>
                    <li>
                        <a :href="mode.source"
                          target="_blank"
                          rel="noopener noreferrer">
                            {{ $t('map.info.source') }}
                        </a>
                    </li>
                </ul>
                <article v-html="articleHTML"></article>
            </main>
            <aside>
                <i18n-t
                  v-if="$te(`modes.${modeCodeName}.featuredVideo`)"
                  keypath="map.featuredVideo"
                  scope="global"
                  tag="h3"
                  class="video-outer hide-noscript-important">
                    <div class="video-wrapper">
                        <iframe
                            :src="$t(`modes.${modeCodeName}.featuredVideo`)"
                            loading="lazy"
                            frameborder="0"
                        ></iframe>
                    </div>
                </i18n-t>
                <i18n-t
                  keypath="map.rankReqs"
                  scope="global"
                  tag="h3"
                  class="rank-req-text">
                    <MapModeRanksLite :mode="mode" />
                </i18n-t>
                <i18n-t
                  v-if="RECORD_SCHEMAS[modeCodeName]"
                  keypath="map.leaderboard"
                  scope="global"
                  tag="h3"
                  class="center-text">
                    <LeaderboardWrapper
                        :gameMode="modeCodeName"
                        :validity="SubmissionValidity.Verified"
                        :limit="5"
                        :redirectToFull="true"
                    />
                </i18n-t>
            </aside>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { type MapData, isMapDataValid, isModeValid } from '~/assets/types/map';
import { getModeI18nString } from '~/assets/scripts/modes';
import { RECORD_SCHEMAS } from '~/assets/data/record-schemas';
import { SubmissionValidity } from '~/assets/types/database';

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

const i18n = useI18n();
const localePath = useLocalePath();

const modeCodeName = mode.name;
const modeName = getModeI18nString(mode.name, i18n.t);

const articleHTML = ref<string>(i18n.t('map.loadingArticle'));

await useFetch('/api/fetch-article', {
    method: 'GET',
    params: {
        id: `mode.${modeCodeName}`
    }
}).then(({data}) => {
    articleHTML.value = data.value?.content ?? i18n.t('map.noArticle');
}).catch(() => {
    articleHTML.value = i18n.t('map.noArticle');
});
</script>

<style scoped lang="scss">
@use '~/assets/scss/colors';

.page-outer {
    padding: 1em 2em;
}

h1 {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    font-size: 1.5em;
    padding-bottom: 0.5em;
    margin-bottom: 0.5em;
    border-block-end: 0.1em dotted white;
}

.video-outer {
    text-align: center;
    
    .video-wrapper {
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
}

.rank-req-text {
    font-size: 1.126em;
    font-weight: bold;
    text-align: center;

    .rank-reqs {
        font-size: 1em;
        margin-top: 1em;
        margin-inline: auto;
    }
}

.lb-wrapper {
    font-size: 0.9em;
}

.main-wrapper {
    display: flex;
    flex-direction: column;
    gap: 2em;

    @media (min-width: 768px) {
        flex-direction: row;
        gap: 1em;

        main {
            flex-basis: 60%;
            padding-inline: 1em;
        }

        aside {
            flex-basis: 40%;
            padding-inline: 1em;
        }
    }
}

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

        transition: color 250ms, background-color 250ms;

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
</style>