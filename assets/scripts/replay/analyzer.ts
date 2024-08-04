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
 * Gets a player's input fingerprint from their keypress durations.  
 * The format of the input fingerprint is as follows:  
 * - Each input type is represented by four possibly-hexadecimal characters.
 * - If an input type was not pressed in the entire replay, it will become "----".
 * - The four characters represent the following:
 *   - The first two represent the mean keypress duration, in 1/16ths of a frame, in hexadecimal.
 *   - The third and fourth represents the standard deviation of keypress durations, in 1/16ths of a frame, in hexadecimal.
 * - The values are rounded to the nearest 1/16th of a frame.
 * - If the mean/standard deviation is too large to fit in two hexadecimal characters, it will be clamped to FF.
 * 
 * For instance, if a player's input fingerprint starts with "6A2B", it means that:
 * - The mean keypress duration is approximately 0x6A * 1/16 frames, or 0x6A / 16 frames.  
 *   This is approximately 6.625 frames.
 * - The standard deviation of keypress durations is approximately 0x2B * 1/16 frames, or 0x2B / 16 frames.
 *   This is approximately 2.8125 frames.
 * 
 * "Depending on the control scheme and finger layout of the player, 
 * they are expected to have a consistent range of these lengths per in-game key
 * across all of their relevant gameplay, as this is exactly what defines their
 * physical playstyle or footprint."  
 * \- [mat1jaczyyy, et al.](https://docs.google.com/document/d/1bfQFBUv85jFLSLyiyCotMBU19xeUtQb3wUEas7Zfq_Y/edit?pli=1#heading=h.qkx6lor7ba5t)
 */
export function getInputFingerprint(inputStats: KeyDurationStats): string {
    let fingerprint = "";

    for(const key of Object.values(InputKey) as InputKey[]) {
        const stats = inputStats[key];

        if(stats.presses === 0) {
            fingerprint += "----";
            continue;
        }

        const mean =
            Math.min(
                Math.round(
                    stats.totalDuration / stats.presses * 16
                ),
                0xFF
            );

        const stdDev =
            Math.min(
                Math.round(
                    stats.standardDeviation * 16
                ),
                0xFF
            );
        
        fingerprint += mean.toString(16).padStart(2, "0");
        fingerprint += stdDev.toString(16).padStart(2, "0");
    }

    return fingerprint;
}

/**
 * Gets how similar two input fingerprints are to each other.  
 * 1 means the fingerprints are identical, and lower values mean they are less similar.  
 */
export function getFingerprintSimilarity(fingerprint1: string, fingerprint2: string): number {
    const similarities = [];

    for(const key of Object.values(InputKey) as InputKey[]) {
        const index = key * 4;

        if(
            fingerprint1.charAt(index) === "-" ||
            fingerprint2.charAt(index) === "-"
        ) {
            continue;
        }

        const mean1 = parseInt(fingerprint1.slice(index, index + 2), 16);
        const stdDev1 = parseInt(fingerprint1.slice(index + 2, index + 4), 16);
        const mean2 = parseInt(fingerprint2.slice(index, index + 2), 16);
        const stdDev2 = parseInt(fingerprint2.slice(index + 2, index + 4), 16);

        const maxMean = Math.max(mean1, mean2, 1e-3);
        const maxStdDev = Math.max(stdDev1, stdDev2, 1e-3);

        const meanSimilarity = 1 - Math.abs(mean1 - mean2) / maxMean;
        const stdDevSimilarity = 1 - Math.abs(stdDev1 - stdDev2) / maxStdDev;

        similarities.push(meanSimilarity * stdDevSimilarity);
    }

    let similarity = 1;
    for(const sim of similarities) {
        similarity *= sim;
    }

    return similarity;
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