<template>
    <div class="hide-noscript graph-outer">
        <h3>{{ $t('submission.analysis.kpsGraph.title') }}</h3>
        <div>
            <canvas ref="kpsGraph">
                {{ $t('submission.analysis.noCanvas') }}
            </canvas>
        </div>
        <p>
            {{ $t('submission.analysis.controls') }}
        </p>
    </div>
</template>

<script lang="ts" setup>
import { getUsedKeys, getReplayLength, getReplayLocalKps } from '~/assets/scripts/replay/analyzer';
import { type GameReplayData } from '~/assets/types/replay';
import { Chart, registerables, type ChartOptions } from "chart.js";
import { type ChartDataset } from 'chart.js';

const props = defineProps({
    replay: {
        type: Object as PropType<GameReplayData>,
        required: true
    }
});

const i18n = useI18n();

const STEP = 30;

const kpsGraph: Ref<HTMLCanvasElement | null> = ref(null);

// Chart.js' types are outdated so I'll have to work around it :/
type ExtChartOptions = ChartOptions & {
    pointStyle: boolean
};

const options: ExtChartOptions = {
    animation: false,
    responsive: true,
    maintainAspectRatio: false,
    pointStyle: false,
    interaction: {
        intersect: false,
        mode: "nearest",
        axis: "x",
    },
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
    plugins: {
        zoom: {
            pan: {
                enabled: true,
                mode: 'x',
            },
            zoom: {
                wheel: {
                    enabled: true,
                    modifierKey: 'ctrl',
                },
                pinch: {
                    enabled: true,
                },
                mode: 'x',
            }
        }
    }
};

onMounted(async function() {
    const ctx = kpsGraph.value?.getContext('2d');
    if(!ctx) return;

    const zoomPlugin = (await import('chartjs-plugin-zoom')).default;

    Chart.register(...registerables, zoomPlugin);

    let labels: string[] = [];

    const repLen = getReplayLength(props.replay);
    for(let i = 0; i < Math.ceil(repLen / STEP); i++) {
        const timeSecs = (i - 180 / STEP) / 60 * STEP;
        labels.push(i18n.t('leaderboard.scoreDisp.time', { value: timeSecs }));
    }

    const datasets: ChartDataset<'line'>[] = [];

    datasets.push({
        label: i18n.t('submission.analysis.inputGraph.label.0'),
        data: getReplayLocalKps(props.replay, undefined, STEP),
        tension: 0,
    });

    for(const key of getUsedKeys(props.replay)) {
        const localKps = getReplayLocalKps(props.replay, key, STEP);

        datasets.push({
            label: i18n.t(`submission.analysis.inputGraph.label.${key}`),
            data: localKps,
            tension: 0,
            hidden: true,
        });
    }


    new Chart(ctx, {
        type: 'line',
        data: {
            labels,
            datasets
        },
        options
    });
})
</script>

<style lang="scss" scoped>
canvas {
    max-width: 100vw;
    min-width: stretch;
    min-height: 20em;
}
</style>