<script setup lang="ts">
import type { FAQEntry } from '~/assets/types/faq';
import * as faq from '~/assets/data/faq';

const faqEntries = faq.default;
</script>
<template>
    <div>
        <h1>FAQ</h1>
        <menu>
            <FaqEntry
                v-for="faqEntry in Object.values(faqEntries)"
                :entry="faqEntry"
            />
        </menu>
    </div>
</template>