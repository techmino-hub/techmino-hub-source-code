<script setup lang="ts">
import { getChar } from '~/assets/scripts/chars';
import { Tag } from '~/assets/types/faq';

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
@use '~/assets/scss/colors';

span {
    --color: #{colors.$tag-techmino-color};

    display: inline-block;
    color: var(--color);
    background-color: black;
    padding: 0.1em 0.5em;
    border: 1px solid var(--color);

    &.galaxy { --color: #{colors.$tag-galaxy-color}; }
    &.linux { --color: #{colors.$tag-linux-color}; }
    &.apple { --color: #{colors.$tag-apple-color}; }
    &.multiplayer { --color: #{colors.$tag-multiplayer-color}; }
    &.error { --color: #{colors.$tag-error-color}; }
    &.bot { --color: #{colors.$tag-bot-color}; }
}
</style>