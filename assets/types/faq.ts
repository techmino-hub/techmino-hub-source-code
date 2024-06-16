/** Question tags for FAQ entries. All lowercase, no whitespaces. */
export enum Tag {
    Techmino = "techmino",
    TechminoGalaxy = "galaxy",
    Linux = "linux",
    Apple = "apple",
    Multiplayer = "multiplayer",
    Error = "error",
    Bot = "bot",
}


export enum FilterMode {
    exclude = 'exclude',
    all = 'all',
    include = 'include',
}

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
    author: string;
    tags: Tag[];
}