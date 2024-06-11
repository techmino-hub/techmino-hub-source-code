import markdownit from 'markdown-it';
import type { LangEntriesType } from '~/assets/types/lang';

import * as langEN from '~/assets/lang/en';
import * as langID from '~/assets/lang/id';


const md = markdownit();

function mdToHTML(entries: LangEntriesType): LangEntriesType {
  const newEntries: LangEntriesType = {};

  for(const key in entries) {
    const entry = entries[key];

    if(typeof entry === 'string') {
        newEntries[key] = md.render(entry);
    } else {
        newEntries[key] = mdToHTML(entry);
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
        en: mdToHTML(langEN.default),
        id: mdToHTML(langID.default),
    },
}));