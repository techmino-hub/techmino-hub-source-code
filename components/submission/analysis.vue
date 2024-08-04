<template>
    <div class="analysis hide-noscript">
        <h2>
            {{ $t('submission.analysis.title') }}
        </h2>
        <div class="graph">

        </div>
    </div>
</template>

<script lang="ts" setup>
import { getInputFingerprint, getReplayKeyDurationStats } from '~/assets/scripts/replay/analyzer';
import { parseReplayFromRepString } from '~/assets/scripts/replay/parser';

const props = defineProps({
    replayData: {
        type: String,
        required: true
    }
});

const parsedReplay = await parseReplayFromRepString(props.replayData);
const keyDurationStats = getReplayKeyDurationStats(parsedReplay);
const inputFingerprint = getInputFingerprint(keyDurationStats);
</script>

<style lang="scss" scoped>
@use '~/assets/scss/colors.scss' as colors;

.analysis {
    padding: 0em 2em;
    margin-block-start: 2em;
    border: 0.15em solid colors.$secondary-color;
    border-radius: 1em;
    background-color: colors.$secondary-color-alpha25;

    
}
</style>