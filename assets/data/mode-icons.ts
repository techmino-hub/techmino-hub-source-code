import { type Mode } from "~/assets/types/map";

export const ModeIconType = {
    PNG: 'png',
    SVG: 'svg'
} as const;
export type ModeIconType = typeof ModeIconType[keyof typeof ModeIconType];

export const MODE_ICON_TYPE_MAP = {
    // How to generate:
    // 1. Open your terminal
    // 2. Go to /public/img/mode-icons
    // 3. List the files in the directory (Windows: `dir`, Linux: `ls -w 1`)
    // 4. Copy the command output here
    // 5. Use Find and Replace

    attack: ModeIconType.PNG,
    backfire: ModeIconType.PNG,
    bigbang: ModeIconType.PNG,
    big: ModeIconType.SVG,
    classic: ModeIconType.SVG,
    confusion: ModeIconType.PNG,
    defend: ModeIconType.PNG,
    dig_eff: ModeIconType.PNG,
    dig: ModeIconType.PNG,
    dig_sprint: ModeIconType.PNG,
    drought: ModeIconType.PNG,
    hidden2: ModeIconType.PNG,
    hidden3: ModeIconType.PNG,
    hidden4: ModeIconType.PNG,
    hidden5: ModeIconType.PNG,
    hidden: ModeIconType.PNG,
    infinite: ModeIconType.SVG,
    marathon: ModeIconType.SVG,
    master_ex: ModeIconType.PNG,
    master: ModeIconType.PNG,
    mess: ModeIconType.PNG,
    pc: ModeIconType.PNG,
    rhythm: ModeIconType.PNG,
    round: ModeIconType.PNG,
    secret_grade: ModeIconType.SVG,
    solo: ModeIconType.PNG,
    sprint1: ModeIconType.PNG,
    sprint2: ModeIconType.PNG,
    sprint3: ModeIconType.PNG,
    sprint_pento: ModeIconType.SVG,
    sprint_tri: ModeIconType.SVG,
    survivor: ModeIconType.PNG,
    t49: ModeIconType.SVG,
    t99: ModeIconType.SVG,
    tech_plus: ModeIconType.SVG,
    tech: ModeIconType.SVG,
    tsd: ModeIconType.SVG,
    ultra: ModeIconType.SVG,
    zen: ModeIconType.PNG,
} as { [key: string]: ModeIconType };

export function getModeIconPath(mode: Mode) {
    const modeIcon = mode.icon;
    const fileExtension = MODE_ICON_TYPE_MAP[modeIcon];

    if(!fileExtension) {
        console.error(`Unknown mode icon '${mode.icon}'. Defaulting to 'confusion.png'.`);
        return "/img/mode-icons/confusion.png";
    }

    return `/img/mode-icons/${modeIcon}.${fileExtension}`;
}

export default getModeIconPath;