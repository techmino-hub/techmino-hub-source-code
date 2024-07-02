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

definePageMeta({
    layout: 'bg-only'
})
</script>

<template>
    <div class="map-page">
        <Title>{{ $t('map.tabTitleFS') }}</Title>
        <Map :map="currentMap" class="map hide-noscript-important" :fullscreen="true" />
        <noscript>
            <NuxtLink class="block-style center-text" :to="localePath('/map-lite')">{{ $t('map.htmlVersion') }}</NuxtLink>
        </noscript>
    </div>
</template>

<style scoped lang="scss">
@use '~/assets/scss/colors';

a {
    display: block;
    width: fit-content;
    margin-inline: auto;
}

.map, .map-page {
    position: fixed;
    inset: 0;
    width: 100vw;
    height: 100vh;
}
</style>