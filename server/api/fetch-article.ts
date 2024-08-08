import { promises as fs } from 'fs';
import { resolve } from 'path';

/**
 * @api {get} /api/fetch-article Fetch an article
 * @apiName FetchArticle
 * @apiGroup Article
 * @apiVersion 1.0.0
 * @apiDescription
 * Fetches an article hosted by Techmino Hub.  
 * The articles are stored in `/public/data/articles/(locale)/`.
 * 
 * @apiParam {String} id The slug/ID of the article to fetch.
 * @apiParam {String} [locale="en"] The locale of the article to fetch.
 * 
 * @apiSuccess {String} content The HTML content of the article.
 */
export default defineEventHandler(async (event) => {
    const query = getQuery(event);

    let id = query.id;

    if(!id) {
        throw createError({
            statusCode: 400,
            statusMessage: "Missing required parameter 'id' of type string"
        })
    }
    if(typeof id !== 'string') {
        throw createError({
            statusCode: 400,
            statusMessage: "Invalid parameter 'id': Expected type string"
        });
    }
    if(id.length > 256) {
        throw createError({
            statusCode: 400,
            statusMessage: "Invalid parameter 'id': Exceeds maximum length of 256 characters"
        });
    }
    if(id.includes('..') || id.includes('/') || id.includes('%')) {
        throw createError({
            statusCode: 400,
            statusMessage: "Invalid parameter 'id': Cannot contain '..', '/', or '%'"
        });
    }
    if(!id.endsWith('.html')) {
        id += '.html';
    }

    let locale = 'en';

    if(query.locale) {
        const localeQuery = query.locale;

        if(typeof localeQuery !== 'string') {
            throw createError({
                statusCode: 400,
                statusMessage: "Invalid parameter 'locale': Expected type string"
            });
        }
        if(localeQuery.length > 32) {
            throw createError({
                statusCode: 400,
                statusMessage: "Invalid parameter 'locale': Exceeds maximum length of 32 characters"
            });
        }
        if(localeQuery.includes('..') || localeQuery.includes('/') || localeQuery.includes('%')) {
            throw createError({
                statusCode: 400,
                statusMessage: "Invalid parameter 'locale': Cannot contain '..', '/', or '%'"
            });
        }

        locale = localeQuery;
    }

    const filePath = resolve(`public/data/articles/${locale}/${id}`);

    if(!await fs.access(filePath).then(() => true).catch(() => false)) {
        throw createError({
            statusCode: 404,
            statusMessage: `Article '${id}' on locale '${locale}' not found`
        });
    }

    return {
        content: await fs.readFile(filePath, 'utf-8')
    };
});