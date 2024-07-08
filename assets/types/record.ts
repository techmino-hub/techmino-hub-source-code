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
     * It should follow (Postgres)SQL's `ORDER BY` syntax,
     * where `score` is the `jsonb` field that stores
     * the records described by the schema.
     */
    order: string,
}


export const RECORD_SCHEMAS = {
    attacker_h: {
        entries: {
            0: {
                name: 'wave',
                type: 'number'
            },
            1: {
                name: 'time',
                type: 'number'
            },
            date: {
                name: 'date',
                type: 'string'
            }
        },
        
        order: 'score->>0 DESC, score->>1 ASC, score->>date ASC'
    },
    attacker_u: {
        entries: {
            0: {
                name: 'wave',
                type: 'number'
            },
            1: {
                name: 'time',
                type: 'number'
            },
            date: {
                name: 'date',
                type: 'string'
            }
        },

        order: 'score->>0 DESC, score->>1 ASC, score->>date ASC'
    }
} as {
    [modeID: string]: RecordSchema
}