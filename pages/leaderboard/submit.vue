<template>
    <div class="page-outer">
        <Title>{{ $t('submit.tabTitle') }}</Title>
        <h1>{{ $t('submit.title') }}</h1>
        <noscript>{{ $t('submit.noscriptWarn') }}</noscript>
        <ClientOnly>
            <p v-if="loading">
                {{ $t('submit.loading') }}
            </p>
            <p v-else-if="!profile">
                {{ $t('submit.loggedOut') }}
            </p>
            <p v-else-if="profile.account_state !== AccountState.Normal">
                {{ $t(`submit.badState.${profile.account_state}`) }}
            </p>
            <div v-else>
                <div class="row">
                    <label for="replay">{{ $t('submit.importReplay') }}</label>
                    <input
                        type="text"
                        name="replay"
                        id="replay"
                        v-model.lazy="replay"
                        @change="processReplay"
                    />
                    <span>{{ repMsg }}</span>
                </div>
                <div class="row">
                    <label for="gameMode">{{ $t('submit.gameMode') }}</label>
                    <select name="gameMode" id="gameMode" v-model="selMode">
                        <option
                          v-for="[mode, recordSchema] in Object.entries(RECORD_SCHEMAS)"
                          :key="mode"
                          :value="mode">
                            {{ getModeI18nString(mode, $t) }}
                        </option>
                    </select>
                </div>
                <p v-if="selMode">
                    {{ $t('submit.scoreDesc') }}
                </p>
                <div
                  v-if="selMode"
                  v-for="[index, entry] in Object.entries(RECORD_SCHEMAS[selMode].entries)"
                  :key="index"
                  class="row">
                    <label :for="entry.name">
                        {{ $t(`leaderboard.header.${entry.name}`) }}
                    </label>
                    <input
                      :type="entry.type"
                      :name="entry.name"
                      :id="entry.name"
                    />
                </div>
                <div class="row">
                    <label for="replayDate">{{ $t('submit.replayDate') }}</label>
                    <input
                      type="datetime-local"
                      name="replayDate"
                      id="replayDate"
                      v-model.lazy="repDateStr"
                      :readonly="hasReplay"
                    />
                </div>
                <p v-if="selMode">
                    <label for="proof">{{ $t('submit.proof') }}</label>
                </p>
                <textarea v-if="selMode" name="proof" id="proof" v-model="proof"></textarea>
            </div>
        </ClientOnly>
    </div>
</template>

<script lang="ts" setup>
import { RECORD_SCHEMAS } from '~/assets/data/record-schemas';
import { getModeI18nString } from '~/assets/scripts/modes';
import type { User } from '@supabase/supabase-js';
import { AccountState, type Profile } from '~/assets/types/database';
import { parseReplayFromRepString } from '~/assets/scripts/replay/parser';

const database = useDatabase();
const i18n = useI18n();

const loading = ref(true);
const user = ref<User | null>(null);
const profile = ref<Profile | null>(null);
const selMode = ref<string | null>(null);
const repDate = ref<Date | null>(null);
const replay = ref<string | null>(null);
const repDateStr = computed({
    get: () => repDate.value?.toISOString().slice(0, 16),
    set: (value: string | undefined) => {
        if(value) {
            repDate.value = new Date(value);
        } else {
            repDate.value = null;
        }
    }
});
const proof = ref<string | null>(null);
const hasReplay = ref(false);
const repMsg = ref<string>("");

async function processReplay() {
    if(!replay.value || replay.value.length === 0) {
        repMsg.value = "";
        hasReplay.value = false;
        return;
    }

    try {
        const replayData = await parseReplayFromRepString(replay.value);

        if(!RECORD_SCHEMAS[replayData.mode]) throw new Error('Invalid mode');

        selMode.value = replayData.mode;
        repDateStr.value = replayData.date;
        console.debug(repDateStr.value); // DEBUG
    } catch {
        repMsg.value = i18n.t('submit.invalidReplay');
        hasReplay.value = false;
        return;
    }

    repMsg.value = i18n.t('submit.imported');
    hasReplay.value = true;
}

onMounted(async function() {
    user.value = (await database.supabase.auth.getUser()).data.user;

    if(user.value) {
        profile.value = (await database.getProfileById(user.value.id));
    }

    loading.value = false;
});
</script>

<style lang="scss" scoped>
@use '~/assets/scss/colors';

.page-outer {
    padding: 2em;
    font-family: 'techmino-proportional';
}

h1 {
    margin-block: 0 0.25em;
    padding-block-end: 0.15em;
    border-block-end: 0.026em solid colors.$sb-underline-color;
}

.row {
    display: flex;
    flex-direction: row;
    gap: 1em;
    margin-block: 0.5em;
    align-items: center;
}

select {
    font-family: 'techmino-proportional';
    background-color: black;
    color: white;
    border: 0.15em solid colors.$primary-color;
    border-radius: 0.5em;
    padding: 0.25em 0.5em;
    font-size: 1em;
}
</style>