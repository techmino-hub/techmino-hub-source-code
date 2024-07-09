/**
 * One of the fields in a record schema.
 */
export type RecordSchemaEntry = {
    /**
     * A description of the field,
     * used for translating the field
     * for i18n.  
     * 
     * It does not need to be the same as
     * the field name in the record file;
     * it just has to be descriptive.
     */
    name: string,
    type: "string" | "number" | "boolean" | "array" | "object",
}

/**
 * A description of how the records should be ordered.
 */
export type TableOrder = {
    column: string,
    options?: {
        nullsFirst?: boolean,
        referencedTable?: string,
        ascending?: boolean,
    }
}

/**
 * The schema of a record file.
 */
export type RecordSchema = {
    /**
     * The entries of the record schema.
     * 
     * In other words, the description of
     * the fields you see in Techmino's `.rec` files.  
     * 
     * The index of the entries should be the same as the
     * index of the fields in the record file.
     */
    entries: {
        [index: string]: RecordSchemaEntry
    },
    
    /**
     * A description of how the records are ordered.  
     * It sorts it based on the first TableOrder,
     * then the second if the first is equal, and so on.
     */
    order: TableOrder[],
}