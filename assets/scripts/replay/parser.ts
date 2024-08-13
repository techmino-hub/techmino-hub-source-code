import pako from 'pako';
import { Buffer } from 'buffer';
import { type GameInputEvent, InputEventType, type GameReplayData } from '~/assets/types/replay';

function decodeVLQ(data: string, position: number): [number, number] {
    let ret = 0;
    let byte: number;
    do {
        byte = data.charCodeAt(position);
        position++;
        ret = ret * 128 + (byte & 127);
    } while(byte >= 128);
    return [ret, position];
}

function pumpRecording(data: string) {
    let position = 1;
    const events = [] as GameInputEvent[];

    let curFrame = 0;
    while (position <= data.length) {
        let dt: number, eventKey: number;
        
        [dt, position] = decodeVLQ(data, position);
        curFrame += dt;

        [eventKey, position] = decodeVLQ(data, position);

        events.push({
            frame: curFrame,
            type: eventKey > 32 ? InputEventType.Release : InputEventType.Press,
            key: eventKey % 32
        });
    }
    return events;
}

export async function parseReplayFromBuffer(replayBuf: Buffer): Promise<GameReplayData> {
    const arr = pako.inflate(replayBuf);

    const firstNewline = arr.indexOf(10);

    const metadata = arr.slice(0, firstNewline);
    const data = arr.slice(firstNewline + 1);

    const metadataStr = Buffer.from(metadata).toString();
    const replayData = JSON.parse(metadataStr) as Partial<GameReplayData>;
    
    replayData.inputs = pumpRecording(Buffer.from(data).toString());

    return replayData as GameReplayData;
}

export async function parseReplayFromRepString(replayStr: string): Promise<GameReplayData> {
    const repBuf = Buffer.from(replayStr, "base64");
    return await parseReplayFromBuffer(repBuf);
}

if(window) {
    (window as Record<string, any>).TechminoReplayParser = {
        parseReplayFromBuffer,
        parseReplayFromRepString
    }
}