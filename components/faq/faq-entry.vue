<script setup lang="ts">
import type { FAQEntry, Tag } from '~/assets/types/faq';
import { getChar } from '~/assets/scripts/chars';

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
                {{ $t("faq.preTags") }}
                <FaqTag
                    v-for="tag in entry.tags"
                    :key="tag"
                    :tag="tag"
                />
            </span>
            <a :href="'#' + entry.id" class="question-link" aria-hidden="true">#</a>
        </summary>
        <article>
            <blockquote v-html="$t(`faq.entries.${entry.id}.answer`)"></blockquote>
            <cite>{{ $t(`faq.entries.${entry.id}.credit`) }}</cite>
        </article>
    </details>
</template>

<style scoped lang="scss">
@use '~/assets/scss/colors';
details.question {
    border: 0.1em solid colors.$primary-color;
    border-radius: 0.5em;
    transition: 200ms;

    font-size: 1.25em;
    background-color: #00330022;
    color: white;

    @media (prefers-contrast: more) {
        background-color: black;
    }

    &[open] > summary {
        border-bottom: 0.1em dotted colors.$primary-color-alpha75;
        border-end-end-radius: 0;
        border-end-start-radius: 0;

        a.question-link {
            color: #ffffffcc;
        }
    }

    > summary {
        position: relative;
        height: min-content;
        padding: 1em;
        background-color: #002200bb;
        border: 0 none transparent;
        border-radius: 0.5em;
        color: colors.$primary-color;
        cursor: pointer;
        flex-grow: 1;
        text-align: left;

        @media (prefers-contrast: more) {
            background-color: black;
        }

        h3 {
            display: inline;
        }

        span.tags {
            display: flex;
            flex-direction: row;
            height: fit-content;
            align-items: center;
            justify-items: start;
            flex-wrap: wrap;
            margin-top: 0.5em;
            padding-right: 2em;
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

        &:hover a.question-link {
            color: #ffffffcc;
        }

        a.question-link {
            position: absolute;
            top: 0.75em; left: -1.5em;

            text-decoration: none;
            color: transparent;
            font-size: 1.25em;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            font-weight: 100;
            transition: color 250ms;

            &:hover {
                color: colors.$btn-hover-border-color;
                text-decoration: underline;
            }

            @media (max-width: 960px) {
                left: unset; top: unset;
                right: 1em; bottom: 0.5em;
            }
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

            table, td, tr, th {
                border: 0.08em solid white;
                border-collapse: collapse;
            }

            td, th {
                padding: 0.25em 0.5em;
            }

            img {
                display: block;
                width: fit-content;
                max-width: 30em;
                margin-inline: auto;
                margin-block: 1em;
                border: 0.1em dashed colors.$primary-color-alpha25;
            }

            code {
                font-family: 'techmino-monospace', 'JetBrains Mono', 'Source Code Pro', monospace;
                background-color: black;
                border-radius: 0.5em;
                padding: 0.1em 0.2em;
            }

            pre code {
                display: block;
                padding: 0.25em 0.5em;
                width: fit-content;
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