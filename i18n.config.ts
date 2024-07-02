import markdownit from 'markdown-it';
import sanitizeHtml from 'sanitize-html';
import { type LangEntry, MD_STRING_PREFIX } from '~/assets/types/lang';

import * as langEN from '~/assets/lang/en';
import * as langID from '~/assets/lang/id';

export const md = markdownit({
    html: false
});

export const htmlSanitizerOptions = {
    allowedTags: [
        "address", "article", "aside", "footer", "header", "h1", "h2", "h3", "h4",
        "h5", "h6", "hgroup", "main", "nav", "section", "blockquote", "dd", "div",
        "dl", "dt", "figcaption", "figure", "hr", "li", "main", "ol", "p", "pre",
        "ul", "a", "abbr", "b", "bdi", "bdo", "br", "cite", "code", "data", "dfn",
        "em", "i", "img", "kbd", "mark", "q", "rb", "rp", "rt", "rtc", "ruby", "s", "samp",
        "small", "span", "strong", "sub", "sup", "time", "u", "var", "wbr", "caption",
        "col", "colgroup", "table", "tbody", "td", "tfoot", "th", "thead", "tr"
    ],
    allowedAttributes: {
        a: [ 'href', 'name', 'target' ],
        img: [ 'src', 'srcset', 'alt', 'title', 'width', 'height', 'loading' ],
        td: [ 'rowspan', 'colspan' ]
    },
}

function renderString(entry: string): string {
    if(entry.startsWith(MD_STRING_PREFIX)) {
        return md.render(entry.substring(MD_STRING_PREFIX.length));
    } else {
        return sanitizeHtml(entry, htmlSanitizerOptions);
    }
}

function processLangEntry(entries: LangEntry): LangEntry {
    const newEntries: LangEntry = {};
    
    for(const key in entries) {
        let entry = entries[key];
        
        if(typeof entry === 'string') {
            newEntries[key] = renderString(entry);
        } else {
            newEntries[key] = processLangEntry(entry as LangEntry);
        }
    }
    
    return newEntries;
}

export default defineI18nConfig(() => ({
    missingWarn: true,
    legacy: false,
    locale: 'en',
    fallbackLocale: 'en',
    warnHtmlMessage: false,
    warnHtmlInMessage: 'off',
    messages: {
        en: processLangEntry(langEN.default),
        id: processLangEntry(langID.default),
    },
}));