export type LangEntry = {
    [key: string]: string | LangEntry
};

// The prefix of a string if it should be processed in Markdown
export const MD_STRING_PREFIX = "md_";

export const langNameMap = {
    en: "English",
    id: "Bahasa Indonesia"
} as { [index: string]: string | undefined };