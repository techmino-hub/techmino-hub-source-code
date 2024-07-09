<template>
    <div class="lb-outer">
        <table v-show="!loading">
            <thead>
                <tr>
                    <th>
                        {{ $t('leaderboard.header.lbRank') }}
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
                <tr v-for="(submission, index) in submissions" :key="submission.id">
                    <td>
                        {{ index + 1 + offset }}
                    </td>
                    <td v-for="column in recordSchema.entries" :key="column.name">
                        {{
                            submission.score ? 
                                (submission.score[column.name] ?? $t('leaderboard.null')) :
                                $t('leaderboard.null')
                        }}
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
import type { Submission } from '~/assets/types/database';
import type { RecordSchema, TableOrder } from '~/assets/types/record';

export default defineNuxtComponent({
    props: {
        gameMode: {
            type: String,
            required: true
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
    async setup(props) {
        const loading = ref(true);
        const submissions: Ref<Submission[]> = ref([]);
        const recordSchema: Ref<RecordSchema> = ref(RECORD_SCHEMAS[props.gameMode]);
        
        if(!recordSchema.value) {
            throw new Error(`Record schema for game mode ${props.gameMode} not found.`);
        }
        
        const database = useDatabase();

        watchEffect(async () => {
            loading.value = true;

            recordSchema.value = RECORD_SCHEMAS[props.gameMode];
            // submissions.value = await database.getOrderedSubmissionsByGameMode(
            //     props.gameMode,
            //     recordSchema.value.order,
            //     props.limit,
            //     props.offset
            // );

            submissions.value = [
                {
                    game_mode: 'sprint_10l',
                    id: 'sample',
                    score: {
                        time: 123456,
                        pieces: 123
                    },
                    proof: 'https://example.com',
                    upload_date: "2021-09-01T00:00:00Z",
                    replay_date: "2021-09-01T00:00:00Z",
                    submitted_by: 'sample',
                    validity: "Unverified"
                },
                {
                    game_mode: 'sprint_10l',
                    id: 'sample',
                    score: {
                        time: 123456,
                        pieces: 123
                    },
                    proof: 'https://example.com',
                    upload_date: "2021-09-01T00:00:00Z",
                    replay_date: "2021-09-01T00:00:00Z",
                    submitted_by: 'sample',
                    validity: "Unverified"
                },
                {
                    game_mode: 'sprint_10l',
                    id: 'sample',
                    score: {
                        time: 123456,
                        pieces: 123
                    },
                    proof: 'https://example.com',
                    upload_date: "2021-09-01T00:00:00Z",
                    replay_date: "2021-09-01T00:00:00Z",
                    submitted_by: 'sample',
                    validity: "Unverified"
                },
            ]; // DEBUG

            loading.value = false;
        });

        return {
            submissions,
            recordSchema,
            loading
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