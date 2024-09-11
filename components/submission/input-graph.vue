<template>
    <div class="hide-noscript graph-outer">
        <h3>{{ $t('submission.analysis.inputGraph.title') }}</h3>
        <div>
            <canvas ref="inputCanvas">
                {{ $t('submission.analysis.noCanvas') }}
            </canvas>
        </div>
    </div>
</template>

<script lang="ts" setup>
import type { KeyDurationStats } from '~/assets/scripts/replay/analyzer';
import { InputKey } from 'techmino-replay-parser';
import { Chart, registerables } from "chart.js";
import { ViolinChart } from '@sgratzl/chartjs-chart-boxplot';
import { type ChartDataset } from 'chart.js';

const props = defineProps({
    stats: {
        type: Object as PropType<KeyDurationStats>,
        required: true
    },
    max: {
        type: Number,
        default: 12
    }
});

const i18n = useI18n();

const filteredKeys: InputKey[] = [];

for(const key of Object.values(InputKey)) {
    if(typeof key === 'string') continue;
    if(key === InputKey.Invalid) continue;
    if(props.stats[key].presses < 1) continue;
    filteredKeys.push(key);
}

const labels = filteredKeys.map(key => i18n.t(`submission.analysis.inputGraph.label.${key}`));

const dataset: ChartDataset<"violin"> = {
    data: filteredKeys.map(key => (
        Object.entries(props.stats[key].durations)
            .map(([duration, instances]) => (
                new Array(instances).fill(Number(duration))
            ))
            .flat()
    ))
};

Chart.register(...registerables);

const inputCanvas: Ref<HTMLCanvasElement | null> = ref(null);

onMounted(function() {
    if(inputCanvas.value === null) return;

    const ctx = inputCanvas.value.getContext('2d');
    if(ctx === null) return;

    new ViolinChart(ctx, {
        data: {
            labels,
            datasets: [dataset]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            interaction: {
                intersect: false,
                mode: "x",
            },
            plugins: {
                legend: { display: false }
            },
            scales: {
                x: {
                    ticks: {
                        color: 'white'
                    }
                },
                y: {
                    ticks: {
                        color: 'white'
                    },
                    max: props.max
                }
            }
        }
    });
})
</script>

<style lang="scss" scoped>
canvas {
    max-width: 100vw;
    height: 100%;
    min-height: 20em;
}
</style>