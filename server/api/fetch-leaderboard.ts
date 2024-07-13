import { RECORD_SCHEMAS } from '~/assets/data/record-schemas';
import { SubmissionValidity } from '~/assets/types/database';
import { useDatabase } from '~/composables/database';

/**
 * @api {get} /api/fetch-leaderboard Fetch leaderboard
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
        throw new Error("Missing required parameter 'gameMode' of type string");
    }
    
    if(typeof gameMode !== 'string') {
        throw new Error("Invalid parameter 'gameMode': Expected type string");
    }
    
    if(!RECORD_SCHEMAS[gameMode]) {
        throw new Error(`Invalid game mode '${gameMode}'`);
    }

    let validity = SubmissionValidity.Verified;

    if(query.validity) {
        const validityQuery = query.validity;

        if(typeof validityQuery !== 'string') {
            throw new Error("Invalid parameter 'validity': Expected type string");
        }
        if(!(validityQuery in SubmissionValidity)) {
            throw new Error("Invalid parameter 'validity': Does not match enum 'SubmissionValidity'");
        }
        
        validity = SubmissionValidity[validityQuery as keyof typeof SubmissionValidity];
    }

    let limit = 10;

    if(query.limit) {
        const limitQuery = query.limit;

        if(typeof limitQuery !== 'number') {
            throw new Error("Invalid parameter 'limit': Expected type number");
        }

        if(limit < 1 || limit > 100) {
            throw new Error("Invalid parameter 'limit': Must be between 1 and 100");
        }

        limit = limitQuery;
    }

    let offset = 0;

    if(query.offset) {
        const offsetQuery = query.offset;

        if(typeof offsetQuery !== 'number') {
            throw new Error("Invalid parameter 'offset': Expected type number");
        }

        if(offset < 0) {
            throw new Error("Invalid parameter 'offset': Must be greater than or equal to 0");
        }

        offset = offsetQuery;
    }

    let reverse = false;

    if(query.reverse) {
        const reverseQuery = query.reverse;

        if(typeof reverseQuery !== 'boolean') {
            throw new Error("Invalid parameter 'reverse': Expected type boolean");
        }

        reverse = reverseQuery;
    }

    const database = useDatabase();

    const result = await database.getSubmissionsByGameMode(
        gameMode,
        validity,
        limit,
        offset,
        RECORD_SCHEMAS[gameMode].order,
    );

    if(reverse) {
        result.reverse();
    }

    return {
        entries: result,
    };
});