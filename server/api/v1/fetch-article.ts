/**
 * @api {get} /api/v1/fetch-article Fetch an article
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
    
    let path: string;

    if(typeof process.env.VERCEL_URL === 'string') {
        path = `https://${process.env.VERCEL_URL}/data/articles/${locale}/${id}`;
    } else if(typeof process.env.URL === 'string') {
        path = `http://${process.env.URL}/data/articles/${locale}/${id}`;
    } else if(event.headers.has('host')) {
        let host = event.headers.get('host')!;

        if(!host.includes(':')) {
            if(process.dev) {
                host += ':3000'; // port for development
            } else {
                host += ':443'; // HTTPS port
            }
        }

        path = `http://${host}/data/articles/${locale}/${id}`;
    } else {
        throw createError({
            statusCode: 500,
            statusMessage: "Failed to determine the base URL. If you are the webmaster, try setting the 'VERCEL_URL' or 'URL' environment variable into something like 'example.com'."
        });
    }

    let text = "";

    try {
        const res = await fetch(path);

        if(!res.ok) {
            throw createError({
                statusCode: res.status,
                statusMessage: res.statusText
            });
        }

        text = await res.text();
    } catch (err) {
        throw createError({
            statusCode: 404,
            statusMessage: `Failed to fetch article '${id}' on locale '${locale}' (did a network error occur?)`,
            message: err as string | undefined
        });
    }
    
    return {
        content: text
    };
});