/*
Originally part of /components/background.vue.
Moved into separate script file so it can run before DOMContentLoaded, but *just* after the canvas element is created.

Bundle into a minified JS file using Bun:
```terminal
bun build assets/scripts/background.ts \
    --outfile public/scripts/background.min.js \
    --minify --target browser --no-bundle
```

Bundle into a minified JS file using Deno:
```terminal
deno bundle assets/scripts/background.ts public/scripts/background.min.js
```

Bundle into a minified JS file using ESBuild:
```terminal
esbuild assets/scripts/background.ts \
    --bundle --minify \
    --outfile=public/scripts/background.min.js
```

Bundle using all methods and pick the smallest file size (Bash):
```bash
bun build assets/scripts/background.ts --outfile public/scripts/~background.bun.js --minify --target browser --no-bundle &&\
deno bundle assets/scripts/background.ts public/scripts/~background.deno.js &&\
esbuild assets/scripts/background.ts --bundle --minify --outfile=public/scripts/~background.esbuild.js &&\

for file in public/scripts/~background.*.js; do
    size=$(stat -c %s $file)
    echo "$size $file"
done | sort -n | head -n 1 | cut -d ' ' -f 2 | xargs -I {} mv {} public/scripts/background.min.js &&\
rm public/scripts/~background.*.js
```
*/
const BG_TOGGLE_KEY = 'bgEnabled';
const BG_SPEED_KEY = 'bgSpeed';
const BG_ID = 'background';
const STAR_COLOR = '#FFFFFFAF';

let bgCanvas: HTMLCanvasElement;
let bgContext: CanvasRenderingContext2D;
let width: number; let height: number;

let stars: Star[] = [];

let lastTimestamp: number = performance.now();
let speedMult: number;

type Star = {
    size: number;
    x: number;
    y: number;
    dx: number;
    dy: number;
}

let bgEnabled: boolean;

function random(min: number, max: number): number {
    return Math.random() * (min - max) + max;
}

function isBackgroundEnabled(): boolean {
    let bgEnabled = localStorage.getItem(BG_TOGGLE_KEY);
    if(bgEnabled === null) {
        bgEnabled = "true";
        localStorage.setItem(BG_TOGGLE_KEY, bgEnabled);
    }
    return bgEnabled === "true";
}

function getSpeedMult(): number {
    let speed = localStorage.getItem(BG_SPEED_KEY);
    if(speed === null) {
        speed = "1";
        localStorage.setItem(BG_SPEED_KEY, speed);
    }
    return parseFloat(speed);
}

function init() {
    bgEnabled = isBackgroundEnabled();
    if(!bgEnabled) return;

    speedMult = getSpeedMult();

    const canvas = document.getElementById(BG_ID);
    if(canvas === null) return;

    bgCanvas = canvas as HTMLCanvasElement;
    bgContext = bgCanvas.getContext("2d")!;

    width = bgCanvas.offsetWidth;
    height = bgCanvas.offsetHeight;

    onResize();
    draw(performance.now());
}

function onResize() {
    width = bgCanvas.offsetWidth;
    height = bgCanvas.offsetHeight;

    bgCanvas.width = width;
    bgCanvas.height = height;

    let starCount = Math.floor(width * height * 6e-4);
    stars = new Array(starCount);

    for (let i = 0; i < starCount; i++) {
        let size = random(2.6, 4);
        stars[i] = {
            size: size,
            x: random(-10, width + 10),
            y: random(-10, height + 10),
            dx: random(-0.001, 0.001) * size,
            dy: random(-0.001, 0.001) * size
        };
    }
}

const WRAP_MARGIN = 1;
function draw(timestamp: number) {
    let dt = timestamp - lastTimestamp;
    dt *= speedMult;
    lastTimestamp = timestamp;

    if(width !== bgCanvas.offsetWidth || height !== bgCanvas.offsetHeight) onResize();

    bgContext.clearRect(0, 0, width, height);

    // move stars
    for (let i = 0; i < stars.length; i++) {
        const star = stars[i];
        star.x += (star.dx * dt)
        star.y += (star.dy * dt)

        if(star.x < -star.size - WRAP_MARGIN) {
            star.x += width + star.size;
        } else if(star.x > width + star.size + WRAP_MARGIN) {
            star.x -= width + star.size;
        }
        if(star.y < -star.size - WRAP_MARGIN) {
            star.y += height + star.size;
        } else if(star.y > height + star.size + WRAP_MARGIN) {
            star.y -= height + star.size;
        }
    }

    // draw stars
    bgContext.fillStyle = STAR_COLOR;
    for (let i = 0; i < stars.length; i++) {
        const star = stars[i];
        bgContext.fillRect(star.x, star.y, star.size, star.size);
    }

    requestAnimationFrame(draw);
}

init();