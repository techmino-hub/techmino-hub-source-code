<script setup lang="ts">
import { getChar } from '~/assets/chars';
import { Tag } from '~/assets/types/faq';
import { defineProps } from 'vue';

const props = defineProps({
    tag: {
        type: String,
        required: true
    }
});

const preTextMap: Record<Tag, string> = {
    techmino: getChar('mino.Z'),
    galaxy: getChar('mino.T'),
    linux: getChar('icon.console'),
    apple: getChar('icon.apple'),
    multiplayer: getChar('icon.globe'),
    error: getChar('icon.crossMark'),
    bot: getChar('icon.console')
}
</script>

<template>
    <span :class="tag">
        {{ preTextMap[tag as Tag] + "  " + $t(`faq.tags.${tag}`) }}
    </span>
</template>

<style scoped lang="scss">
span {
    --color: lime;

    display: inline-block;
    color: var(--color);
    background-color: black;
    padding: 0.1em 0.5em;
    border: 1px solid var(--color);

    &.galaxy { --color: #978ae7; }
    &.linux { --color: #f1e05a; }
    &.apple { --color: white; }
    &.multiplayer { --color: #ff7f00; }
    &.error { --color: #ff0000; }
    &.bot { --color: #62c2b9; }
}
</style>