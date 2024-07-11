import pako from 'pako';
import { Buffer } from 'buffer';
import { type GameReplayData } from '~/assets/types/replay';

/**
 * Decompresses a replay.  
 * It can take either the binary contents of a `.rep` file,
 * or the base64-encoded string you get by exporting a replay from the game.
 * 
 * @param compressed
 * The compressed replay data. Can either be a Buffer or a base64-encoded string.
 * 
 * @returns
 * A tuple containing the decompressed replay data as two Buffers.  
 * The first Buffer contains the metadata as a JSON, and the second Buffer contains the input data.
 */
export async function decompressReplay(compressed: Buffer): Promise<[Buffer, Buffer]> {
    try {
        const str = pako.inflate(compressed).toString();

        const splitIdx = str.indexOf(",10,");

        const sliced = [
            str.slice(0, splitIdx),
            str.slice(splitIdx + 4)
        ];

        const result =
            sliced.map((line: string) =>
                line.split(",").map(Number)
            )
            .map((arr: number[]) => Buffer.from(arr));

        return [result[0], result[1] ?? Buffer.alloc(0)];
    } catch (err) {
        return Promise.reject(err);
    }
}

/**
 * Parses the raw input data from a replay using VLQ.  
 * @param rep The input data buffer.
 * @returns An array of raw input data.
 */
async function getRawInputs(rep: Buffer): Promise<number[]> {
    const decodeVLQ = (buffer: Buffer, startPos: number): [number, number] => {
        let value = 0;
        let position = startPos;
        let byteValue: number;

        do {
            byteValue = buffer[position];
            value = value * 128 + (byteValue & 0x7F); // Mask the MSB
            position += 1;
        } while (byteValue >= 128 && position < buffer.length);

        return [value, position];
    };

    let result: number[] = [];
    let currentFrame = 0;
    let position = 0;

    while (position < rep.length) {
        let [frameCode, newPosition] = decodeVLQ(rep, position);
        currentFrame += frameCode + 1;
        result.push(currentFrame);
        position = newPosition;

        if (position < rep.length) {
            let [eventCode, newPosition] = decodeVLQ(rep, position);
            result.push(eventCode);
            position = newPosition;
        }
    }

    return result;
}

function isKeyValid(key: number): boolean {
    const smallestFiveBits = key & 0b11111;
    return smallestFiveBits >= 1 && smallestFiveBits <= 20;
}

/**
 * Extracts the replay metadata and input data from the replay buffers, into a structured format.
 * @param replayBuf The decompressed replay data.
 * @returns The replay data.
 */
export async function parseReplay(replayBuf: [Buffer, Buffer]): Promise<GameReplayData> {
    let replayData: Partial<GameReplayData> = {inputs: []};

    const rawInputPromise = getRawInputs(replayBuf[1]);

    try {
        const jsonObj = JSON.parse(replayBuf[0].toString());
        Object.assign(replayData, jsonObj);
    } catch (exception) {
        console.warn("Failed to parse replay metadata", exception);
    }

    const rawInputs = await rawInputPromise;
    
    if (rawInputs.length % 2 !== 0) rawInputs.pop();

    for (let i = 0; i < rawInputs.length; i += 2) {
        const frame = rawInputs[i];
        const eventKey = rawInputs[i + 1];
        
        if(eventKey >= frame || !isKeyValid(eventKey)) {
            continue;
        }

        (replayData as GameReplayData).inputs.push({
            frame: frame,
            type: eventKey > 32 ? "Release" : "Press",
            key: eventKey % 32
        });
    }

    return replayData as GameReplayData;
}

if(window) {
    (window as any).TechminoReplayParser = {
        decompressReplay,
        parseReplay
    };
}