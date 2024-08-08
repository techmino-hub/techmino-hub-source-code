import * as nsfwjs from 'nsfwjs';
import * as tf from '@tensorflow/tfjs-node';
import { useSupabase } from '~/composables/database';

/**
 * @api {post} /api/update-avatar Update a user's avatar
 * @apiName UpdateAvatar
 * @apiVersion 1.0.0
 * @apiDescription
 * Updates a user's avatar.
 * 
 * @apiParam {String} user The UUID of the user to update.
 * @apiParam {String} avatar The URL-encoded data URL of the new avatar.
 * @apiParam {String} [access_token=(anon key)] The access token of the user making the request.
 * @apiParam {String} [refresh_token] The refresh token of the user making the request.
 */
export default defineEventHandler(async (event) => {
    const supabase = useSupabase();

    const body = await readBody(event);

    const { user, avatar, access_token, refresh_token } = body;

    if(!user) {
        throw createError({
            statusCode: 400,
            statusMessage: "Missing required parameter 'user' of type string"
        });
    }

    if(typeof user !== 'string') {
        throw createError({
            statusCode: 400,
            statusMessage: "Invalid parameter 'user': Expected type string"
        });
    }

    if(user.length !== 36) {
        throw createError({
            statusCode: 400,
            statusMessage: "Invalid parameter 'user': Expected UUID format"
        });
    }

    if(!avatar) {
        throw createError({
            statusCode: 400,
            statusMessage: "Missing required parameter 'avatar' of type string"
        });
    }

    if(typeof avatar !== 'string') {
        throw createError({
            statusCode: 400,
            statusMessage: "Invalid parameter 'avatar': Expected type string"
        });
    }

    if(access_token && typeof access_token !== 'string') {
        throw createError({
            statusCode: 400,
            statusMessage: "Invalid parameter 'access_token': Expected type string"
        });
    }

    if(refresh_token && typeof refresh_token !== 'string') {
        throw createError({
            statusCode: 400,
            statusMessage: "Invalid parameter 'refresh_token': Expected type string"
        });
    }

    if(access_token && !refresh_token) {
        throw createError({
            statusCode: 400,
            statusMessage: "Missing required parameter 'refresh_token' when providing 'access_token'"
        });
    }

    if(refresh_token && !access_token) {
        throw createError({
            statusCode: 400,
            statusMessage: "Missing required parameter 'access_token' when providing 'refresh_token'"
        });
    }

    if(access_token) {
        const { data, error } = await supabase.auth.setSession({
            access_token,
            refresh_token
        });

        if(error) {
            throw createError({
                statusCode: 401,
                statusMessage: "Invalid access token"
            });
        }
    }

    const blob = dataUrlToBlob(avatar);
    const arr = dataUrlToUInt8Array(avatar);
    tf.enableProdMode();
    const tensor = tf.node.decodeImage(arr, 3);
    
    const model = await nsfwjs.load("/data/nsfwjs/mobilenet_v2/model.json");
    
    const prediction = (await model.classify(tensor))
        .reduce((a, b) =>
            a.probability > b.probability ? a : b
        );

    if(!["Neutral", "Drawing"].includes(prediction.className)) {
        throw createError({
            statusCode: 400,
            statusMessage: `Invalid parameter 'avatar': NSFW content detected (${prediction.className} - ${prediction.probability}% confidence). Please try another image.`
        });
    }

    const file = new File([blob], `${user}.png`, { type: 'image/png' });

    if(file.size > 512 * 1024) {
        throw createError({
            statusCode: 400,
            statusMessage: `File size too large: ${file.size} bytes exceeds maximum of 524288 bytes`
        });
    }

    const { error } = await supabase
        .storage
        .from("avatars")
        .upload(user, file);
    
    if(error) {
        throw createError({
            statusCode: 500,
            cause: error.cause,
            statusMessage: "Error from Supabase: " + error.message,
            stack: error.stack,
            name: error.name
        });
    }
});

function dataUrlToBlob(dataUrl: string): Blob {
    const byteString = atob(dataUrl.split(',')[1]);
    const mimeString = dataUrl.split(',')[0].split(':')[1].split(';')[0];
    const buf = new ArrayBuffer(byteString.length);
    return new Blob([buf], { type: mimeString });
}

function dataUrlToUInt8Array(dataUrl: string): Uint8Array {
    const byteString = atob(dataUrl.split(',')[1]);
    const buf = new ArrayBuffer(byteString.length);
    const arr = new Uint8Array(buf);
    for (let i = 0; i < byteString.length; i++) {
        arr[i] = byteString.charCodeAt(i);
    }
    return arr;
}