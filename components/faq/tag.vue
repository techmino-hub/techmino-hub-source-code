<script setup lang="ts">
import { getChar } from '~/assets/chars';
import { Tag } from '~/assets/types/faq';
import { defineProps } from 'vue';

const props = defineProps({
    tag: {
        type: Object as PropType<Tag>,
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
        {{ preTextMap[tag] + "  " + $t(`faq.tags.${tag}`) }}
    </span>
</template>

<style scoped lang="scss">
span {
    --color: lime;
    --bg-color: rgba(0, 200, 0, 0.4);

    display: inline-block;
    color: var(--color);
    background-color: var(--bg-color);
    padding: 0.1em 0.5em;
    border: 1px solid var(--color);

    &.techmino {
        --color: lime;
        --bg-color: rgba(0, 200, 0, 0.4);
    }
    &.galaxy {
        --color: #978ae7;
        --bg-color: #483d8b44;
    }
    &.linux {
        --color: #f1e05a;
        --bg-color: #f1e05a44;
    }
    &.apple {
        --color: white;
        --bg-color: #ffffff44;
    }
    &.multiplayer {
        --color: #ff7f00;
        --bg-color: #ff7f0044;
    }
    &.error {
        --color: #ff0000;
        --bg-color: #ff000044;
    }
    &.bot {
        --color: #62c2b9;
        --bg-color: #62c2b944;
    }
}
</style>