<script setup lang="ts">
import { type FAQEntry, Tag, FilterMode } from '~/assets/types/faq';
import * as faq from '~/assets/data/faq';

const faqEntries = faq.default;

function filter(tag: Tag, mode: FilterMode) {
    const faqElement = document.getElementById('faq');

    if(!faqElement) return console.error("Could not filter: FAQ Element is null!");

    const showClass = `show-${tag.toLowerCase()}`;
    const hideClass = `hide-${tag.toLowerCase()}`;

    switch(mode) {
        case FilterMode.exclude:
            faqElement.classList.add(hideClass);
            faqElement.classList.remove(showClass);
            break;
        case FilterMode.include:
            faqElement.classList.add(showClass);
            faqElement.classList.remove(hideClass);
            break;
        case FilterMode.all:
            faqElement.classList.remove(showClass, hideClass);
            break;
        default:
            return mode as never; // Exhaustive check
    }
}
</script>
<template>
    <div class="faq-outer">
        <Title>{{ $t('faq.tabTitle') }}</Title>
        <Meta property="og:title" :content="$t('faq.tabTitle')" />
        <h1 class="center-text">{{ $t('faq.title') }}</h1>
        <main class="entries" id="faq">
            <FaqTagFilter @filter="filter" />
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
@use "~/assets/scss/consts";

.faq-outer {
    padding: 1em 2em;

    @media (max-width: #{consts.$faq-collapse-width}) {
        padding-inline: 1em;
    }

    .entries {
        display: flex;
        flex-direction: column;
        width: fit-content;
        margin-inline: auto;
        max-width: 50em;
        gap: 2em;
    }

    // Question tag filters
    .entries.show-techmino      .question:not(.techmino),
    .entries.show-galaxy        .question:not(.galaxy),
    .entries.show-linux         .question:not(.linux),
    .entries.show-apple         .question:not(.apple),
    .entries.show-multiplayer   .question:not(.multiplayer),
    .entries.show-error         .question:not(.error),
    .entries.show-bot           .question:not(.bot),
    .entries.hide-techmino      .question.techmino,
    .entries.hide-galaxy        .question.galaxy,
    .entries.hide-linux         .question.linux,
    .entries.hide-apple         .question.apple,
    .entries.hide-multiplayer   .question.multiplayer,
    .entries.hide-error         .question.error,
    .entries.hide-bot           .question.bot
    { display: none; }
}
</style>