/** The data type that contains information related to the map */
export type MapData = {
    modes: {
        [name: string]: Mode
    },
    min_x: number, max_x: number,
    min_y: number, max_y: number,
    starting_mode: string
}

function isRecord(candidate: unknown): candidate is Record<string, unknown> {
    return !!(typeof candidate === 'object' && candidate);
}

const mapDataSchema = {
    modes: 'object',
    min_x: 'number',
    max_x: 'number',
    min_y: 'number',
    max_y: 'number',
    starting_mode: 'string'
} as const;

function recordFollowsMapDataSchema(rec: Record<string, unknown>): rec is MapData {
    for(const key of Object.keys(mapDataSchema) as (keyof typeof mapDataSchema)[]) {
        if(!(key in rec) || (typeof rec[key]) !== mapDataSchema[key]) {
            return false;
        }

        if(mapDataSchema[key] === 'object' && !isRecord(rec[key])) {
            return false;
        }
    }

    return true;
}

/**
 * Checks if the given map data is valid.
 * 
 * @param mapData
 * The candidate map data to be validated.
 * 
 * @param strict
 * Whether or not to validate each mode and the map boundary.
 * Increases the time complexity of the function from O(1) to O(n), where n is the number of modes in the map data.
 * 
 * @returns Whether or not the map data is valid
 */
export function isMapDataValid(mapData: unknown, strict: boolean = false): mapData is MapData {
    if(!isRecord(mapData)) return false;
    if(!recordFollowsMapDataSchema(mapData)) return false;

    if(!mapData.modes[mapData.starting_mode]) {
        return false;
    }

    if(mapData.min_x >= mapData.max_x || mapData.min_y >= mapData.max_y) {
        return false;
    }

    if(strict) {
        for(const mode of Object.values(mapData.modes)) {
            if(!isModeValid(mode)) {
                return false;
            }

            if(mode.x < mapData.min_x || mode.x > mapData.max_x || mode.y < mapData.min_y || mode.y > mapData.max_y) {
                return false;
            }
        }
    }

    return true;
}

/** The data type representing a game mode. */
export type Mode = {
    name: string,
    shape: ModeShape,
    unlock: string[],
    size: number,
    x: number, y: number,
    icon: string,
    source: string
}

/**
 * Checks if the given mode is valid.
 * @param mode The candidate mode to be validated.
 * @returns Whether or not the mode is valid.
 */
// @ts-ignore | "`any` type is not allowed"
export function isModeValid(mode: unknown): mode is Mode {
    if(!isRecord(mode)) { return false; }
    
    const schema = {
        name: 'string',
        shape: 'number',
        unlock: 'object',
        size: 'number',
        x: 'number',
        y: 'number',
        icon: 'string',
        source: 'string'
    } as const;

    for(const key of Object.keys(schema) as (keyof typeof schema)[]) {
        if(!(key in mode) || (typeof mode[key]) !== schema[key]) {
            return false;
        }
    }

    return true;
}

export const ModeShape = {
    square: 1,
    diamond: 2,
    octagon: 3
} as const;

export type ModeShape = typeof ModeShape[keyof typeof ModeShape];

export const Rank = {
    Q: 0,
    B: 1,
    A: 2,
    S: 3,
    U: 4,
    X: 5
} as const;

export type Rank = typeof Rank[keyof typeof Rank];


export const modeShapeNames = (() => {
    const names = new Map<ModeShape, string>();

    for(const [key, value] of Object.entries(ModeShape)) {
        names.set(value, key);
    }

    return names as Map<ModeShape, keyof typeof ModeShape>;
})();

export const rankNames = (() => {
    const names = new Map<Rank, string>();

    for(const [key, value] of Object.entries(Rank)) {
        names.set(value, key);
    }

    return names as Map<Rank, keyof typeof Rank>;
})();