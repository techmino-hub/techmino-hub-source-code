<script setup lang="ts">
import { type FAQEntry, Tag } from '~/assets/types/faq';
import * as faq from '~/assets/data/faq';

const faqEntries = faq.default;
</script>
<template>
    <div>
        <Title>{{ $t('faq.tabTitle') }}</Title>
        <h1 class="center-text">{{ $t('faq.title') }}</h1>
        <main class="entries">
            <FaqTagFilter />
            <FaqEntry
                v-for="faqEntry in Object.values(faqEntries)"
                :entry="faqEntry"
            />
        </main>
        <br>
        <small v-html="$t('faq.note')"></small>
    </div>
</template>

<style scoped lang="scss">
@use "~/assets/scss/colors";
.entries {
    display: flex;
    flex-direction: column;
    width: fit-content;
    margin-inline: auto;
    max-width: 50em;
    gap: 2em;
}
</style>