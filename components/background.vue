<template>
    <div>
        <canvas id="background" aria-hidden></canvas>
        <div v-html="`<script src='/scripts/background.min.js'async></script>`"></div>
    </div>
</template>

<style scoped>
canvas#background {
    position: fixed;
    top: 0;
    left: 0;
    z-index: -1;
    width: 100%; width: 100vw; width: 100lvw;
    height: 100%; height: 100vh; height: 100lvh;
}
</style>