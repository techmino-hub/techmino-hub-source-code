<template>
    <div class="pf-sub" :aria-busy="loading">
        <div class="table-wrapper">
            <table v-show="!loading">
                <thead>
                    <tr>
                        <th>
                            {{ $t('leaderboard.header.mode') }}
                        </th>
                        <th>
                            {{ $t('leaderboard.header.date') }}
                        </th>
                        <th>
                            {{ $t('leaderboard.header.submitDate') }}
                        </th>
                        <th>
                            {{ $t('leaderboard.header.details') }}
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="no-records" v-if="submissions.length < 1">
                        <td colspan="99999">
                            {{ $t('leaderboard.noSubmissions') }}
                        </td>
                    </tr>
                    <tr
                      v-for="(submission, index) in submissions.slice(0, limit)"
                      :key="submission.id">
                        <td>
                            <NuxtLinkLocale
                              :to="`/map-lite/${submission.game_mode}`">
                                {{ getModeI18nString(submission.game_mode, $t) }}
                            </NuxtLinkLocale>
                        </td>
                        <td>
                            {{ new Date(submission.replay_date).toLocaleString() }}
                        </td>
                        <td>
                            {{ new Date(submission.upload_date).toLocaleString() }}
                        </td>
                        <td>
                            <NuxtLinkLocale
                              :to="`/leaderboard/${submission.id}`">
                                {{ getChar('key.right') }}
                            </NuxtLinkLocale>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="offset-info">
            <button
              class="prev hide-noscript"
              type="button"
              :disabled="offset === 0"
              @click="offset = Math.max(offset - limit, 0)">
                {{ $t('leaderboard.pagePrev') }}
            </button>
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
              @click="offset += limit">
                {{ $t('leaderboard.pageNext') }}
            </button>
        </div>
        <p class="loading-text" v-show="loading">
            {{ $t('leaderboard.loading') }}
        </p>
    </div>
</template>

<script lang="ts" setup>
import { getChar } from '~/assets/scripts/chars';
import { getModeI18nString } from '~/assets/scripts/modes';
import type { Submission } from '~/assets/types/database';

const props = defineProps({
    userId: {
        type: String,
        required: true
    },
    limit: {
        type: Number,
        default: 10
    }
});

const emit = defineEmits(['load']);

const loading = ref(true);
const submissions: Ref<Submission[]> = ref([]);
const offset = ref(0);
const isLastPage = ref(true);
    
watchEffect(async () => {
    loading.value = true;

    const { data } = await useFetch('/api/v1/fetch-profile-submissions', {
        query: {
            id: props.userId,
            limit: props.limit + 1,
            offset
        }
    });

    if(!data.value?.entries) {
        submissions.value = [];
    } else {
        submissions.value = data.value.entries;
    }

    isLastPage.value = submissions.value.length <= props.limit;

    loading.value = false;
});

emit('load', submissions.value);
</script>

<style scoped lang="scss">
@use '~/assets/scss/colors';

.table-wrapper {
    max-width: 100%;
    overflow-x: auto;
}

table {
    width: 100%;
    border-collapse: collapse;
    overflow: auto;
    text-align: center;
    color: white;
    font-family: 'techmino-proportional';

    thead {
        background-color: colors.$secondary-color-alpha50;
    }

    tbody {
        tr:nth-child(odd) {
            background-color: colors.$lb-odd-bg-color;
        }
        tr:nth-child(even) {
            background-color: colors.$lb-even-bg-color;
        }

        tr.valid {
            &.index-1 {
                background-color: colors.$lb-first-bg-color !important;
                color: colors.$lb-first-text-color;
            }
            &.index-2 {
                background-color: colors.$lb-second-bg-color !important;
                color: colors.$lb-second-text-color;
            }
            &.index-3 {
                background-color: colors.$lb-third-bg-color !important;
                color: colors.$lb-third-text-color;
            }
        }
    }

    th, td {
        border: 0.1em solid colors.$lb-border-color;
        padding: 0.5em;
    }

    .no-records {
        font-style: italic;
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

.loading-text {
    display: block;
    text-align: center;
    font-size: 1.25em;
    font-weight: bold;
}
</style>