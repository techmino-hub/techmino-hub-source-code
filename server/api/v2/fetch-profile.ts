import { Table } from '~/assets/types/database';
import { useSupabase } from '~/composables/database';

/**
 * @api {get} /api/v2/fetch-profile Fetch Profile
 * @apiName FetchProfile
 * @apiVersion 2.0.0
 * @apiDescription
 * Fetches user information based on a user's identifier.
 * 
 * @apiParam {String} id The user's identifier, which may be a UUID, or a username.
 * 
 * @apiSuccess {Profile} profile The user's profile information.
 * See type "Profile": `/assets/types/database.ts`
 */
export default defineEventHandler(async (event) => {
    const query = getQuery(event);

    let id = query.id;

    if(typeof id !== 'string') {
        throw createError({
            statusCode: 400,
            statusMessage: `Invalid user identifier (expected string, got ${typeof id})`
        });
    }

    const supabase = useSupabase();

    const { data: profile, error } = await supabase
        .from(Table.Profiles)
        .select("*")
        .or(`id.eq.${id},username.eq.${id}`);

    if(error) {
        throw createError({
            statusCode: parseInt(error.code) || 500,
            statusMessage: error.message,
            cause: error.details,
            data: "Hint: " + error.hint
        });
    }

    if(!profile || profile.length === 0) {
        throw createError({
            statusCode: 404,
            statusMessage: "User not found"
        });
    }

    return profile[0];
})