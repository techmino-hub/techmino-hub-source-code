let bgCanvas: HTMLCanvasElement;
let bgContext: CanvasRenderingContext2D;
let width: number; let height: number;

let stars: Star[] = [];

let lastTimestamp: number = performance.now();

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
    let bgEnabled = localStorage.getItem('bgEnabled');
    if(bgEnabled === null) {
        bgEnabled = "true";
        localStorage.setItem('bgEnabled', bgEnabled);
    }
    return bgEnabled === "true";
}

function init() {
    bgEnabled = isBackgroundEnabled();
    if(!bgEnabled) return;

    const canvas = document.getElementById("bg");
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

function draw(timestamp) {
    let dt = timestamp - lastTimestamp;
    lastTimestamp = timestamp;

    if(width !== bgCanvas.offsetWidth || height !== bgCanvas.offsetHeight) onResize();

    bgContext.clearRect(0, 0, width, height);

    // move stars
    for (let i = 0; i < stars.length; i++) {
        const star = stars[i];
        star.x += (star.dx * dt)
        star.y += (star.dy * dt)
        star.x %= width
        star.y %= height
    }

    // draw stars
    bgContext.fillStyle = "#FFFFFFAF"
    for (let i = 0; i < stars.length; i++) {
        const star = stars[i];
        bgContext.fillRect(star.x, star.y, star.size, star.size);
    }
    requestAnimationFrame(draw);
}