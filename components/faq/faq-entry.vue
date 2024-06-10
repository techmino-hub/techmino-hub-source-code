<script setup lang="ts">
import type { FAQEntry, Tag } from '~/assets/types/faq';

const props = defineProps({
    entry: {
        type: Object as PropType<FAQEntry>,
        required: true
    }
});
</script>
<template>
    <details
      :class="`question ${entry.tags.join(' ')}`"
      name="faq">
        <summary>
            
        </summary>

    </details>
</template>