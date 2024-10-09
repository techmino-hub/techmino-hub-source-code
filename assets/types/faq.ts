/** Question tags for FAQ entries. All lowercase, no whitespaces. */
export const Tag = {
    Techmino: "techmino",
    TechminoGalaxy: "galaxy",
    Linux: "linux",
    Apple: "apple",
    Multiplayer: "multiplayer",
    Error: "error",
    Bot: "bot",
} as const;

export type Tag = typeof Tag[keyof typeof Tag];

export const FilterMode = {
    exclude: 'exclude',
    all: 'all',
    include: 'include',
} as const;

export type FilterMode = typeof FilterMode[keyof typeof FilterMode];

/**
 * FAQ entry type.
 * To get the FAQ content, use the questionID to index into the $t (translate) function.
 * 
 * @example
 * const questionID = "what-is-techmino";
 * const question = $t(`faq.${questionID}.question`);
 * const answer = $t(`faq.${questionID}.answer`);
 */
export type FAQEntry = {
    id: string;
    tags: Tag[];
}