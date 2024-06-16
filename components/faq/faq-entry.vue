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
            <h3>{{ $t(`faq.entries.${entry.id}.question`) }}</h3>
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

<style lang="scss">
@use '~/assets/scss/colors';
details.question {
    border: 0.1em solid colors.$primary-color;
    border-radius: 0.4em;
    transition: 200ms;

    font-size: 1.25em;
    background-color: #00330022;
    color: white;

    &[open] > summary {
        border-bottom: 0.1em dotted colors.$primary-color-alpha75;
    }

    > summary {
        height: min-content;
        padding: 1em;
        background-color: #002200bb;
        border: 0 none transparent;
        color: colors.$primary-color;
        cursor: pointer;
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
            width: 2em; height: 2em;
            align-self: center;
            border: 1px solid colors.$primary-color;
            border-radius: 0.2rem;
        }
    }

    > article {
        display: flex;
        flex-direction: column;
        padding: 1em 1.5em 0.5em;

        > blockquote {
            margin: 0;
            
            a {
                color: colors.$btn-border-color;
                transition: 200ms;

                &:hover {
                    text-shadow: 0 0 0.15em colors.$btn-hover-border-color;
                    color: colors.$btn-hover-border-color;
                }

                &:active {
                    text-shadow: 0 0 0.3em colors.$btn-active-border-color;
                    color: colors.$btn-active-border-color;
                }
            }
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