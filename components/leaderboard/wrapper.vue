<template>
  <div class="lb-wrapper">
    <div class="filters hide-noscript-important" v-if="!redirectToFull">
        <div class="filter" v-if="!props.gameMode">
            <label for="game-mode-dropdown">
                {{ $t('leaderboard.filters.gameMode') }}
            </label>
            <select
              v-model="gameModeSelection"
              id="game-mode-dropdown">
                <option
                  v-for="gameMode in Object.keys(RECORD_SCHEMAS)"
                  :key="gameMode"
                  :value="gameMode">
                    {{ getModeI18nString(gameMode, $t) }}
                </option>
            </select>
        </div>
        <div class="filter" v-if="!props.validity">
            <label for="validity-dropdown">
                {{ $t('leaderboard.filters.validity') }}
            </label>
            <select
              v-model="validitySelection"
              id="validity-dropdown">
                <option
                  v-for="validity in Object.values(SubmissionValidity)"
                  :key="validity"
                  :value="validity">
                    {{ $t(`leaderboard.validity.${validity}`) }}
                </option>
            </select>
        </div>
        <div class="filter" v-if="!props.limit">
            <label for="limit-dropdown">
                {{ $t('leaderboard.filters.limit') }}
            </label>
            <select
              v-model="limitSelection"
              id="limit-dropdown">
                <option
                  v-for="limit in [10, 25, 50, 100]"
                  :key="limit"
                  :value="limit">
                    {{ limit }}
                </option>
            </select>
        </div>
        <NuxtLinkLocale class="web-btn" to="/leaderboard/submit" v-if="showSubmitLink">
            {{ $t('leaderboard.submit') }}
        </NuxtLinkLocale>
    </div>
    <LeaderboardTable
        :gameMode="gameMode"
        :validity="validity"
        :limit="limit"
        :offset="offset"
        :show-submit-date="showSubmitDate"
        :show-replay-date="showReplayDate"
        @load="onSubmissionsLoad"
    />
    <div class="offset-info" v-if="!props.offset && !redirectToFull">
        <button
          class="prev hide-noscript"
          type="button"
          :disabled="offsetSelection === 0"
          @click="offsetSelection = Math.max(offsetSelection - limit, 0)">
            {{ $t('leaderboard.pagePrev') }}
        </button>
        <noscript>
            <NuxtLinkLocale
              v-if="onFullPage"
              :disabled="offsetSelection === 0"
              :to="getPageUrl('prev')"
              class="prev">
                {{ $t('leaderboard.pagePrev') }}
            </NuxtLinkLocale>
        </noscript>
        <span>
            {{ $t('leaderboard.entryNumber', {
                start: offset + 1,
                end: offset + limit
            }) }}
        </span>
        <button
          class="next hide-noscript"
          type="button"
          :disabled="isLastPage"
          @click="offsetSelection += limit">
            {{ $t('leaderboard.pageNext') }}
        </button>
        <noscript>
            <NuxtLinkLocale
              v-if="onFullPage"
              :disabled="isLastPage"
              :to="getPageUrl('next')"
              class="next">
                {{ $t('leaderboard.pageNext') }}
            </NuxtLinkLocale>
        </noscript>
    </div>
    <div class="redirect" v-else-if="redirectToFull">
        <NuxtLinkLocale class="block-style" :to="redirectLink">
            {{ $t('leaderboard.pageFull') }}
        </NuxtLinkLocale>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { SubmissionValidity, type Submission } from '~/assets/types/database';
import { RECORD_SCHEMAS } from '~/assets/data/record-schemas';
import { getModeI18nString } from '~/assets/scripts/modes';

const props = defineProps({
    gameMode: {
        type: String,
        required: false
    },
    validity: {
        type: String as PropType<SubmissionValidity>,
        required: false
    },
    limit: {
        type: Number,
        required: false
    },
    offset: {
        type: Number,
        required: false
    },
    showSubmitDate: {
        type: Boolean,
        default: true
    },
    showReplayDate: {
        type: Boolean,
        default: true
    },
    showSubmitLink: {
        type: Boolean,
        default: false
    },
    redirectToFull: {
        type: Boolean,
        default: false
    },
    initGameMode: {
        type: String,
        default: "sprint_10l"
    },
    initValidity: {
        type: String as PropType<SubmissionValidity>,
        default: SubmissionValidity.Verified
    },
    initLimit: {
        type: Number,
        default: 10
    },
    initOffset: {
        type: Number,
        default: 0
    },
    onFullPage: {
        type: Boolean,
        default: false
    }
});

const emits = defineEmits<{
    load: [submission: Submission[]]
}>();

const gameModeSelection = ref(props.initGameMode);
const validitySelection = ref(props.initValidity);
const limitSelection = ref(props.initLimit);
const offsetSelection = ref(props.initOffset);

const gameMode = computed(() => props.gameMode ?? gameModeSelection.value);
const validity = computed(() => props.validity ?? validitySelection.value);
const limit = computed(() => props.limit ?? limitSelection.value);
const offset = computed(() => props.offset ?? offsetSelection.value);

const isLastPage = ref(true);

function onSubmissionsLoad(submissions: Submission[]) {
    // LeaderboardTable actually queries for (limit + 1) so we can determine if it's the last page.
    // We expect (limit + 1) submissions to be returned if there are more pages.
    // If there is less than that, it's the last page.
    isLastPage.value = submissions.length <= limit.value;

    emits.call(undefined, "load", submissions);
}

const redirectLink = computed(() => {
    let path = "/leaderboard";
    let first = true;

    function append(key: string, value: string) {
        const firstChar = first ? "?" : "&";

        path += `${firstChar}${key}=${value}`;
        
        first = false;
    }

    append("gameMode", gameMode.value);
    append("validity", validity.value);

    return path;
});

function getPageUrl(place: "prev" | "next") {
    let base = redirectLink.value;

    let newOffset = offset.value;

    if(place == "prev") {
        if(newOffset === 0) {
            return;
        }

        newOffset = Math.max(newOffset - limit.value, 0);
    } else {
        if(isLastPage) {
            return;
        }
        newOffset += limit.value;
    }

    return base + `&limit=${limit.value}&offset=${newOffset}`;
}
</script>

<style scoped lang="scss">
@use '~/assets/scss/global';
@use '~/assets/scss/colors';

.lb-wrapper {
    .filters {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 1rem;
        flex-wrap: wrap;
        gap: 2em;
        row-gap: 1em;

        .filter {
            display: flex;
            flex-direction: row;
            align-items: center;
            gap: 0.5em;

            select {
                font-family: 'techmino-proportional';
                background-color: black;
                color: white;
                border: 0.15em solid colors.$primary-color;
                border-radius: 0.5em;
                padding: 0.25em 0.5em;
                font-size: 1em;
            }
        }

        a {
            margin: 0;
            text-decoration: none;
        }
    }

    .offset-info {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        align-items: center;
        margin-top: 1rem;
        gap: 1em;

        > * {
            margin-inline: auto;
        }

        span {
            text-align: center;
        }

        button, a {
            color: colors.$btn-border-color;
            padding: 0.25em 1em;
            border: 0.1em none transparent;
            border-radius: 0.5em;
            background-color: transparent;
            font-family: 'techmino-proportional';
            text-decoration: none;
            font-size: 1.1em;
            cursor: pointer;
            transition: 250ms color, 250ms transform;

            &:hover:not([disabled]) {
                text-shadow: 0 0 0.1ch colors.$btn-hover-border-color;
                color: colors.$btn-hover-border-color;
                
                @media (prefers-reduced-motion: no-preference) {
                    transform: scale(1.026);

                    &.prev {
                        transform: translateX(-0.62ch);
                    }

                    &.next {
                        transform: translateX(0.62ch);
                    }
                }
            }

            &:active:not([disabled]) {
                text-shadow: 0 0 0.1ch colors.$btn-active-border-color;
                color: colors.$btn-active-border-color;
            }

            &[disabled] {
                color: colors.$btn-disabled-color;
                background-color: colors.$btn-disabled-bg-color;
                border: 0.1em solid colors.$btn-disabled-border-color;
                cursor: not-allowed;
            }
        }
    }

    .redirect {
        text-align: end;
        margin-block-start: 0.5em;

        a {
            @extend .block-style;
        }
    }
}
</style>