import { md, htmlSanitizerOptions } from "~/i18n.config";
import sanitizeHtml from 'sanitize-html';

/**
 * Gets an article as an HTML string.
 * Note: only works in client-side.
 * @param name
 * The name of the article.
 * 
 * @param locale
 * The locale of the article.
 * In `<script>`s, you should pass in `useI18n().locale`.
 * In Vue components, you should pass in `$i18n.locale`.
 * 
 * @returns
 * The article as an HTML string.
 * If the article is unavailable or missing, this function returns null.
 */
export async function getArticle(name: string, locale: string): Promise<string | null> {
    const [mdResult, htmlResult] = await Promise.allSettled([
        fetch(`/data/articles/${locale}/${name}.md`),
        fetch(`/data/articles/${locale}/${name}.html`)
    ]);

    if(mdResult.status === 'fulfilled' && mdResult.value.ok) {
        const text = await mdResult.value.text();
        return md.render(text);
    }

    if(htmlResult.status === 'fulfilled' && htmlResult.value.ok) {
        const dirtyHTML = await htmlResult.value.text();
        return sanitizeHtml(dirtyHTML, htmlSanitizerOptions);
    }

    return null;
}

/**
 * Gets an article as an HTML element.  
 * Note: only works in client-side.
 * @param name The name of the article.
 * @param locale The locale of the string.
 * @param wrapper
 * The element to wrap the article in.  
 * Defaults to 'article', meaning the article will be wrapped in `<article>` tags.
 * @returns The article as an HTML element. Null if the article is unavailable or if `document` is unavailable.
 */
export async function getArticleElement(name: string, locale: string, wrapper = 'article'): Promise<HTMLElement | null> {
    if(!document) return null;

    const articleHTMLText = await getArticle(name, locale);

    if(!articleHTMLText) return null;

    const element = document.createElement(wrapper);
    element.innerHTML = articleHTMLText;

    return element;
}