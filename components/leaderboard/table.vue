<template>
    <div class="lb-outer">
        <table v-show="!loading">
            <thead>
                <tr>
                    <th>
                        {{ $t('leaderboard.header.lbRank') }}
                    </th>
                    <th>
                        {{ $t('leaderboard.header.player') }}
                    </th>
                    <th v-for="column in recordSchema.entries" :key="column.name">
                        {{ $t(`leaderboard.header.${column.name}`) }}
                    </th>
                    <th>
                        {{ $t('leaderboard.header.date') }}
                    </th>
                    <th>
                        {{ $t('leaderboard.header.submitDate') }}
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
                  :key="submission.id"
                  :class="`index-${index + 1 + offset}`">
                    <td>
                        {{ index + 1 + offset }}
                    </td>
                    <ProfileLink
                        :profile="submission.submitted_by"
                    />
                    <td v-for="column in recordSchema.entries" :key="column.name">
                        {{ localeScore(submission.score, column.name) }}
                    </td>
                    <td>
                        {{ new Date(submission.replay_date).toLocaleString() }}
                    </td>
                    <td>
                        {{ new Date(submission.upload_date).toLocaleString() }}
                    </td>
                </tr>
            </tbody>
        </table>
        <p class="loading-text" v-show="loading">
            {{ $t('leaderboard.loading') }}
        </p>
    </div>
</template>

<script lang="ts">
import { RECORD_SCHEMAS } from '~/assets/data/record-schemas';
import { SubmissionValidity, type Submission } from '~/assets/types/database';
import type { RecordSchema, TableOrder } from '~/assets/types/record';

export default defineNuxtComponent({
    props: {
        gameMode: {
            type: String,
            required: true
        },
        validity: {
            type: String as PropType<SubmissionValidity>,
            default: SubmissionValidity.Verified
        },
        limit: {
            type: Number,
            default: 10
        },
        offset: {
            type: Number,
            default: 0
        }
    },
    emits: {
        'load': (submissions: Submission[]) => true
    },
    async setup(props, { emit }) {
        const loading = ref(true);
        const submissions: Ref<Submission[]> = ref([]);
        const recordSchema: Ref<RecordSchema> = ref(RECORD_SCHEMAS[props.gameMode]);
        
        if(!recordSchema.value) {
            throw new Error(`Record schema for game mode ${props.gameMode} not found.`);
        }
        
        const database = useDatabase();
        const i18n = useI18n();

        watchEffect(async () => {
            loading.value = true;

            recordSchema.value = RECORD_SCHEMAS[props.gameMode];
            
            const { data } = await useFetch('/api/fetch-leaderboard', {
                query: {
                    gameMode: props.gameMode,
                    validity: props.validity,
                    limit: props.limit,
                    offset: props.offset
                }
            });

            if(!data.value?.entries) {
                submissions.value = [];
            } else {
                submissions.value = data.value.entries;
            }

            emit('load', submissions.value);

            loading.value = false;
        });

        return {
            submissions,
            recordSchema,
            loading,
            localeScore: function(score: any, column: string) {
                if(!score || !score[column]) {
                    return i18n.t('leaderboard.null');
                }

                if(!i18n.te(`leaderboard.scoreDisp.${column}`)) {
                    return score[column];
                }

                return i18n.t(
                    `leaderboard.scoreDisp.${column}`,
                    { value: score[column] }
                );
            }
        };
    },
});
</script>

<style scoped lang="scss">
@use '~/assets/scss/colors';

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
        
        tr.index-1 {
            background-color: colors.$lb-first-bg-color !important;
            color: colors.$lb-first-text-color;
        }

        tr.index-2 {
            background-color: colors.$lb-second-bg-color !important;
            color: colors.$lb-second-text-color;
        }

        tr.index-3 {
            background-color: colors.$lb-third-bg-color !important;
            color: colors.$lb-third-text-color;
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

.loading-text {
    display: block;
    text-align: center;
    font-size: 1.25em;
    font-weight: bold;
}
</style>