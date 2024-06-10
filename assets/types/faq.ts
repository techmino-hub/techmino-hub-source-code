// Question tags for FAQ entries. All lowercase, no whitespaces.
export enum Tag {
    Techmino = "techmino",
    TechminoGalaxy = "galaxy",
    Linux = "linux",
    Apple = "apple",
    Multiplayer = "multiplayer",
    Error = "error",
    Bot = "bot",
}

// FAQ entry type.
export type FAQEntry = {
    question: string;
    answerHTML: VNode;
    author: string | undefined;
    tags: Tag[];
}