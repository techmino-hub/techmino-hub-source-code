<template>
<div class="page-outer">
    <Title>
        {{ $t('leaderboard.tabTitle') }}
    </Title>
    <h1 class="center-text">
        {{ $t('leaderboard.title') }}
    </h1>
    <noscript>
        <form class="selectors">
            <div class="grid">
                <label for="game-mode-dropdown">
                    {{ $t('leaderboard.filters.gameMode') }}
                </label>
                <select id="game-mode-dropdown">
                    <option
                    v-for="gameMode in Object.keys(RECORD_SCHEMAS)"
                    :key="gameMode"
                    :value="gameMode">
                        {{ getModeI18nString(gameMode, $t) }}
                    </option>
                </select>

                <label for="validity-dropdown">
                    {{ $t('leaderboard.filters.validity') }}
                </label>
                <select id="validity-dropdown">
                    <option
                      v-for="validity in Object.values(SubmissionValidity)"
                      :key="validity"
                      :value="validity">
                        {{ $t(`leaderboard.validity.${validity}`) }}
                    </option>
                </select>

                <label for="limit-dropdown">
                    {{ $t('leaderboard.filters.limit') }}
                </label>
                <select
                  id="limit-dropdown">
                    <option
                      v-for="limit in [10, 25, 50, 100]"
                      :key="limit"
                      :value="limit">
                        {{ limit }}
                    </option>
                </select>
            </div>
            <button type="submit" class="web-btn">
                {{ $t('leaderboard.go') }}
            </button>
        </form>
        <hr>
    </noscript>
    <LeaderboardWrapper
        :init-game-mode="initGameMode"
        :init-validity="initValidity"
        :init-limit="initLimit"
        :init-offset="initOffset"
        :on-full-page="true"
        :show-submit-link="true"
    />
</div>
</template>

<script lang="ts" setup>
import type { LocationQueryValue } from 'vue-router';
import { SubmissionValidity, type Submission } from '~/assets/types/database';
import { RECORD_SCHEMAS } from '~/assets/data/record-schemas';
import { getModeI18nString } from '~/assets/scripts/modes';

const route = useRoute();

const query = route.query;

let initGameMode: Ref<string | undefined> = ref(undefined);
let initValidity: Ref<SubmissionValidity | undefined> = ref(undefined);
let initLimit: Ref<number | undefined> = ref(undefined);
let initOffset: Ref<number | undefined> = ref(undefined);

if(query.gameMode) {
    if(Array.isArray(query.gameMode)) {
        initGameMode.value = query.gameMode[0] ?? undefined;
    } else {
        initGameMode.value = query.gameMode ?? undefined;
    }
}

if(query.validity) {
    let candidate: LocationQueryValue;

    if(Array.isArray(query.validity)) {
        candidate = query.validity[0];
    } else {
        candidate = query.validity;
    }

    if(candidate && candidate in Object.values(SubmissionValidity)) {
        initValidity.value = SubmissionValidity[candidate as keyof typeof SubmissionValidity];
    }
}

if(query.limit) {
    let candidate: LocationQueryValue;

    if(Array.isArray(query.limit)) {
        candidate = query.limit[0];
    } else {
        candidate = query.limit;
    }

    if(candidate) {
        const candidateNumber = Number(candidate);
        if(!isNaN(candidateNumber)) {
            initLimit.value = candidateNumber;
        }
    }
}

if(query.offset) {
    let candidate: LocationQueryValue;

    if(Array.isArray(query.offset)) {
        candidate = query.offset[0];
    } else {
        candidate = query.offset;
    }

    if(candidate) {
        const candidateNumber = Number(candidate);
        if(!isNaN(candidateNumber)) {
            initOffset.value = candidateNumber;
        }
    }
}

function getRedirectPath(
    gameMode: string | undefined,
    validity: string | undefined,
    limit: number | undefined,
    offset: number | undefined
) {
    let path = "/leaderboard";
    let first = true;

    function append(key: string, value: string) {
        const firstChar = first ? "?" : "&";

        path += `${firstChar}${key}=${value}`;
        
        first = false;
    }

    if(gameMode) {
        append("gameMode", gameMode);
    }
    if(validity) {
        append("validity", validity);
    }
    if(limit) {
        append("limit", limit.toString());
    }
    if(offset) {
        append("offset", offset.toString());
    }

    return path;
}
</script>

<style scoped lang="scss">
@use '~/assets/scss/colors';

.page-outer {
    padding: 1em 2em;
}

.selectors {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    max-width: fit-content;
    margin-inline: auto;

    .grid {
        display: grid;
        gap: 3em;
        align-items: center;
        row-gap: 0.5em;
        grid-template-columns: 1fr 2fr;

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

    button {
        margin-block-start: 1em;
    }
}

hr {
    margin-block: 1em;
}

.offset-links {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
    margin-top: 1rem;
    gap: 1em;

    > * {
        margin-inline: auto;
    }

    a {
        color: colors.$btn-border-color;
        padding: 0.25em 1em;
        border: 0.1em none transparent;
        border-radius: 0.5em;
        background-color: transparent;
        font-family: 'techmino-proportional';
        font-size: 1.1em;
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
</style>