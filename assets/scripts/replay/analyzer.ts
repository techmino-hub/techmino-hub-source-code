import { type GameReplayData } from "~/assets/types/replay";

/**
 * Analyze a replay to determine if it is suspicious or not.  
 * May not always be accurate, but it should filter out obvious cheated runs.
 * @param replayData The replay data to analyze.
 * @returns "OK" if the replay was not detected to be suspicious, "Suspicious" otherwise.
 */
export function analyzeReplay(replayData: GameReplayData): "OK" | "Suspicious" {
    if(replayData.tasUsed) {
        return "Suspicious";
    }

    let keyPresses = 0;
    let lengthFrames = 0;

    for(const input of replayData.inputs) {
        if(input.type === "Press") {
            keyPresses++;
        }

        lengthFrames = Math.max(lengthFrames, input.frame);
    }

    const lengthSeconds = lengthFrames / 60;
    const kps = keyPresses / lengthSeconds;
    const kpsLimit = getKpsLimit(replayData.gameMode);

    if(kps > kpsLimit) {
        return "Suspicious";
    }

    return "OK";
}

function getKpsLimit(gameMode: string) {
    const kpsLimits = {
        sprint123: 60,
        classic: 30,
        sprint: 12,
        master: 11,
        construct: 7,
        _default: 30
    };

    for(const [mode, limit] of Object.entries(kpsLimits)) {
        if(mode.startsWith("_")) continue;

        if(gameMode.includes(mode)) {
            return limit;
        }
    }

    return kpsLimits._default;
}