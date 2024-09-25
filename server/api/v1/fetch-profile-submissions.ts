import { useDatabase } from '~/composables/database';

/**
 * @api {get} /api/v1/fetch-profile-submissions Fetch latest user submissions
 * @apiName FetchProfileSubmissions
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
            statusMessage: "Missing required parameter 'id' of type string"
        });
    }

    if (typeof id !== 'string') {
        throw createError({
            statusCode: 400,
            statusMessage: "Invalid parameter 'id': Expected type string"
        });
    }

    let order: "NewestFirst" | "OldestFirst" = "NewestFirst";

    if (query.reverse) {
        const reverseQuery = query.reverse;

        if (typeof reverseQuery !== 'boolean') {
            throw createError({
                statusCode: 400,
                statusMessage: "Invalid parameter 'reverse': Expected type boolean"
            });
        }

        order = reverseQuery ? "OldestFirst" : "NewestFirst";
    }

    let limit = 10;

    if (query.limit) {
        let limitQuery = query.limit;

        if (typeof limitQuery !== 'number') {
            if(typeof limitQuery !== 'string') {
                throw createError({
                    statusCode: 400,
                    statusMessage: "Invalid parameter 'limit': Expected type number"
                });
            }

            if(typeof limitQuery === 'string') {
                let casted = parseInt(limitQuery);

                if(!isFinite(casted)) {
                    throw createError({
                        statusCode: 400,
                        statusMessage: "Invalid parameter 'limit': Expected type number"
                    });
                }

                limitQuery = casted;
            }
        }

        if(limitQuery > 100) {
            throw createError({
                statusCode: 400,
                statusMessage: "Invalid parameter 'limit': Must be less than or equal to 100"
            });
        }

        limit = limitQuery;
    }

    let offset = 0;

    if (query.offset) {
        let offsetQuery = query.offset;

        if (typeof offsetQuery !== 'number') {
            if(typeof offsetQuery !== 'string') {
                throw createError({
                    statusCode: 400,
                    statusMessage: "Invalid parameter 'offset': Expected type number"
                });
            }

            if(typeof offsetQuery === 'string') {
                let casted = parseInt(offsetQuery);

                if(!isFinite(casted)) {
                    throw createError({
                        statusCode: 400,
                        statusMessage: "Invalid parameter 'offset': Expected type number"
                    });
                }

                offsetQuery = casted;
            }
        }


        if (offsetQuery < 0) {
            throw createError({
                statusCode: 400,
                statusMessage: "Invalid parameter 'offset': Must be greater than or equal to 0"
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