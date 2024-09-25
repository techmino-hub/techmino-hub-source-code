import { useDatabase } from '~/composables/database';

/**
 * @api {get} /api/v1/fetch-replay Fetch replay info
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
 * See how to parse the replay data: [NPM: techmino-replay-parser](https://www.npmjs.com/package/techmino-replay-parser)
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