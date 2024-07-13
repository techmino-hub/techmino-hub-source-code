import { promises as fs } from 'fs';
import { resolve } from 'path';

/**
 * @api {get} /api/check-article Check if an article exists
 * @apiName CheckArticle
 * @apiGroup Article
 * @apiVersion 1.0.0
 * @apiDescription
 * Checks if a Techmino Hub article exists.
 * The articles are stored in `/public/data/articles/(locale)/`.
 * 
 * @apiParam {String} id The slug/ID of the article to fetch.
 * @apiParam {String} [locale="en"] The locale of the article to fetch.
 * 
 * @apiSuccess {Boolean} exists Whether the article exists or not.
 */
export default defineEventHandler(async (event) => {
    const query = getQuery(event);

    let id = query.id;

    if(!id) {
        throw new Error("Missing required parameter 'id' of type string");
    }
    if(typeof id !== 'string') {
        throw new Error("Invalid parameter 'id': Expected type string");
    }
    if(id.length > 256) {
        throw new Error("Invalid parameter 'id': Exceeds maximum length of 256 characters");
    }
    if(id.includes('..') || id.includes('/') || id.includes('%')) {
        throw new Error("Invalid parameter 'id': Cannot contain '..', '/', or '%'");
    }
    if(!id.endsWith('.html')) {
        id += '.html';
    }

    let locale = 'en';

    if(query.locale) {
        const localeQuery = query.locale;

        if(typeof localeQuery !== 'string') {
            throw new Error("Invalid parameter 'locale': Expected type string");
        }
        if(localeQuery.length > 32) {
            throw new Error("Invalid parameter 'locale': Exceeds maximum length of 32 characters");
        }
        if(localeQuery.includes('..') || localeQuery.includes('/') || localeQuery.includes('%')) {
            throw new Error("Invalid parameter 'locale': Cannot contain '..', '/', or '%'");
        }

        locale = localeQuery;
    }

    const filePath = resolve(`public/data/articles/${locale}/${id}`);

    return await fs.access(filePath)
        .then(() => true)
        .catch(() => false);
});