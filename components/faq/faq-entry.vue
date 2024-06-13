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
            <span class="tags">
                {{ $t("faq.preTags")}}
                <FaqTag
                    v-for="tag in entry.tags"
                    :tag="tag"
                />
            </span>
        </summary>
        <article>
            <blockquote v-html="$t(`faq.entries.${entry.id}.answer`)"></blockquote>
            <cite>{{ entry.author }}</cite>
        </article>
    </details>
</template>

<style scoped lang="scss">
details {
    border: 0.1em solid lime;
    border-radius: 0.4rem;
    transition: 200ms;
    margin-bottom: 1rem;

    font-size: 1.25rem;
    background-color: rgba(0,100,0,0.15);
    color: white;

    &[open] > summary {
        border-bottom: 0.1em dashed lime;
    }

    > summary {
        height: min-content;
        padding: 0.5rem 1rem;
        background-color: rgba(0,100,0,0.5);
        border: 0 none transparent;
        color: lime;
        cursor: pointer;
        font-size: 1.25rem;
        flex-grow: 1;
        text-align: left;

        h3 {
            display: inline;
        }

        span.tags {
            display: flex;
            flex-direction: row;
            height: fit-content;
            align-items: center;
            justify-items: start;
            margin-top: 0.5em;
            gap: 0.5em;
            font-size: 0.9em;
        }

        &::marker {
            display: inline-block;
            text-align: center;
            margin-right: 1rem;
            width: 2rem; height: 2rem;
            align-self: center;
            border: 1px solid lime;
            border-radius: 0.2rem;
        }
    }

    article {
        display: flex;
        flex-direction: column;
        padding: 1em 1.5em 0.5em;

        blockquote {
            margin: 0;
        }

        cite {
            margin-top: 1em;
            font-size: 0.8em;
            text-align: right;

            &::before {
                content: "— ";
            }
        }
    }
}
</style>