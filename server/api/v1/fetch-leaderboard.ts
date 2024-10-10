import { RECORD_SCHEMAS } from '~/assets/data/record-schemas';
import { Submission, SubmissionValidity } from '~/assets/types/database';
import { useDatabase } from '~/composables/database';
import { type PostgrestError } from '@supabase/supabase-js';

/**
 * @api {get} /api/v1/fetch-leaderboard Fetch leaderboard
 * @apiName FetchLeaderboard
 * @apiVersion 1.0.0
 * @apiDescription
 * Fetches the leaderboard of a certain game mode.  
 * The sorting is hardcoded based on the game mode.
 * 
 * @apiParam {Number} gameMode The game mode to fetch the leaderboard for.
 * @apiParam {SubmissionValidity} [validity="Verified"]
 * The validity of the records to fetch.  
 * See enum "SubmissionValidity": `/assets/types/database.ts`
 * @apiParam {Number} [limit=10] The maximum number of records to fetch.
 * @apiParam {Number} [offset=0] The offset to start fetching records from.
 * @apiParam {Boolean} [reverse=false] Whether or not to reverse the sorting.
 * 
 * @apiSuccess {Submission[]} entries
 * A list of leaderboard submissions/entries.  
 * See type "Submission": `/assets/types/database.ts`
 */
export default defineEventHandler(async (event) => {
    const query = getQuery(event);

    let gameMode = query.gameMode;

    if(!gameMode) {
        throw createError({
            statusCode: 400,
            statusMessage: "Missing required parameter 'gameMode' of type string"
        });
    }
    
    if(typeof gameMode !== 'string') {
        throw createError({
            statusCode: 400,
            statusMessage: "Invalid parameter 'gameMode': Expected type string"
        });
    }
    
    if(!(gameMode in RECORD_SCHEMAS)) {
        throw createError({
            statusCode: 400,
            statusMessage: `Invalid game mode '${gameMode}'`
        });
    }

    let validity = SubmissionValidity.Verified as SubmissionValidity;

    if(query.validity) {
        const validityQuery = query.validity;

        if(typeof validityQuery !== 'string') {
            throw createError({
                statusCode: 400,
                statusMessage: "Invalid parameter 'validity': Expected type string"
            });
        }
        if(!(validityQuery in SubmissionValidity)) {
            throw createError({
                statusCode: 400,
                statusMessage: "Invalid parameter 'validity': Does not match enum 'SubmissionValidity'"
            });
        }
        
        validity = SubmissionValidity[validityQuery as keyof typeof SubmissionValidity];
    }

    let limit = 10;

    if(query.limit) {
        let limitQuery = query.limit;

        if(typeof limitQuery !== 'number') {
            if(typeof limitQuery !== 'string') {
                throw createError({
                    statusCode: 400,
                    statusMessage: "Invalid parameter 'limit': Expected type number"
                });
            } else {
                const casted = parseInt(limitQuery);

                if(!isFinite(casted)) {
                    throw createError({
                        statusCode: 400,
                        statusMessage: "Invalid parameter 'limit': Expected type number"
                    });
                }

                limitQuery = casted;
            }
        }

        if(limit < 1 || limit > 100) {
            throw createError({
                statusCode: 400,
                statusMessage: "Invalid parameter 'limit': Must be between 1 and 100"
            });
        }

        limit = limitQuery;
    }

    let offset = 0;

    if(query.offset) {
        let offsetQuery = query.offset;

        if(typeof offsetQuery !== 'number') {
            if(typeof offsetQuery !== 'string') {
                throw createError({
                    statusCode: 400,
                    statusMessage: "Invalid parameter 'offset': Expected type number"
                });
            } else {
                const casted = parseInt(offsetQuery);

                if(!isFinite(casted)) {
                    throw createError({
                        statusCode: 400,
                        statusMessage: "Invalid parameter 'offset': Expected type number"
                    });
                }

                offsetQuery = casted;
            }
        }

        if(offset < 0) {
            throw createError({
                statusCode: 400,
                statusMessage: "Invalid parameter 'offset': Must be greater than or equal to 0"
            });
        }

        offset = offsetQuery;
    }

    let reverse = false;

    if(query.reverse) {
        let reverseQuery = query.reverse;

        if(typeof reverseQuery === 'boolean') {
            reverse = reverseQuery;
        } else if(typeof reverseQuery === 'string') {
            if(reverseQuery === "true") {
                reverse = true;
            } else if(reverseQuery === "false") {
                reverse = false;
            } else {
                throw createError({
                    statusCode: 400,
                    statusMessage: "Invalid parameter 'reverse': Expected type boolean"
                });
            }
        } else if(typeof reverseQuery === "number") {
            if(reverseQuery === 1) {
                reverse = true;
            } else if(reverseQuery === 0) {
                reverse = false;
            } else {
                throw createError({
                    statusCode: 400,
                    statusMessage: "Invalid parameter 'reverse': Expected type boolean"
                });
            }
        }
    }

    const database = useDatabase();

    try {
        const result = await database.getSubmissionsByGameMode(
            gameMode,
            validity,
            limit,
            offset,
            RECORD_SCHEMAS[gameMode]!.order,
        );
        
        if(reverse) {
            result.reverse();
        }
    
        return {
            entries: result,
        };
    } catch(e) {
        let message = "Unknown error";
        let statusCode = 500;

        if(
            typeof e === "object" &&
            e !== null
        ) {
            if('message' in e && typeof e.message === "string") {
                message = e.message;
            }

            if('code' in e && typeof e.code === "number") {
                statusCode = e.code;
            }
        } else if(typeof e === "string") {
            message = e;
        }

        throw createError({
            statusCode,
            statusMessage: `Failed to fetch leaderboard: ${message}`,
        });
    }
});