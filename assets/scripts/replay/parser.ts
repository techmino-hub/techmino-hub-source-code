import pako from 'pako';
import { Buffer } from 'buffer';
import { type GameInputEvent, InputEventType, type GameReplayData } from '~/assets/types/replay';

function decodeVLQ(data: Uint8Array, position: number): [number, number] {
    let ret = 0;
    let byte = 0;
    do {
        byte = data[position];
        position++;
        ret = ret * 128 + (byte & 127);
    } while(byte >= 128);
    return [ret, position];
}

function pumpRecording(data: Uint8Array, absoluteTiming = false): GameInputEvent[] {
    let position = 0;
    const events = [] as GameInputEvent[];

    let curFrame = 0;
    while (position < data.length) {
        let time: number, eventKey: number;
        
        [time, position] = decodeVLQ(data, position);
        if(absoluteTiming) {
            curFrame = time;
        } else {
            curFrame += time;
        }

        [eventKey, position] = decodeVLQ(data, position);

        events.push({
            frame: curFrame,
            type: eventKey > 32 ? InputEventType.Release : InputEventType.Press,
            key: eventKey % 32
        });
    }
    return events;
}

function getVersion(versionStr: string): [number, number, number] {
    const versionMatch = versionStr.match(/\d*\.\d*\.\d*/);
    if (!versionMatch) {
        return [0, 0, 0];
    }

    const versionSplit = versionMatch[0].split(".");
    return [
        parseInt(versionSplit[0] ?? "0"),
        parseInt(versionSplit[1] ?? "0"),
        parseInt(versionSplit[2] ?? "0")
    ];
}

function checkMinVersion(min: [number, number, number], version: [number, number, number]): boolean {
    if (min[0] > version[0]) {
        return false;
    } else if (min[0] < version[0]) {
        return true;
    }

    if (min[1] > version[1]) {
        return false;
    } else if (min[1] < version[1]) {
        return true;
    }

    return min[2] <= version[2];
}

export async function parseReplayFromBuffer(replayBuf: Buffer): Promise<GameReplayData> {
    const arr = pako.inflate(replayBuf);

    const firstNewline = arr.indexOf(10);

    const metadata = arr.slice(0, firstNewline);
    const data = arr.slice(firstNewline + 1);

    const metadataStr = Buffer.from(metadata).toString();
    const replayData = JSON.parse(metadataStr) as Partial<GameReplayData>;
    
    // Replay versions above v0.17.21 use absolute timing
    const version = getVersion(replayData.version ?? "0.0.0");
    const minVersion = [0, 17, 21] as [number, number, number];
    const useAbsoluteTiming = checkMinVersion(minVersion, version);

    const buf = Buffer.from(data);

    replayData.inputs = pumpRecording(new Uint8Array(buf), useAbsoluteTiming);

    return replayData as GameReplayData;
}

export async function parseReplayFromRepString(replayStr: string): Promise<GameReplayData> {
    const repBuf = Buffer.from(replayStr.trim(), "base64");
    return await parseReplayFromBuffer(repBuf);
}

if(typeof window !== 'undefined') {
    (window as Record<string, any>).TechminoReplayParser = {
        parseReplayFromBuffer,
        parseReplayFromRepString
    }
}