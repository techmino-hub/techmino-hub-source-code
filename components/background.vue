<!--
    The first <script> injection is faster, but breaks upon switching layouts.
    The <img> fallback will load the script when it breaks, but is slightly slower.
    
    They're both a lot faster than using Vue <script>s, which require the
    whole page to finish loading before the onMounted callback is fired.
-->
<template>
    <div>
        <canvas id="background" aria-hidden></canvas>
        <div v-html="`<script src='/scripts/background.min.js'async></script>`"></div>
        <img
            src="" aria-hidden="true"
            onerror="d=document;if(!d.getElementById('background').classList.contains('rendering')){s=d.createElement('script');s.src='/scripts/background.min.js';s.async=true;d.body.appendChild(s)}"
        >
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
:has(#background) img {
    display: none;
}
</style>