<template>
    <span
        :class="{
            'rank-b': rank === Rank.B,
            'rank-a': rank === Rank.A,
            'rank-s': rank === Rank.S,
            'rank-u': rank === Rank.U,
            'rank-x': rank === Rank.X,
            'rank': true
        }"
        v-text="RANK_TO_CHAR_MAP[rank]"
        :title="$t(`map.tooltip.rank.${Rank[rank]}`)"
    ></span>
</template>

<script lang="ts" setup>
import { Rank } from '~/assets/types/map';

const props = defineProps({
    rank: {
        type: Number as PropType<Rank>,
        required: true
    }
});

const RANK_TO_CHAR_MAP = {
    [Rank.X]: '\u{F00B4}',
    [Rank.U]: '\u{F00B5}',
    [Rank.S]: '\u{F00C2}',
    [Rank.A]: '\u{F00B6}',
    [Rank.B]: '\u{F00B7}',
    [Rank.Q]: '\u{F0012}',
};
</script>

<style scoped lang="scss">
@use '~/assets/scss/colors';

.rank {
    width: fit-content;
    height: fit-content;
    font-family: 'techmino-proportional';
    text-shadow: -0.082ch 0.0462em colors.$rank-shadow-color;
    color: white;

    user-select: none;
    cursor: help;

    &.rank-x { color: colors.$rank-color-x }
    &.rank-u { color: colors.$rank-color-u }
    &.rank-s { color: colors.$rank-color-s }
    &.rank-a { color: colors.$rank-color-a }
    &.rank-b { color: colors.$rank-color-b }
}
</style>