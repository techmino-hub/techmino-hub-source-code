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
        <SubmissionInputGraph :stats="keyDurationStats" />
        <SubmissionKpsGraph :replay="parsedReplay" />
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
@use '~/assets/scss/colors.scss' as colors;

.analysis {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    text-align: center;
    padding: 0em 2em;
    margin-block-start: 2em;
    border: 0.15em solid colors.$secondary-color;
    border-radius: 1em;
    background-color: colors.$secondary-color-alpha25;
}

.parsed {
    display: flex;
    flex-direction: row;
    gap: 1em;
    margin-block-end: 1em;
    align-items: center;

    textarea {
        display: inline;
        flex-grow: 1;
        height: 2em;
        padding-block: 0;
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