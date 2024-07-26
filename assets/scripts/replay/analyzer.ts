import { type GameReplayData, InputEventType, InputKey } from "~/assets/types/replay";

/**
 * Represents the distribution of keypress durations in a replay.
 * The key is the key that was pressed, and the value is a frequency table of keypress durations,  
 * where its key is the duration of the keypress in frames, and its value is the number of keypresses with that duration.
 * The frequency table also has additional entries about the keypresses.
 */
export type KeyDurationStats = {
    [key in InputKey]: {
        /** The amount of times a key was pressed for a certain duration, in frames. */
        durations: {
            [duration: number]: number | undefined;
        }

        /** The total amount of times this key was pressed. */
        presses: number;

        /** The shortest recorded keypress duration for this key, in frames. */
        min: number;

        /** The 25th percentile of keypress durations for this key, in frames. */
        percentile25: number;

        /** The 75th percentile of keypress durations for this key, in frames. */
        percentile75: number;

        /** The longest recorded keypress duration for this key, in frames. */
        max: number;

        /** The total amount of time this key was held down for, in frames. */
        totalDuration: number;

        /** The median keypress duration for this key, in frames. */
        median: number;

        /** The standard deviation of keypress durations for this key, in frames. */
        standardDeviation: number;
    };
};

function getEmptyKeyDurationStats(): KeyDurationStats {
    let partial: Partial<KeyDurationStats> = {};

    for(const key of Object.values(InputKey) as InputKey[]) {
        partial[key] = {
            durations: {},
            presses: 0,
            min: Infinity,
            percentile25: 0,
            totalDuration: 0,
            percentile75: 0,
            max: -1,
            median: 0,
            standardDeviation: 0
        };
    }

    return partial as KeyDurationStats;
}

/**
 * Gets the distribution of the duration of keypresses in a replay.
 * @param replayData The replay data to analyze.
 * @returns
 * The distribution of keypress durations.  
 * This is a frequency table; the key is the duration of the keypress in frames, and the value is the number of keypresses with that duration.
 */
export function getReplayKeyDurationStats(
    replayData: GameReplayData
): KeyDurationStats {
    let keyDurationStats = getEmptyKeyDurationStats();
    let timeOfPreviousPress: { [key in InputKey]: number } = {} as any;

    for(const key of Object.values(InputKey) as InputKey[]) {
        timeOfPreviousPress[key] = 0;
    }

    for(const input of replayData.inputs) {
        const key = input.key;

        if(input.type === InputEventType.Press) {
            timeOfPreviousPress[key] = input.frame;
        } else {
            const duration = input.frame - timeOfPreviousPress[key];
            if(duration < 0) continue;

            keyDurationStats[key].durations[duration] = (keyDurationStats[key].durations[duration] ?? 0) + 1;
            keyDurationStats[key].presses++;
            keyDurationStats[key].min = Math.min(keyDurationStats[key].min, duration);
            keyDurationStats[key].max = Math.max(keyDurationStats[key].max, duration);
            keyDurationStats[key].totalDuration += duration;
        }
    }

    // Process inputs for additional statistics
    for(const key of Object.values(InputKey) as InputKey[]) {
        // Calculate the 25th, 50th (median), and 75th percentiles
        {
            const durations = Object.keys(keyDurationStats[key]) as unknown as number[];

            if(durations.length === 0) continue;

            durations.sort((a, b) => a - b);

            const totalPresses = keyDurationStats[key].presses;
            const percentile25Index = Math.floor(totalPresses * 0.25);
            const percentile75Index = Math.floor(totalPresses * 0.75);
            let currentPressIndex = 0;

            for(const duration of durations) {
                currentPressIndex += keyDurationStats[key].durations[duration] ?? 0;

                if(currentPressIndex >= percentile25Index) {
                    keyDurationStats[key].percentile25 = duration;
                }

                if(currentPressIndex >= percentile75Index) {
                    keyDurationStats[key].percentile75 = duration;
                    break;
                }
            }

            keyDurationStats[key].median = durations[Math.floor(durations.length / 2)];
        }

        // Calculate the standard deviation
        {
            const durations = Object.keys(keyDurationStats[key]) as unknown as number[];

            if(durations.length === 0) continue;

            const mean = keyDurationStats[key].totalDuration / keyDurationStats[key].presses;
            let variance = 0;

            for(const duration of durations) {
                variance += ((duration - mean) ** 2) * (keyDurationStats[key].durations[duration] ?? 0);
            }

            keyDurationStats[key].standardDeviation = Math.sqrt(variance / keyDurationStats[key].presses);
        }
    }

    return keyDurationStats;
}

/**
 * Get the length of a replay in frames.
 * @param replayData The replay data to analyze.
 * @returns The length of the replay in frames.
 */
export function getReplayLength(replayData: GameReplayData) {
    let lengthFrames = 0;

    for(const input of replayData.inputs) {
        lengthFrames = Math.max(lengthFrames, input.frame);
    }

    return lengthFrames;
}

/**
 * Get the average keypresses per second (KPS) of a replay.
 * @param replayData The replay data to analyze.
 * @returns The average KPS of the replay.
 */
export function getReplayKps(replayData: GameReplayData) {
    let keyPresses = 0;
    let lengthFrames = 0;

    for(const input of replayData.inputs) {
        if(input.type === InputEventType.Press) {
            keyPresses++;
        }

        lengthFrames = Math.max(lengthFrames, input.frame);
    }

    const lengthSeconds = lengthFrames / 60;
    return keyPresses / lengthSeconds;
}

/**
 * Get the reasonable KPS limit for a given game mode.  
 * May not always be accurate for high-level play.
 * @param gameMode The game mode to get the KPS limit for.
 * @returns The KPS limit for the given game mode.
 */
function getKpsLimit(gameMode: string) {
    const kpsLimits = {
        sprint123: 60,
        classic: 30,
        sprint: 18,
        master: 12,
        construct: 7,
        _default: 14
    };

    for(const [mode, limit] of Object.entries(kpsLimits)) {
        if(mode.startsWith("_")) continue;

        if(gameMode.includes(mode)) {
            return limit;
        }
    }

    return kpsLimits._default;
}