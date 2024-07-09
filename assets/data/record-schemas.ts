import type { RecordSchema } from "~/assets/types/record";

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
    },
    
    order: [
        {
            column: 'score->>0',
            options: {
                ascending: false
            }
        },
        {
            column: 'score->>1',
            options: {
                ascending: true
            }
        },
        {
            column: 'score->>date',
            options: {
                ascending: true
            }
        }
    ]
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
    },

    order: [
        {
            column: 'score->>0',
            options: {
                ascending: false
            }
        },
        {
            column: 'score->>1',
            options: {
                ascending: true
            }
        },
        {
            column: 'score->>date',
            options: {
                ascending: true
            }
        }
    ]
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
    },

    order: [
        {
            column: 'score->>0',
            options: {
                ascending: false
            }
        },
        {
            column: 'score->>1',
            options: {
                ascending: false
            }
        },
        {
            column: 'score->>date',
            options: {
                ascending: true
            }
        }
    ]
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
    },

    order: [
        {
            column: 'score->>0',
            options: {
                ascending: false
            }
        },
        {
            column: 'score->>1',
            options: {
                ascending: true
            }
        },
        {
            column: 'score->>date',
            options: {
                ascending: true
            }
        }
    ]
};

const digSchema: RecordSchema = {
    entries: {
        0: {
            name: 'lines',
            type: 'number'
        },
        1: {
            name: 'time',
            type: 'number'
        },
    },
    
    order: [
        {
            column: 'score->>0',
            options: {
                ascending: false
            }
        },
        {
            column: 'score->>1',
            options: {
                ascending: true
            }
        },
        {
            column: 'score->>date',
            options: {
                ascending: true
            }
        }
    ]
};

const digEffSchema: RecordSchema = {
    entries: {
        0: {
            name: 'pieces',
            type: 'number'
        },
        1: {
            name: 'time',
            type: 'number'
        },
    },

    order: [
        {
            column: 'score->>0',
            options: {
                ascending: true
            }
        },
        {
            column: 'score->>1',
            options: {
                ascending: true
            }
        },
        {
            column: 'score->>date',
            options: {
                ascending: true
            }
        }
    ]
};

const digQuadSchema: RecordSchema = {
    entries: {
        0: {
            name: 'dig_quad',
            type: 'number'
        },
        1: {
            name: 'time',
            type: 'number'
        },
    },

    order: [
        {
            column: 'score->>0',
            options: {
                ascending: false
            }
        },
        {
            column: 'score->>1',
            options: {
                ascending: true
            }
        },
        {
            column: 'score->>date',
            options: {
                ascending: false
            }
        }
    ]
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
    },

    order: [
        {
            column: 'score->>0',
            options: {
                ascending: false
            }
        },
        {
            column: 'score->>1',
            options: {
                ascending: true
            }
        },
        {
            column: 'score->>date',
            options: {
                ascending: true
            }
        }
    ]
};

const marathonInfSchema: RecordSchema = {
    entries: {
        0: {
            name: 'score',
            type: 'number'
        },
        1: {
            name: 'lines',
            type: 'number'
        },
        2: {
            name: 'time',
            type: 'number'
        },
    },

    order: [
        {
            column: 'score->>0',
            options: {
                ascending: false
            }
        },
        {
            column: 'score->>1',
            options: {
                ascending: false
            }
        },
        {
            column: 'score->>2',
            options: {
                ascending: true
            }
        },
        {
            column: 'score->>date',
            options: {
                ascending: true
            }
        }
    ]
};

const masterSchema: RecordSchema = {
    entries: {
        0: {
            name: 'masterLevel',
            type: 'number'
        },
        1: {
            name: 'time',
            type: 'number'
        },
    },

    order: [
        {
            column: 'score->>0',
            options: {
                ascending: false
            }
        },
        {
            column: 'score->>1',
            options: {
                ascending: true
            }
        },
        {
            column: 'score->>date',
            options: {
                ascending: true
            }
        }
    ]
};

const masterExSchema: RecordSchema = {
    entries: {
        0: {
            name: 'masterExGrade',
            type: 'number'
        },
        1: {
            name: 'score',
            type: 'number'
        },
    },

    order: [
        {
            column: 'score->>0',
            options: {
                ascending: false
            }
        },
        {
            column: 'score->>1',
            options: {
                ascending: false
            }
        },
        {
            column: 'score->>date',
            options: {
                ascending: true
            }
        }
    ]
};

const masterGradedSchema: RecordSchema = {
    entries: {
        0: {
            name: 'masterGGrade',
            type: 'number'
        },
        1: {
            name: 'time',
            type: 'number'
        },
    },

    order: [
        {
            column: 'score->>0',
            options: {
                ascending: false
            }
        },
        {
            column: 'score->>1',
            options: {
                ascending: true
            }
        },
        {
            column: 'score->>date',
            options: {
                ascending: true
            }
        }
    ]
};

const masterMSchema: RecordSchema = {
    entries: {
        0: {
            name: 'lines',
            type: 'number'
        },
        1: {
            name: 'time',
            type: 'number'
        },
    },

    order: [
        {
            column: 'score->>0',
            options: {
                ascending: false
            }
        },
        {
            column: 'score->>1',
            options: {
                ascending: true
            }
        },
        {
            column: 'score->>date',
            options: {
                ascending: true
            }
        }
    ]
};

const masterPhSchema: RecordSchema = {
    entries: {
        0: {
            name: 'masterPhPoints',
            type: 'number'
        },
        1: {
            name: 'time',
            type: 'number'
        },
    },

    order: [
        {
            column: 'score->>0',
            options: {
                ascending: false
            }
        },
        {
            column: 'score->>1',
            options: {
                ascending: true
            }
        },
        {
            column: 'score->>date',
            options: {
                ascending: true
            }
        }
    ]
};

const pcSchema: RecordSchema = {
    entries: {
        0: {
            name: 'pc',
            type: 'number'
        },
        1: {
            name: 'time',
            type: 'number'
        },
    },

    order: [
        {
            column: 'score->>0',
            options: {
                ascending: false
            }
        },
        {
            column: 'score->>1',
            options: {
                ascending: true
            }
        },
        {
            column: 'score->>date',
            options: {
                ascending: true
            }
        }
    ]
};

const scoreSchema: RecordSchema = {
    entries: {
        0: {
            name: 'score',
            type: 'number'
        },
    },

    order: [
        {
            column: 'score->>0',
            options: {
                ascending: false
            }
        },
        {
            column: 'score->>date',
            options: {
                ascending: true
            }
        }
    ]
};

const soloSchema: RecordSchema = {
    entries: {
        0: {
            name: 'time',
            type: 'number'
        },
    },

    order: [
        {
            column: 'score->>0',
            options: {
                ascending: true
            }
        },
        {
            column: 'score->>date',
            options: {
                ascending: true
            }
        }
    ]
};

const sprintSchema: RecordSchema = {
    entries: {
        0: {
            name: 'time',
            type: 'number'
        },
        1: {
            name: 'pieces',
            type: 'number'
        },
    },

    order: [
        {
            column: 'score->>0',
            options: {
                ascending: true
            }
        },
        {
            column: 'score->>1',
            options: {
                ascending: true
            }
        },
        {
            column: 'score->>date',
            options: {
                ascending: true
            }
        }
    ]
};

const sprintAtkSchema: RecordSchema = {
    entries: {
        0: {
            name: 'attack',
            type: 'number'
        },
        1: {
            name: 'time',
            type: 'number'
        },
    },
    
    order: [
        {
            column: 'score->>0',
            options: {
                ascending: false
            }
        },
        {
            column: 'score->>1',
            options: {
                ascending: true
            }
        },
        {
            column: 'score->>date',
            options: {
                ascending: true
            }
        }
    ]
};

const sprintEffSchema: RecordSchema = {
    entries: {
        0: {
            name: 'efficiency',
            type: 'number'
        },
        1: {
            name: 'time',
            type: 'number'
        },
    },

    order: [
        {
            column: 'score->>0',
            options: {
                ascending: false
            }
        },
        {
            column: 'score->>1',
            options: {
                ascending: true
            }
        },
        {
            column: 'score->>date',
            options: {
                ascending: true
            }
        }
    ]
};

const stackV1Schema: RecordSchema = {
    entries: {
        0: {
            name: 'pieces',
            type: 'number'
        },
        1: {
            name: 'time',
            type: 'number'
        },
    },

    order: [
        {
            column: 'score->>0',
            options: {
                ascending: true
            }
        },
        {
            column: 'score->>1',
            options: {
                ascending: true
            }
        },
        {
            column: 'score->>date',
            options: {
                ascending: true
            }
        }
    ]
};

const stackV2Schema: RecordSchema = {
    entries: {
        0: {
            name: 'holes',
            type: 'number'
        },
        1: {
            name: 'time',
            type: 'number'
        },
    },

    order: [
        {
            column: 'score->>0',
            options: {
                ascending: true
            }
        },
        {
            column: 'score->>1',
            options: {
                ascending: true
            }
        },
        {
            column: 'score->>date',
            options: {
                ascending: true
            }
        }
    ]
};

const stackV3Schema: RecordSchema = {
    entries: {
        0: {
            name: 'lines',
            type: 'number'
        },
        1: {
            name: 'time',
            type: 'number'
        },
    },

    order: [
        {
            column: 'score->>0',
            options: {
                ascending: false
            }
        },
        {
            column: 'score->>1',
            options: {
                ascending: true
            }
        },
        {
            column: 'score->>date',
            options: {
                ascending: true
            }
        }
    ]
};


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
    },
    
    order: [
        {
            column: 'score->>0',
            options: {
                ascending: false
            }
        },
        {
            column: 'score->>1',
            options: {
                ascending: true
            }
        },
        {
            column: 'score->>date',
            options: {
                ascending: true
            }
        }
    ]
};

const techVersusSchema: RecordSchema = {
    entries: {
        0: {
            name: 'placement',
            type: 'number'
        },
        1: {
            name: 'ko',
            type: 'number'
        },
    },

    order: [
        {
            column: 'score->>0',
            options: {
                ascending: false
            }
        },
        {
            column: 'score->>1',
            options: {
                ascending: false
            }
        },
        {
            column: 'score->>date',
            options: {
                ascending: true
            }
        }
    ]
};

const tsdSchema: RecordSchema = {
    entries: {
        0: {
            name: 'tsd',
            type: 'number'
        },
        1: {
            name: 'time',
            type: 'number'
        },
    },

    order: [
        {
            column: 'score->>0',
            options: {
                ascending: false
            }
        },
        {
            column: 'score->>1',
            options: {
                ascending: true
            }
        },
        {
            column: 'score->>date',
            options: {
                ascending: true
            }
        }
    ]
};

const turnBasedSchema: RecordSchema = {
    entries: {
        0: {
            name: 'pieces',
            type: 'number'
        },
        1: {
            name: 'time',
            type: 'number'
        },
    },

    order: [
        {
            column: 'score->>0',
            options: {
                ascending: true
            }
        },
        {
            column: 'score->>1',
            options: {
                ascending: true
            }
        },
        {
            column: 'score->>date',
            options: {
                ascending: true
            }
        }
    ]
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
    dig_10l: digSchema,
    dig_40l: digSchema,
    dig_100l: digSchema,
    dig_400l: digSchema,
    dig_eff_10l: digEffSchema,
    dig_eff_40l: digEffSchema,
    dig_eff_100l: digEffSchema,
    dig_eff_400l: digEffSchema,
    dig_quad_10l: digQuadSchema,
    dig_h: survivorSchema,
    dig_u: survivorSchema,
    drought_n: marathonSchema,
    drought_l: marathonSchema,
    marathon_bfmax: marathonSchema,
    marathon_n: marathonSchema,
    marathon_h: marathonSchema,
    marathon_inf: marathonInfSchema,
    master_ex: masterExSchema,
    master_final: masterSchema,
    master_g: masterGradedSchema,
    master_g_modern: masterGradedSchema,
    master_h: masterSchema,
    master_instinct: masterSchema,
    master_m: masterMSchema,
    master_n: masterSchema,
    master_ph: masterPhSchema,
    pc_n: pcSchema,
    pc_h: pcSchema,
    pc_l: pcSchema,
    pctrain_n: pcSchema,
    pctrain_l: pcSchema,
    rhythm_e: marathonSchema,
    rhythm_h: marathonSchema,
    rhythm_u: marathonSchema,
    round_e: turnBasedSchema,
    round_n: turnBasedSchema,
    round_h: turnBasedSchema,
    round_l: turnBasedSchema,
    round_u: turnBasedSchema,
    solo_e: soloSchema,
    solo_n: soloSchema,
    solo_h: soloSchema,
    solo_l: soloSchema,
    solo_u: soloSchema,
    sprint_10l: sprintSchema,
    sprint_20l: sprintSchema,
    sprint_40l: sprintSchema,
    sprint_100l: sprintSchema,
    sprint_400l: sprintSchema,
    sprint_1000l: sprintSchema,
    sprint123: sprintSchema,
    sprintAtk: sprintAtkSchema,
    sprintEff: sprintEffSchema,
    sprintMPH: sprintSchema,
    sprintPenta: sprintSchema,
    sprintLock: sprintSchema,
    sprintSym: sprintSchema,
    sprintFix: sprintSchema,
    sprintMD: sprintSchema,
    sprintSmooth: sprintSchema,
    stack_v1_20l: stackV1Schema,
    stack_v1_40l: stackV1Schema,
    stack_v1_100l: stackV1Schema,
    stack_v2_e: stackV2Schema,
    stack_v2_h: stackV2Schema,
    stack_v2_u: stackV2Schema,
    stack_v3_e: stackV3Schema,
    stack_v3_h: stackV3Schema,
    stack_v3_u: stackV3Schema,
    stack_v4_e: stackV3Schema,
    stack_v4_u: stackV3Schema,
    stack_v5_e: stackV3Schema,
    stack_v5_u: stackV3Schema,
    strategy_e: marathonSchema,
    strategy_h: marathonSchema,
    strategy_u: marathonSchema,
    strategy_e_plus: marathonSchema,
    strategy_h_plus: marathonSchema,
    strategy_u_plus: marathonSchema,
    survivor_e: survivorSchema,
    survivor_n: survivorSchema,
    survivor_h: survivorSchema,
    survivor_l: survivorSchema,
    survivor_u: survivorSchema,
    tech_n: sprintAtkSchema,
    tech_h: sprintAtkSchema,
    tech_l: sprintAtkSchema,
    tech_n_plus: sprintAtkSchema,
    tech_h_plus: sprintAtkSchema,
    tech_l_plus: sprintAtkSchema,
    tech_finesse: sprintAtkSchema,
    tech_finesse_f: sprintAtkSchema,
    tech_finesse_lock: sprintAtkSchema,
    tech_finesse_lock_f: sprintAtkSchema,
    techmino49_e: techVersusSchema,
    techmino49_h: techVersusSchema,
    techmino49_u: techVersusSchema,
    techmino99_e: techVersusSchema,
    techmino99_h: techVersusSchema,
    techmino99_u: techVersusSchema,
    tsd_e: tsdSchema,
    tsd_h: tsdSchema,
    tsd_u: tsdSchema,
    ultra: scoreSchema,
    zen: scoreSchema,

    // hidden/expansion modes
    techrash_n: marathonSchema,
    techrash_u: marathonSchema,
    master_death: masterSchema,
    master_phantom: masterSchema,

    // techmino wtf modes
    sprint_40l_math: sprintSchema,
    wtf: {
        entries: {
            0: {
                name: 'wtfRank',
                type: 'number'
            },
        },

        order: [
            {
                column: 'score->>0',
                options: {
                    ascending: false
                }
            },
            {
                column: 'score->>date',
                options: {
                    ascending: true
                }
            }
        ]
    },
    lockout: {
        entries: {
            0: {
                name: 'time',
                type: 'number'
            },
        },

        order: [
            {
                column: 'score->>0',
                options: {
                    ascending: true
                }
            },
            {
                column: 'score->>date',
                options: {
                    ascending: true
                }
            }
        ]
    },
    round_wtf: turnBasedSchema,
    scanner_l: {
        entries: {
            0: {
                name: 'time',
                type: 'number'
            },
        },

        order: [
            {
                column: 'score->>0',
                options: {
                    ascending: true
                }
            },
            {
                column: 'score->>date',
                options: {
                    ascending: true
                }
            }
        ]
    },
    solo_wtf: {
        entries: {
            0: {
                name: 'attack',
                type: 'number'
            },
        },

        order: [
            {
                column: 'score->>0',
                options: {
                    ascending: false
                }
            },
            {
                column: 'score->>date',
                options: {
                    ascending: true
                }
            }
        ]
    },
    backfire_wtf: backfireSchema,
    stack_wtf: {
        entries: {
            0: {
                name: 'lines',
                type: 'number'
            },
        },

        order: [
            {
                column: 'score->>0',
                options: {
                    ascending: false
                }
            },
            {
                column: 'score->>date',
                options: {
                    ascending: true
                }
            }
        ]
    },
} as {
    [modeID: string]: RecordSchema
};

export default RECORD_SCHEMAS;