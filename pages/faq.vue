<script setup lang="ts">
import type { FAQEntry } from '~/assets/types/faq';
import * as faq from '~/assets/data/faq';

const faqEntries = faq.default;
</script>
<template>
    <div>
        <Title>{{ $t('faq.tabTitle') }}</Title>
        <h1 class="center-text">{{ $t('faq.title') }}</h1>
        <div>
            <FaqEntry
                v-for="faqEntry in Object.values(faqEntries)"
                :entry="faqEntry"
            />
        </div>
        <small v-html="$t('faq.note')"></small>
    </div>
</template>