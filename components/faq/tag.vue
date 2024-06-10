<script setup lang="ts">
import { Tag } from '~/assets/types/faq';
import { defineProps } from 'vue';

const props = defineProps({
    tag: {
        type: Object as PropType<Tag>,
        required: true
    }
});

const preTextMap: Record<Tag, string> = {
    techmino: "󰁀", // Z-tetromino
    galaxy: "󰁄", // T-tetromino
    linux: "󰂖", // console icon
    apple: "󰂛", // Apple logo
    multiplayer: "󰂗", // globe icon
    error: "󰂒", // X icon
    bot: "󰂖", // console icon
}
</script>

<template>
    <span :class="tag">
        {{ tag }}
    </span>
</template>

