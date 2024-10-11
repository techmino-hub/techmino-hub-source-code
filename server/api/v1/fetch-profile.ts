import { PostgrestError } from '@supabase/supabase-js';
import { type Profile } from '~/assets/types/database';
import { useDatabase } from '~/composables/database';

/**
 * @api {get} /api/v1/fetch-profile Fetch Profile
 * @apiName FetchProfile
 * @apiVersion 1.0.0
 * @apiDescription
 * Fetches user information based on either the user's UUID, or the username.
 * 
 * @apiParam {String} uuid The UUID of the user to fetch.
 * @apiParam {String} username The username of the user to fetch.
 * 
 * @apiSuccess {Profile} profile The user's profile information.
 * See type "Profile": `/assets/types/database.ts`
 */
export default defineEventHandler(async (event) => {
    const query = getQuery(event);

    const uuid = query.uuid;
    const username = query.username;

    if(!uuid && !username) {
        throw createError({
            statusCode: 400,
            statusMessage: "Missing required parameter 'uuid' or 'username' of type string"
        });
    }

    if(uuid && username) {
        throw createError({
            statusCode: 400,
            statusMessage: "Only one of 'uuid' or 'username' is allowed"
        });
    }

    if(uuid && typeof uuid !== 'string') {
        throw createError({
            statusCode: 400,
            statusMessage: "Invalid parameter 'uuid': Expected type string"
        });
    }

    if(username && typeof username !== 'string') {
        throw createError({
            statusCode: 400,
            statusMessage: "Invalid parameter 'username': Expected type string"
        });
    }

    const database = useDatabase();

    let profile: Profile | null = null;

    try {
        if(uuid) {
            profile = await database.getProfileById(uuid as string);
        } else {
            profile = await database.getProfileByUsername(username as string);
        }
    } catch(err: unknown) {
        if(!err || (typeof err !== 'object' && typeof err !== 'string')) {
            throw createError({
                statusCode: 500,
                statusMessage: "Unknown error"
            });
        }

        if(typeof err === 'string') {
            throw createError({
                statusCode: 500,
                statusMessage: err
            });
        }

        const error = err as PostgrestError | Error;

        if(error.message.toLowerCase().includes("not found")) {
            throw createError({
                statusCode: 404,
                statusMessage: "User not found"
            });
        }

        throw createError({
            statusCode: ('code' in error ? Number(error.code) : 500),
            statusMessage: error.message
        });
    }

    if(!profile) {
        throw createError({
            statusCode: 404,
            statusMessage: "User not found"
        });
    }

    return {
        profile: profile
    };
})