/** Language entry type. */
export type LangEntry = {
    [key: string]: string | string[] | ((...args: any) => string) | LangEntry
};

/** The prefix of a string if it should be processed in Markdown */
export const MD_STRING_PREFIX = "md_";

/** A map from a language ID to its name in that language. */
export const langNameMap = {
    en: "English",
    id: "Bahasa Indonesia",
} as { [index: string]: string | undefined };