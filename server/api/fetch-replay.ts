import { useDatabase } from '~/composables/database';

/**
 * @api {get} /api/fetch-replay Fetch replay info
 * @apiName FetchReplay
 * @apiVersion 1.0.0
 * @apiDescription
 * Fetches the base-64 compressed version of the replay associated with a submission.
 * 
 * @apiParam {String} id The submission's ID.
 * 
 * @apiSuccess {ReplayData} replay
 * The submission's replay data.
 * See type "ReplayData": `/assets/types/database.ts`
 * See how to decompress the replay data: `/assets/scripts/replay/parser.ts`
 */

export default defineEventHandler(async(event) => {
    const query = getQuery(event);

    const id = query.id;

    if(!query.id) {
        throw createError({
            statusCode: 400,
            statusMessage: "Missing required parameter 'id' of type string"
        });
    }

    if(typeof id !== 'string') {
        throw createError({
            statusCode: 400,
            statusMessage: "Invalid parameter 'id': Expected type string"
        });
    }

    const db = useDatabase();

    const replay = await db.getReplayBySubmissionId(id);

    if(!replay) {
        throw createError({
            statusCode: 404,
            statusMessage: "Submission not found"
        });
    }

    return { replay };
});