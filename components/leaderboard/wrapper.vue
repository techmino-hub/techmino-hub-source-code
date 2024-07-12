<template>
  <div class="lb-wrapper">
    <div class="filters">
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
                </option>=
            </select>
        </div>
        <div class="filter" v-if="!props.validity">
            <label for="validity-dropdown">
                {{ $t('leaderboard.filters.validity') }}
            </label>
            <select v-model="validitySelection" id="validity-dropdown">
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
            <select v-model="limitSelection" id="limit-dropdown">
                <option
                  v-for="limit in [10, 25, 50, 100]"
                  :key="limit"
                  :value="limit">
                    {{ limit }}
                </option>
            </select>
        </div>
    </div>
    <LeaderboardTable
        :gameMode="gameMode"
        :validity="validity"
        :limit="limit"
        :offset="offset"
        @load="onSubmissionsLoad"
    />
    <div class="offset-info" v-if="!props.offset">
        <button
          class="prev"
          type="button"
          :disabled="offsetSelection === 0"
          @click="offsetSelection = Math.max(offsetSelection - limit, 0)">
            {{ $t('leaderboard.pagePrev') }}
        </button>
        <span>
            {{ $t('leaderboard.entryNumber', {
                start: offset + 1,
                end: offset + limit
            }) }}
        </span>
        <button
          class="next"
          type="button"
          :disabled="isLastPage"
          @click="offsetSelection += limit">
            {{ $t('leaderboard.pageNext') }}
        </button>
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
        type: String as PropType<SubmissionValidity | undefined>
    },
    limit: {
        type: Number as PropType<number | undefined>,
    },
    offset: {
        type: Number as PropType<number | undefined>,
    }
});

const gameModeSelection = ref('sprint_10l');
const validitySelection = ref(SubmissionValidity.Verified);
const limitSelection = ref(10);
const offsetSelection = ref(0);

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
}
</script>

<style scoped lang="scss">
@use '~/assets/scss/index';
@use '~/assets/scss/colors';

.lb-wrapper {
    .filters {
        display: flex;
        justify-content: space-between;
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

        button {
            color: colors.$btn-border-color;
            padding: 0.25em 1em;
            border: 0.1em none transparent;
            border-radius: 0.5em;
            background-color: transparent;
            font-family: 'techmino-proportional';
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
}
</style>