/** The data type that contains information related to the map */
export type MapData = {
    modes: {
        [name: string]: Mode
    },
    min_x: number, max_x: number,
    min_y: number, max_y: number,
    starting_mode: string
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
export function isMapDataValid(mapData: any, strict: boolean = false): mapData is MapData {
    if(!mapData || typeof mapData !== 'object') { return false; }
    
    const schema = {
        modes: 'object',
        min_x: 'number',
        max_x: 'number',
        min_y: 'number',
        max_y: 'number',
        starting_mode: 'string'
    } as const;

    for(const key in schema) {
        if(!(key in mapData) || (typeof mapData[key]) !== schema[key]) {
            return false;
        }
    }

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
export function isModeValid(mode: any): mode is Mode {
    if(!mode || typeof mode !== 'object') { return false; }
    
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

    for(const key in schema) {
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