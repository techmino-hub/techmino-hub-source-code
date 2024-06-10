<script setup lang="ts">
import type { FAQEntry } from '~/assets/types/faq';

async function getFAQEntries(lang: string): Promise<FAQEntry[]> {
    const imported = await import(`~/assets/lang/faq/${lang}.tsx`);
    const entries: FAQEntry[] = imported.default();

    return entries;
}

async function init() {
    const language: string = (navigator.language || 'en-us').toLowerCase();
    const langEntries = await getFAQEntries(language);
}

onMounted(init);
</script>
<template>

</template>