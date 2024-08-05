<template>
    <div class="hide-noscript graph-outer">
        <h3>{{ $t('submission.analysis.kpsGraph.title') }}</h3>
        <div>
            <canvas ref="kpsGraph">
                {{ $t('submission.analysis.noCanvas') }}
            </canvas>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { getUsedKeys, getReplayLength, getReplayKps, getReplayLocalKps } from '~/assets/scripts/replay/analyzer';
import { InputKey, type GameReplayData } from '~/assets/types/replay';
import { Chart, registerables } from "chart.js";
import { type ChartDataset } from 'chart.js';

const props = defineProps({
    replay: {
        type: Object as PropType<GameReplayData>,
        required: true
    }
});

const i18n = useI18n();

Chart.register(...registerables);

const datasets: ChartDataset<'line'>[] = [];

const STEP = 6;

datasets.push({
    label: i18n.t('submission.analysis.inputGraph.label.0'),
    data: getReplayLocalKps(props.replay, undefined, STEP),

});

for(const key of getUsedKeys(props.replay)) {
    const localKps = getReplayLocalKps(props.replay, key, STEP);

    datasets.push({
        label: i18n.t(`submission.analysis.inputGraph.label.${key}`),
        data: localKps,
    });
}

const kpsGraph: Ref<HTMLCanvasElement | null> = ref(null);

onMounted(function() {
    const ctx = kpsGraph.value?.getContext('2d');
    if(!ctx) return;

    let labels = [];

    const repLen = getReplayLength(props.replay);
    for(let i = 0; i < Math.ceil(repLen / STEP); i++) {
        labels.push(((i - 180 / STEP) / 60 * STEP).toFixed(2));
    }

    new Chart(ctx, {
        type: 'line',
        data: {
            labels,
            datasets
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: {
                    title: {
                        display: true,
                        text: i18n.t('submission.analysis.kpsGraph.xAxis'),
                        color: 'white'
                    },
                    ticks: {
                        color: 'white'
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: i18n.t('submission.analysis.kpsGraph.yAxis'),
                        color: 'white'
                    },
                    ticks: {
                        color: 'white'
                    },
                    beginAtZero: true,
                }
            },
        }
    });
})
</script>

<style lang="scss" scoped>
canvas {
    min-width: 50em;
    min-height: 20em;
}
</style>