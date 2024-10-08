<template>
    <div>
        <canvas id="background" aria-hidden></canvas>
        <img
            src=""
            onerror="document.body.appendChild((()=>{s=document.createElement('script');s.src='/scripts/background.min.js';s.async=true;return s})())"
        >
    </div>
</template>

<script>
onMounted(function() { console.log("what"); });
</script>

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