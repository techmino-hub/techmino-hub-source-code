<template>
    <div class="page-outer">
        <Title>{{ $t('lbBacklog.tabTitle') }}</Title>
        <Meta property="og:title" :content="$t('lbBacklog.tabTitle')" />
        <h1>{{ $t('lbBacklog.title') }}</h1>
        <p>{{ $t('lbBacklog.description') }}</p>
        
        <div class="table-wrapper">
            <p class="loading-text" v-show="loading">
                {{ $t('leaderboard.loading') }}
            </p>
            <table v-show="!loading">
                <thead>
                    <tr>
                        <th>{{ $t('leaderboard.header.lbRank' )}}</th>
                        <th>{{ $t('leaderboard.header.player' )}}</th>
                        <th>
                            {{ $t('leaderboard.header.mode') }}
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
                        <td>{{ index + offset }}</td>
                        <td>
                            <LazyProfileLink
                                :profile="submission.submitted_by"
                                :with-card="false"
                            />
                        </td>
                        <td>
                            <NuxtLinkLocale
                              :to="`/map-lite/${submission.game_mode}`">
                                {{ getModeI18nString(submission.game_mode, $t) }}
                            </NuxtLinkLocale>
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
            <noscript>
                <NuxtLinkLocale
                    :disabled="offset === 0"
                    :aria-disabled="offset === 0"
                    :to="offset !== 0 ? getPathToOffset(offset - limit) : undefined">
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
              @click="offset += limit">
                {{ $t('leaderboard.pageNext') }}
            </button>
            <noscript>
                <NuxtLinkLocale
                    :disabled="isLastPage"
                    :aria-disabled="isLastPage"
                    :to="!isLastPage ? getPathToOffset(offset + limit) : undefined">
                    {{ $t('leaderboard.pageNext') }}
                </NuxtLinkLocale>
            </noscript>
        </div>
    </div>
</template>

<script lang="ts" setup>
import type { LocationQueryValue } from 'vue-router';
import { getChar } from '~/assets/scripts/chars';
import { getModeI18nString } from '~/assets/scripts/modes';
import { type Submission, SubmissionValidity, Table } from '~/assets/types/database';

const { params } = useRoute();
const supabase = useSupabase();

const loading = ref(true);
const submissions: Ref<Submission[]> = ref([]);
const offset = ref(0);
const isLastPage = ref(true);
const limit = ref(100);

function getFirstParam(key: string): LocationQueryValue {
    return typeof params[key] === 'object' ?
        params[key][0] :
        params[key];
}

if(params.offset) {
    const param = getFirstParam('offset') as string;
    
    const parsed = parseInt(param);

    if(!isNaN(parsed)) {
        offset.value = parsed;
    }
}

if(params.limit) {
    const param = getFirstParam('limit') as string;
    
    const parsed = parseInt(param);

    if(!isNaN(parsed)) {
        limit.value = parsed;
    }
}

function getPathToOffset(offset: number): string {
    offset = Math.max(offset, 0);
    return `/leaderboard/backlog?limit=${limit.value}&offset=${offset}`;
}

watchEffect(async () => {
    loading.value = true;

    // TODO: replace with API call for SSR compatibility
    const { count, data, error } = await supabase.from(Table.Submissions)
        .select('*', { count: 'exact' })
        .eq('validity', SubmissionValidity.Unverified)
        .order('upload_date', { ascending: true })
        .range(offset.value, offset.value + limit.value);
    
    if(error) {
        console.error(error);
    }

    if(count) {
        isLastPage.value = offset.value + limit.value >= count;
    }
    
    submissions.value = data || [];

    loading.value = false;
});
</script>

<style lang="scss" scoped>
@use '~/assets/scss/colors';
.page-outer {
    padding: 1em 2em;
}

.table-wrapper {
    max-width: 100%;
    overflow-x: auto;
}

a {
    color: colors.$tertiary-color;
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