import { useDatabase } from '~/composables/database';

/**
 * @api {get} /api/fetch-user-submissions Fetch latest user submissions
 * @apiName FetchUserSubmissions
 * @apiVersion 1.0.0
 * @apiDescription
 * Fetches a user's latest submissions.
 * 
 * @apiParam {String} id The user's profile ID.
 * @apiParam {Number} [limit=10] The maximum number of records to fetch.
 * @apiParam {Number} [offset=0] The offset to start fetching records from.
 * @apiParam {Boolean} [reverse=false]
 * Whether or not to reverse the sorting.  
 * In other words, whether or not to sort oldest first.
 * 
 * @apiSuccess {Submission[]} entries
 * A list of leaderboard submissions/entries.  
 * See type "Submission": `/assets/types/database.ts`
 */
export default defineEventHandler(async (event) => {
    const query = getQuery(event);

    let id = query.id;

    if (!id) {
        throw createError({
            statusCode: 400,
            message: "Missing required parameter 'id' of type string"
        });
    }

    if (typeof id !== 'string') {
        throw createError({
            statusCode: 400,
            message: "Invalid parameter 'id': Expected type string"
        });
    }

    let order: "NewestFirst" | "OldestFirst" = "NewestFirst";

    if (query.reverse) {
        const reverseQuery = query.reverse;

        if (typeof reverseQuery !== 'boolean') {
            throw createError({
                statusCode: 400,
                message: "Invalid parameter 'reverse': Expected type boolean"
            });
        }

        order = reverseQuery ? "OldestFirst" : "NewestFirst";
    }

    let limit = 10;

    if (query.limit) {
        const limitQuery = query.limit;

        if (typeof limitQuery !== 'number') {
            throw createError({
                statusCode: 400,
                message: "Invalid parameter 'limit': Expected type number"
            });
        }

        if(limitQuery > 100) {
            throw createError({
                statusCode: 400,
                message: "Invalid parameter 'limit': Must be less than or equal to 100"
            });
        }

        limit = limitQuery;
    }

    let offset = 0;

    if (query.offset) {
        const offsetQuery = query.offset;

        if (typeof offsetQuery !== 'number') {
            throw createError({
                statusCode: 400,
                message: "Invalid parameter 'offset': Expected type number"
            });
        }

        if (offsetQuery < 0) {
            throw createError({
                statusCode: 400,
                message: "Invalid parameter 'offset': Must be greater than or equal to 0"
            });
        }

        offset = offsetQuery;
    }

    const database = useDatabase();

    const submissions = await database.getSubmissionsByUserId(id, order, limit, offset);

    return {
        entries: submissions
    };
});