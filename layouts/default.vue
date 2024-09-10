<template>
    <div class="outer">
        <Background />
        <div class="main-panel" :style="{
            'backdrop-filter': `blur(${blur}px)`,
            '-webkit-backdrop-filter': `blur(${blur}px)`
        }">
            <Header />
            <main>
                <slot />
            </main>
            <Footer />
        </div>
    </div>
</template>

<script setup lang="ts">
const blur = ref(0);
onMounted(function() {
    const blurValue = localStorage.getItem('mainPanelBlur');

    if(!blurValue) return;

    const blurAmount = Number(blurValue);

    if(isNaN(blurAmount) || blurAmount <= 0) return;

    blur.value = blurAmount;
});
</script>

<style lang="scss">
@use "~/assets/scss/main";
@use "~/assets/scss/global";
</style>