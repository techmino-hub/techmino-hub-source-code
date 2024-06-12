import markdownit from 'markdown-it';
import { type LangEntry, MD_STRING_PREFIX } from '~/assets/types/lang';

import * as langEN from '~/assets/lang/en';
import * as langID from '~/assets/lang/id';


const md = markdownit();

function renderString(entry: string): string {
    if(entry.startsWith(MD_STRING_PREFIX)) {
        return md.render(entry.substring(MD_STRING_PREFIX.length));
    } else {
        return entry;
    }
}

function processLangEntry(entries: LangEntry): LangEntry {
    const newEntries: LangEntry = {};
    
    for(const key in entries) {
        let entry = entries[key];
        
        if(typeof entry === 'string') {
            newEntries[key] = renderString(entry);
        } else {
            newEntries[key] = processLangEntry(entry);
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