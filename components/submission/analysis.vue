<template>
    <div class="analysis hide-noscript">
        <h2>
            {{ $t('submission.analysis.title') }}
        </h2>
        <i18n-t
          keypath="submission.analysis.parsed"
          scope="global"
          tag="div"
          class="parsed">
            <textarea readonly v-text="JSON.stringify(parsedReplay)"></textarea>
        </i18n-t>
        <i18n-t
          keypath="submission.analysis.fingerprint"
          scope="global"
          tag="div"
          class="parsed">
            <textarea readonly v-text="inputFingerprint"></textarea>
        </i18n-t>
        <i>{{ $t('submission.analysis.fingerprintDesc') }}</i>
        <br>
        <SubmissionInputGraph
            :stats="keyDurationStats"
            :max="3 * Math.max(parsedReplay.setting.das ?? 8, parsedReplay.setting.sddas ?? 4)"
        />
        <SubmissionKpsGraph
            :replay="parsedReplay"
        />
    </div>
</template>

<script lang="ts" setup>
import { getInputFingerprint, getReplayKeyDurationStats } from '~/assets/scripts/replay/analyzer';
import { parseReplayFromRepString } from 'techmino-replay-parser';

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
@use '~/assets/scss/colors';
@use '~/assets/scss/consts';

.analysis {
    position: relative;
    display: flex;
    flex-direction: column;
    max-width: 100vw;
    flex-grow: 1;
    text-align: center;
    padding-inline: 1em;
    margin-block-start: 2em;
    border: 0.15em solid colors.$secondary-color;
    border-radius: 1em;
    background-color: colors.$secondary-color-alpha25;

    @media (max-width: #{consts.$submission-analysis-collapse-width}) {
        padding-inline: 0;
        border-radius: 0;
        border: 0 none transparent;
        background-color: transparent;
    }
}

.parsed {
    display: flex;
    flex-direction: row;
    gap: 1em;
    margin-block-end: 1em;
    align-items: center;
    text-align: start;

    textarea {
        display: inline;
        flex-grow: 1;
        font-size: 1em;
        height: 1.5em;
        overflow-x: auto;
        overflow-y: hidden;

        // unfortunately scrollbar-gutter doesn't affect horizontal scrollbars
        // so we have to use 1em of padding
        padding-block: 0 1em;
        
        text-wrap: nowrap;
        white-space: nowrap;
        resize: none;
        background-color: black;
        color: white;
        border: 0.1em solid white;
    }
}

br {
    margin-block-end: 1em;
}

.graph-outer {
    margin-block-end: 2em;
    border: 0.1em solid colors.$secondary-color;
    border-radius: 2em;
}
</style>