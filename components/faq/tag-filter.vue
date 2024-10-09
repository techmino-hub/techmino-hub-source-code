<script setup lang="ts">
import { Tag, FilterMode } from '~/assets/types/faq';

const emits = defineEmits<{
    filter: [tag: Tag, mode: FilterMode]
}>();

onMounted(function() {
    for(const tag of Object.values(Tag)) {
        for(const mode of Object.values(FilterMode)) {
            const id = `tag-${tag.toLowerCase()}-${mode}`;
            const element = document.getElementById(id) as HTMLInputElement | null;

            if(element === null) {
                console.error(`Could not find element with ID ${id}`);
                continue;
            }

            element.addEventListener('input', function() {
                emits('filter', tag, mode);
            });
        }
    }
})
</script>

<template>
    <details class="hide-noscript-important">
        <summary>{{ $t('faq.filter.title') }}</summary>
        <ul>
            <li v-for="tag in Tag">
                <FaqTag :tag="tag" />
                <div class="radio-wrapper">
                    <input type="radio" :name="$t(`faq.tags.${tag}`)" :id="`tag-${tag}-exclude`" value="exclude">
                    <label :for="`tag-${tag}-exclude`">{{ $t('faq.filter.exclude') }}</label>

                    <input type="radio" :name="$t(`faq.tags.${tag}`)" :id="`tag-${tag}-all`" value="all" checked>
                    <label :for="`tag-${tag}-all`">{{ $t('faq.filter.all') }}</label>

                    <input type="radio" :name="$t(`faq.tags.${tag}`)" :id="`tag-${tag}-include`" value="include">
                    <label :for="`tag-${tag}-include`">{{ $t('faq.filter.include') }}</label>
                </div>
            </li>
        </ul>
    </details>
</template>

<style scoped lang="scss">
@use '~/assets/scss/colors';
details {
    background-color: #00000088;
    border: 0.1em solid colors.$primary-color;
    border-radius: 0.5em;
    padding: 0.5em 1em;
    font-size: 1.25em;

    ul {
        display: flex;
        flex-direction: column;
        padding: 0.5em 1em;

        li {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            gap: 1em;
            flex-wrap: wrap;
            row-gap: 0.5em;

            &:not(:last-child) {
                padding-bottom: 0.5em;
                border-bottom: 0.1em dashed colors.$primary-color-alpha25;
                margin-bottom: 0.5em;
            }

            @media (max-width: 750px) {
                flex-direction: column;
                align-items: center;
            }

            .radio-wrapper {
                display: flex;
                flex-direction: row;
                flex-wrap: wrap;
                align-items: center;

                label {
                    transition: color 250ms;

                    &:hover {
                        color: colors.$btn-hover-border-color;
                    }

                    &:active {
                        color: colors.$btn-active-border-color;
                    }

                    &:not(:last-child) {
                        padding-inline: 0.25em 0.5em;
                        margin-inline-end: 0.25em;
                        border-inline-end: 0.1em solid colors.$primary-color-alpha25;
                    }
                }
            }
        }
    }
}
</style>