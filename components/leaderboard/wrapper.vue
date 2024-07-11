<template>
  <div>
    <select
      v-if="!props.gameMode"
      v-model="gameModeSelection">
        <option
          v-for="gameMode in Object.keys(RECORD_SCHEMAS)"
          :key="gameMode"
          :value="gameMode">
            {{ $t(`modes.${gameMode}`) }}
        </option>
    </select>
    <!-- TODO: add dropdowns for validity, limit, add next/back for offset -->
    <LeaderboardTable
        :gameMode="gameMode"
        :validity="validity"
        :limit="limit"
        :offset="offset"
    />
  </div>
</template>

<script lang="ts" setup>
import { SubmissionValidity } from '~/assets/types/database';
import { RECORD_SCHEMAS } from '~/assets/data/record-schemas';

const props = defineProps({
    gameMode: {
        type: String,
        required: false
    },
    validity: {
        type: String as PropType<SubmissionValidity>,
        default: SubmissionValidity.Verified
    },
    limit: {
        type: Number as PropType<number | undefined>,
    },
    offset: {
        type: Number as PropType<number | undefined>,
    }
});

const gameModeSelection = ref('sprint_10l');
const validitySelection = ref(SubmissionValidity.Verified);
const limitSelection = ref(10);
const offsetSelection = ref(0);

const gameMode = computed(() => props.gameMode || gameModeSelection.value);
const validity = computed(() => validitySelection.value);
const limit = computed(() => limitSelection.value);
const offset = computed(() => offsetSelection.value);
</script>

<style>

</style>