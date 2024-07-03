<template>
    <ul class="rank-reqs">
        <li>
            <MapRank :rank="Rank.X" />
            <span>{{ $tf(`modes.${mode.name}.rankReqs.5`, "map.impossibleRankReq") }}</span>
        </li>
        <li>
            <MapRank :rank="Rank.U" />
            <span>{{ $tf(`modes.${mode.name}.rankReqs.4`, "map.impossibleRankReq") }}</span>
        </li>
        <li>
            <MapRank :rank="Rank.S" />
            <span>{{ $tf(`modes.${mode.name}.rankReqs.3`, "map.impossibleRankReq") }}</span>
        </li>
        <li>
            <MapRank :rank="Rank.A" />
            <span>{{ $tf(`modes.${mode.name}.rankReqs.2`, "map.impossibleRankReq") }}</span>
        </li>
        <li>
            <MapRank :rank="Rank.B" />
            <span>{{ $tf(`modes.${mode.name}.rankReqs.1`, "map.impossibleRankReq") }}</span>
        </li>
        <li>
            <MapRank :rank="Rank.Q" />
            <span>{{ $tf(`modes.${mode.name}.rankReqs.0`, "map.impossibleRankReq") }}</span>
        </li>
    </ul>
</template>

<script lang="ts" setup>
import { type Mode, Rank } from '~/assets/types/map';

const props = defineProps({
    mode: {
        type: Object as PropType<Mode>,
        required: true
    }
});
</script>

<style scoped lang="scss">
@use '~/assets/scss/colors';

ul.rank-reqs {
    display: flex;
    flex-direction: column;
    max-height: fit-content;
    gap: 0.3em;
    list-style-type: none;
    padding: 0.3em 0.5em;
    margin: 0;
    overflow: auto;
    font-size: 1.126em;
    flex-shrink: 2;

    background-color: colors.$rank-reqs-bg-color;
    border: 0.1em solid colors.$rank-reqs-border-color;
    border-radius: 0.5em;

    li {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding-inline: 0.25em;

        &:not(:last-child) {
            border-bottom: 0.1em solid colors.$rank-reqs-border-color;
            padding-bottom: 0.3em;
        }
        
        .rank {
            font-size: 1.26em;
        }
    }
}
</style>