<script setup lang="ts">
const route = useRoute();
let currentMap: string = 'vanilla';

{
    const map = route.query.map;

    if(typeof map === 'string') {
        currentMap = map;
    } else if(Array.isArray(map) && map.length > 0) {
        currentMap = map[0] ?? 'vanilla';
    } else {
        currentMap = 'vanilla';
    }
}

const localePath = useLocalePath();
</script>

<template>
    <div class="map-page">
        <Title>{{ $t('map.tabTitle') }}</Title>
        <h1 class="center-text">{{ $t('map.title') }}</h1>
        <p class="center-text hide-noscript">{{ $t('map.details', { currentMap: currentMap }) }}</p>
        <NuxtLink class="block-style center-text hide-noscript-important" :to="localePath('/map-full')">{{ $t('map.fullscreen') }}</NuxtLink>
        <div class="map-wrapper hide-noscript-important">
            <Map :map="currentMap" />
        </div>
        <noscript>
            <p class="center-text">{{ $t('map.noscriptWarn') }}</p>
            <NuxtLink class="block-style center-text" :to="localePath('/map-lite')">{{ $t('map.liteVersion') }}</NuxtLink>
        </noscript>
    </div>
</template>

<style scoped lang="scss">
@use '~/assets/scss/colors';

.map-page {
    position: relative;
    padding: 1em 3em 3em;
}

a {
    display: block;
    width: fit-content;
    margin-inline: auto;
}

.map-wrapper {
    position: relative;
    margin-top: 3em;
    width: 100%;
    height: 95vh;
    border: 0.1em solid colors.$primary-color;
}
</style>