<template>
    <div class="page-outer" :aria-busy="loading">
        <Title>{{ $t('submit.tabTitle') }}</Title>
        <Meta property="og:title" :content="$t('submit.tabTitle')" />
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
            <form v-else @submit.prevent="uploadSubmission">
                <div class="row">
                    <label for="replay">{{ $t('submit.importReplay') }}</label>
                    <input
                        type="text"
                        name="replay"
                        id="replay"
                        v-model.lazy="replayTrim"
                        :placeholder="$t('submit.placeholder')"
                        @change="processReplay"
                    />
                </div>
                <p class="err" v-show="repMsg.length > 0">{{ repMsg }}</p>
                <div class="row">
                    <label for="gameMode">{{ $t('submit.gameMode') }}</label>
                    <select name="gameMode" id="gameMode" v-model="selMode" required="true">
                        <option
                          v-for="[mode, recordSchema] in Object.entries(RECORD_SCHEMAS)"
                          :key="mode"
                          :value="mode">
                            {{ getModeI18nString(mode, $t) }}
                        </option>
                    </select>
                </div>
                <p v-show="selMode">
                    {{ $t('submit.scoreDesc') }}
                </p>
                <div
                  v-if="selMode"
                  v-for="[index, entry] in Object.entries(RECORD_SCHEMAS[selMode].entries)"
                  :key="index"
                  class="row">
                    <label :for="entry.name">
                        {{ getFieldI18nString(entry.name) }}
                    </label>
                    <SubmissionFormInput
                        v-if="entry.name !== 'time'"
                        :type="
                            $te(`submit.transform.${entry.name}`) ?
                            'text' :
                            entry.type
                        "
                        :convert-to-number="
                            $te(`submit.transform.${entry.name}`)
                        "
                        :name="entry.name"
                        :id="entry.name"
                        required="true"
                        :transformer="
                            $te(`submit.transform.${entry.name}`) ?
                            (
                                (s: string) => $t(
                                    `submit.transform.${entry.name}`, {
                                        value: s
                                    }
                                )
                            ) : ((s: string) => s)
                        "
                        :message="
                            $te(`submit.transform.${entry.name}`) && score[index] ?
                            (
                                $t('submit.parsedAs', {
                                    value: $t(`leaderboard.scoreDisp.${entry.name}`, {
                                        value: score[index]
                                    })
                                })
                            )
                            : ''
                        "
                        @change="(v) => { score[index] = v }"
                    />
                    <SubmissionDurationInput
                        v-else
                        :id="entry.name"
                        :name="entry.name"
                        required="true"
                        @change="(v) => { score[index] = v }"
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
                        required="true"
                        min="2019-06-26T00:00"
                        :max="new Date().toISOString().slice(0, 16)"
                    />
                </div>
                <div class="row">
                    <label for="isTAS">{{ $t('submit.isTAS') }}</label>
                    <input
                        type="checkbox"
                        name="isTAS"
                        id="isTAS"
                        v-model="isTAS"
                        :readonly="forcedTAS"
                        :disabled="forcedTAS"
                    >
                </div>
                <p>
                    <label for="proof">{{ $t('submit.proof') }}</label>
                </p>
                <textarea
                    class="row"
                    name="proof"
                    id="proof"
                    maxlength="255"
                    v-model.lazy="proof"
                    :placeholder="$t('submit.placeholder')"
                    :required="!hasReplay"
                ></textarea>
                <button v-show="selMode" class="web-btn" type="submit" :disabled="uploadBlocked">
                    {{ $t('submit.submit') }}
                </button>
                <p class="err" v-if="errMsg.length > 0">{{ errMsg }}</p>
            </form>
        </ClientOnly>
    </div>
</template>

<script lang="ts" setup>
import { RECORD_SCHEMAS } from '~/assets/data/record-schemas';
import { getModeI18nString } from '~/assets/scripts/modes';
import type { User } from '@supabase/supabase-js';
import { AccountState, SubmissionValidity, type Profile, type Submission } from '~/assets/types/database';
import { parseReplayFromRepString } from 'techmino-replay-parser';

const database = useDatabase();
const i18n = useI18n();
const router = useRouter();
const localePath = useLocalePath();

const loading = ref(true);
const user = ref<User | null>(null);
const profile = ref<Profile | null>(null);
const selMode = ref<string | null>(null);
const repDate = ref<Date | null>(null);
const replay = ref<string | null>(null);
const replayTrim = computed({
    get: () => replay.value?.trim() ?? null,
    set: (value: string | null) => {
        replay.value = value?.trim() ?? null;
    }
})
const repDateStr = computed({
    get: () => repDate.value?.toISOString().slice(0, 16),
    set: (value: string | undefined) => {
        if(value) {
            repDate.value = new Date(
                new Date(value).getTime()
                - new Date().getTimezoneOffset() * 60000
            );
        } else {
            repDate.value = null;
        }
    }
});
const score: Ref<Record<string, string | number>> = ref({});
const proof = ref<string | null>(null);
const isTAS = computed({
    get: () => _isTAS.value || forcedTAS.value,
    set: (value: boolean) => {
        _isTAS.value = (
            forcedTAS.value ?
            true :
            value
        );
    }
});
const _isTAS = ref(false);
const forcedTAS = ref(false);
const hasReplay = ref(false);
const repMsg = ref("");
const errMsg = ref("");
const uploadBlocked = ref(false);

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
        isTAS.value = replayData.tasUsed ?? false;
        forcedTAS.value = replayData.tasUsed ?? false;
    } catch {
        repMsg.value = i18n.t('submit.invalidReplay');
        hasReplay.value = false;
        return;
    }

    repMsg.value = "";
    hasReplay.value = true;
}

function getFieldI18nString(name: string) {
    if(i18n.te(`submit.field.${name}`)) {
        return i18n.t(`submit.field.${name}`);
    } else if(i18n.te(`leaderboard.header.${name}`)) {
        return i18n.t(`leaderboard.header.${name}`);
    } else {
        return name;
    }
}

function getSubmission(): Submission | null {
    let partial: Partial<Submission> = {};
    
    partial.id = "00000000-0000-0000-0000-000000000000"; // DB will replace it

    if(!selMode.value) return null;
    partial.game_mode = selMode.value;

    if(!RECORD_SCHEMAS[selMode.value]) return null;
    partial.score = {};
    for(const [index, entry] of Object.entries(RECORD_SCHEMAS[selMode.value].entries)) {
        if(score.value[index] === undefined || score.value[index] === null) return null;


        if(entry.type === 'number') {
            if(isNaN(Number(score.value[index]))) return null;
        }

        partial.score[index] = score.value[index];
    }

    partial.upload_date = new Date().toISOString();

    if(!repDate.value) return null;
    partial.replay_date = repDate.value.toISOString();


    if(!user.value) return null;
    partial.submitted_by = user.value.id;

    if(isTAS.value) {
        partial.validity = SubmissionValidity.ToolAssisted;
    } else {
        partial.validity = SubmissionValidity.Unverified;
    }

    if(!hasReplay.value && (!proof.value || proof.value.length === 0)) {
        return null;
    }

    partial.proof = proof.value;

    return partial as Submission;
}

async function uploadSubmission() {
    if(uploadBlocked.value) return;

    uploadBlocked.value = true;
    errMsg.value = "";

    const submission = getSubmission();

    if(!submission) {
        errMsg.value = i18n.t('submit.errorIncomplete');
        uploadBlocked.value = false;
        return;
    }

    let submissionUploaded = false;
    let success = true;
    let id = '';

    try {
        ({ id } = await database.createSubmission(submission));

        submissionUploaded = true;

        if(hasReplay.value && replay.value && replay.value.length > 0) {
            await database.createReplay(id, replay.value);
        }
    } catch(e) {
        success = false;
        let errStr = i18n.t('submit.errUnknown');

        if(typeof e === 'string') {
            errStr = e;
        } else if(
            e &&
            typeof e === 'object' &&
            'message' in e &&
            typeof e.message === 'string'
        ) {
            errStr = e.message;
        }

        const tkey =
            submissionUploaded ?
            'submit.errorRep' :
            'submit.errorSub';

        errMsg.value = i18n.t(tkey, { error: errStr });
    }

    if(success) {
        errMsg.value = '';
        router.push(localePath(`/leaderboard/${id}`));
    }

    uploadBlocked.value = false;
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

form {
    display: flex;
    flex-direction: column;
    width: fit-content;
    margin-inline: auto;
}

.row {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    gap: 5ch;
    row-gap: 0.5em;
    margin-block: 0.5em;
    align-items: center;
}

p {
    max-width: 50ch;
    text-wrap: pretty;
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

input {
    font-family: 'techmino-monospace';
    background-color: black;
    color: white;
    border: 0.1em solid colors.$primary-color;
    padding: 0.5em 1ch;
    border-radius: 0.5em;
    transition: border-color 250ms, box-shadow 150ms;

    &:hover {
        border-color: colors.$btn-hover-border-color;
        box-shadow: 0 0 0.5ch colors.$btn-hover-box-shadow-color;
    }

    &:focus {
        border-color: colors.$btn-active-border-color;
        box-shadow: 0 0 1ch colors.$btn-active-box-shadow-color;
    }
}

input[readonly] {
    border-color: colors.$error-color;
    box-shadow: none !important;
    cursor: not-allowed;
}

textarea {
    min-width: 50ch;
    width: stretch;
    height: 10em;
    resize: none;
    background-color: black;
    color: white;
    border: 0.15em solid colors.$primary-color;
    border-radius: 1em;
    padding: 0.75em 1ch;
    transition: border-color 250ms, box-shadow 150ms;

    &:hover {
        border-color: colors.$btn-hover-border-color;
        box-shadow: 0 0 1ch colors.$btn-hover-box-shadow-color;
    }

    &:focus {
        border-color: colors.$btn-active-border-color;
        box-shadow: 0 0 2ch colors.$btn-active-box-shadow-color;
    }
}

.err {
    color: red;
    margin-block-start: 0;
}
</style>