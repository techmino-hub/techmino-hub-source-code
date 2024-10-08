import { useDatabase } from "~/composables/database";

/**
 * @api {get} /api/v1/check-avatar Check if a user has an avatar
 * @apiName CheckAvatar
 * @apiVersion 1.0.0
 * @apiDescription
 * Checks if a user has an avatar.
 * 
 * @apiParam {String} id The user's profile ID.
 * 
 * @apiSuccess {Boolean} exists Whether the user has an avatar or not.
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

    if (id.length !== 36) {
        throw createError({
            statusCode: 400,
            statusMessage: "Invalid parameter 'id': Does not match UUID format"
        });
    }

    const database = useDatabase();

    const path = database.getAvatarUrlByUserId(id);

    try {
        const response = await fetch(path, {
            method: 'HEAD'
        });
        
        return response.ok;
    } catch {}

    return false;
});