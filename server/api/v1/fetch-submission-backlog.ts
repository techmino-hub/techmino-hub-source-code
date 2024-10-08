import { SubmissionValidity, Table } from '~/assets/types/database';
import { useSupabase } from '~/composables/database';

/**
 * @api {get} /api/v1/fetch-submission-backlog Fetch unverified submissions
 * @apiName FetchSubmissionBacklog
 * @apiVersion 1.0.0
 * @apiDescription
 * Fetches unverified submissions, from the oldest to the newest.
 * 
 * @apiParam {Number} [limit=100] The maximum number of records to fetch.
 * @apiParam {Number} [offset=0] The offset to start fetching records from.
 * @apiParam {Boolean} [reverse=false]
 * Whether or not to reverse the sorting.  
 * In other words, whether or not to sort newest first.
 * 
 * @apiSuccess {Submission[]} entries
 * A list of leaderboard submissions/entries.  
 * See type "Submission": `/assets/types/database.ts`
 * @apiSuccess {number} count
 * The total amount of unverified submissions.
 */
export default defineEventHandler(async (event) => {
    const query = getQuery(event);

    let limit = 100;

    if(query.limit) {
        if(typeof query.limit !== 'string') {
            throw createError({
                statusCode: 400,
                statusMessage: "Invalid parameter 'limit': expected number, got array/object"
            });
        }

        const parsed = parseInt(query.limit);

        if(isNaN(parsed)) {
            throw createError({
                statusCode: 400,
                statusMessage: "Invalid parameter 'limit': value is not a valid integer"
            });
        }

        if(limit > 100) {
            throw createError({
                statusCode: 400,
                statusMessage: "Invalid parameter 'limit': must be smaller or equal to 100"
            });
        }

        limit = parsed;
    }

    let offset = 0;

    if(query.offset) {
        if(typeof query.offset !== 'string') {
            throw createError({
                statusCode: 400,
                statusMessage: "Invalid parameter 'offset': expected number, got array/object"
            });
        }

        const parsed = parseInt(query.offset);

        if(isNaN(parsed)) {
            throw createError({
                statusCode: 400,
                statusMessage: "Invalid parameter 'offset': value is not a valid integer"
            });
        }

        if(offset > 100) {
            throw createError({
                statusCode: 400,
                statusMessage: "Invalid parameter 'offset': must be smaller or equal to 100"
            });
        }

        offset = parsed;
    }

    let reverse = false;

    if(query.reverse) { reverse = true; }

    const supabase = useSupabase();

    const { data, error, count } = await supabase.from(Table.Submissions)
        .select('*', { count: 'exact' })
        .eq('validity', SubmissionValidity.Unverified)
        .order('upload_date', { ascending: !reverse })
        .range(offset, offset + limit);

    if(error) {
        const statusCode = parseInt(error.code) || 500;
        const statusMessage =
            `Error from Supabase: ${error.message.length > 0 ? error.message : "Unknown"}`;

        throw createError({
            statusCode,
            statusMessage,
            message: error.details,
            cause: error.hint
        });
    }

    return {
        entries: data,
        count: count || 0
    }
})