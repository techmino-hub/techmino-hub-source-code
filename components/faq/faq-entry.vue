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
      :id="entry.id"
      :class="`question ${entry.tags.join(' ')}`"
      name="faq">
        <summary>
            <h3>{{ $t(`faq.entries.${entry.id}.title`) }}</h3>
            <span>
                {{ $t("faq.preTags")}}
                <FaqTag
                    v-for="tag in entry.tags"
                    :tag="tag"
                />
            </span>
        </summary>
        <blockquote v-html="$t(`faq.entries.${entry.id}.answer`)"></blockquote>
        <cite>{{ entry.author }}</cite>
    </details>
</template>