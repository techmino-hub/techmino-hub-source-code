import { Submission, SubmissionWithReplay } from '~/assets/types/database';
import { useDatabase } from '~/composables/database';

/**
 * @api {get} /api/fetch-submission Fetch submission info
 * @apiName FetchSubmission
 * @apiVersion 1.0.0
 * @apiDescription
 * Fetches submission data.
 * 
 * @apiParam {String} id The submission's ID.
 * @apiParam {Boolean} [with_replay=false] Whether or not to also fetch for replay data.
 * 
 * @apiSuccess {Submission | SubmissionWithReplay} data
 * The submission's data.  
 * It will return a "Submission" object if `with_replay` is `false`,  
 * otherwise it will return a "SubmissionWithReplay" object.
 * See types "Submission" and "SubmissionWithReplay": `/assets/types/database.ts`
 * See how to decompress the replay data: `/assets/scripts/replay/parser.ts`
 */

export default defineEventHandler(async(event) => {
    const query = getQuery(event);

    const id = query.id;

    if(!query.id) {
        throw createError({
            statusCode: 400,
            message: "Missing required parameter 'id' of type string"
        });
    }

    if(typeof id !== 'string') {
        throw createError({
            statusCode: 400,
            message: "Invalid parameter 'id': Expected type string"
        });
    }

    let withReplay = false;

    if(query.with_replay) {
        withReplay = true;
    }

    const db = useDatabase();

    const data: Submission | SubmissionWithReplay = await (
        withReplay
            ? db.getSubmissionWithReplayById(id)
            : db.getSubmissionById(id)
    );


    if(!data) {
        throw createError({
            statusCode: 404,
            message: "Submission not found"
        });
    }

    return { data };
});