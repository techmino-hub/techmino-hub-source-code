import markdownit from 'markdown-it';
import type { LangEntriesType } from '~/assets/types/lang';

import * as langEN from '~/assets/lang/en';
import * as langID from '~/assets/lang/id';


const md = markdownit();

function mdToHTML(entries: LangEntriesType): LangEntriesType {
  for (let key in entries) {
    if (typeof entries[key] === 'object') {
      mdToHTML(entries[key]);
    } else {
      entries[key] = md.render(entries[key]);
    }
  }

  return entries;
}

// Nuxt.js i18n module configuration
export default defineI18nConfig(() => ({
    legacy: false,
    locale: 'en',
    fallbackLocale: 'en',
    messages: {
        en: mdToHTML(langEN.default),
        id: mdToHTML(langID.default),
    },
}));