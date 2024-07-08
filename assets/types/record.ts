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

const survivorSchema: RecordSchema = {
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
};

const backfireSchema: RecordSchema = {
    entries: {
        0: {
            name: 'attack',
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
};

const c4wSchema: RecordSchema = {
    entries: {
        0: {
            name: 'combo',
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
};

const classicSchema: RecordSchema = {
    entries: {
        0: {
            name: 'score',
            type: 'number'
        },
        1: {
            name: 'lines',
            type: 'number'
        },
        date: {
            name: 'date',
            type: 'string'
        }
    },

    order: 'score->>0 DESC, score->>1 DESC, score->>date ASC'
};

const constructSchema: RecordSchema = {
    entries: {
        0: {
            name: 'height',
            type: 'number'
        },
        1: {
            name: 'pieces',
            type: 'number'
        },
        date: {
            name: 'date',
            type: 'string'
        }
    },

    order: 'score->>0 DESC, score->>1 ASC, score->>date ASC'
};

const marathonSchema: RecordSchema = {
    entries: {
        0: {
            name: 'lines',
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
};

const sprintSchema: RecordSchema = {
    entries: {
        0: {
            name: 'lines',
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
    
    // better lines, then better time, then earlier date
    order: 'score->>0 DESC, score->>1 ASC, score->>date ASC'
};

export const RECORD_SCHEMAS = {
    attacker_h: survivorSchema,
    attacker_u: survivorSchema,
    backfire_n: backfireSchema,
    backfire_h: backfireSchema,
    backfire_l: backfireSchema,
    backfire_u: backfireSchema,
    big_n: marathonSchema,
    big_h: marathonSchema,
    blind_e: marathonSchema,
    blind_n: marathonSchema,
    blind_h: marathonSchema,
    blind_l: marathonSchema,
    blind_u: marathonSchema,
    blind_wtf: marathonSchema,
    c4wtrain_n: c4wSchema,
    c4wtrain_l: c4wSchema,
    classic_e: classicSchema,
    classic_n: classicSchema,
    classic_h: classicSchema,
    classic_l: classicSchema,
    classic_u: classicSchema,
    classic_fast: classicSchema,
    construct_sg: constructSchema,
    construct_checker: constructSchema,
    construct_invsg: constructSchema,
    defender_n: survivorSchema,
    defender_l: survivorSchema,
} as {
    [modeID: string]: RecordSchema
};

export default RECORD_SCHEMAS;