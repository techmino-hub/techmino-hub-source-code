<template>
    <div class="page-outer">
        <Title>{{ $t('submission.tabTitle', {
            mode: getModeI18nString(submission.game_mode, $t)
        }) }}</Title>
        <Meta property="og:title" :content="$t('submission.tabTitle', {
            mode: getModeI18nString(submission.game_mode, $t)
        })" />
        <h1>
            {{ $t('submission.title')}}
        </h1>
        <i18n-t
          keypath="submission.fields.author"
          scope="global"
          tag="span">
            <ProfileLink
                :profile="submission.submitted_by"
            />
        </i18n-t>
        <div class="content">
            <main>
                <ul>
                    <i18n-t
                      keypath="submission.fields.gameMode"
                      scope="global"
                      tag="li">
                        {{ getModeI18nString(submission.game_mode, $t) }}
                    </i18n-t>
                    <i18n-t
                      v-if="submission.score"
                      v-for="(entry, index) in RECORD_SCHEMAS[submission.game_mode].entries"
                      keypath="submission.fields.score"
                      scope="global"
                      tag="li">
                        <span>
                            {{ $t(`leaderboard.header.${entry.name}`) }}
                        </span>
                        <span>
                            {{
                                $te(`leaderboard.scoreDisp.${entry.name}`) ?
                                $t(`leaderboard.scoreDisp.${entry.name}`, {
                                    value: submission.score[index]
                                }) : submission.score[index]
                            }}
                        </span>
                    </i18n-t>
                    <i18n-t
                      keypath="submission.fields.replayDate"
                      scope="global"
                      tag="li">
                        {{
                            new Date(submission.replay_date)
                                .toLocaleString($i18n.locale)
                        }}
                    </i18n-t>
                    <i18n-t
                      keypath="submission.fields.uploadDate"
                      scope="global"
                      tag="li">
                        {{
                            new Date(submission.upload_date)
                                .toLocaleString($i18n.locale)
                        }}
                    </i18n-t>
                </ul>
                <h4>
                    {{ $t(`submission.validityInfo.${submission.validity}`) }}
                </h4>
                <i18n-t
                  v-if="submission.proof && submission.proof.length > 0"
                  keypath="submission.fields.proof"
                  scope="global"
                  tag="div"
                  class="proof">
                    <p>{{ submission.proof }}</p>
                </i18n-t>
            </main>
            <aside>
                <i18n-t
                  v-if="'replay_data' in submission"
                  keypath="submission.fields.replayData"
                  scope="global"
                  tag="div"
                  class="replay-box">
                    <div>
                        <textarea readonly
                            aria-hidden="true"
                            v-text="submission.replay_data"
                        ></textarea>
                        <button
                            type="button"
                            class="web-btn hide-noscript"
                            :disabled="copyBlocked"
                            @click="copyReplay">
                            {{ copyText }}
                        </button>
                    </div>
                </i18n-t>
            </aside>
        </div>
        <div class="bottom hide-noscript">
            <SubmissionAnalysis
                v-if="'replay_data' in submission"
                :replay-data="submission.replay_data"
            />
            <SubmissionActions :submission="submission" />
        </div>
    </div>
</template>

<script lang="ts" setup>
import type { User } from '@supabase/supabase-js';
import { RECORD_SCHEMAS } from '~/assets/data/record-schemas';
import { getModeI18nString } from '~/assets/scripts/modes';
import { AccountState, Role, type Profile, type Submission, type SubmissionWithReplay } from '~/assets/types/database';

const database = useDatabase();
const route = useRoute();
const i18n = useI18n();
const id = route.params.id;

const copyBlocked = ref(false);
const copyText = ref(i18n.t('submission.copyReplay'));
const user: Ref<User | null> = ref(null);
const profile: Ref<Profile | null> = ref(null);

const { data } = await useFetch('/api/fetch-submission', {
    query: {
        id,
        with_replay: true
    }
});

const submission = data.value?.data as Submission | SubmissionWithReplay;

if(!submission) {
    throw new Error('Submission not found');
}

function copyReplay() {
    if('replay_data' in submission) {
        navigator.clipboard.writeText(submission.replay_data);

        copyText.value = i18n.t('submission.replayCopied');
        copyBlocked.value = true;

        setTimeout(() => {
            copyBlocked.value = false;
            copyText.value = i18n.t('submission.copyReplay');
        }, 1500);
    }
}

const isModActionPanelVisible = ref(false);

onMounted(async () => {
    user.value = (await database.supabase.auth.getUser()).data.user;

    if(!user.value) {
        isModActionPanelVisible.value = false;
        return;
    }

    profile.value = await database.getProfileById(user.value.id);

    if(profile.value.account_state !== AccountState.Normal) {
        isModActionPanelVisible.value = false;
        return;
    }

    if(user.value.id === submission.submitted_by) {
        isModActionPanelVisible.value = true;
        return;
    }

    if(profile.value.role === Role.Admin || profile.value.role === Role.Verifier) {
        isModActionPanelVisible.value = true;
        return;
    }
});
</script>

<style lang="scss" scoped>
@use '~/assets/scss/colors';

.page-outer {
    padding: 2em;
    font-family: 'techmino-proportional';
}

div.content {
    display: grid;
    grid-template-columns: 3fr 1fr;
    gap: 2em;

    @media (max-width: 900px) {
        display: flex;
        flex-direction: column;
    }
}

h1 {
    margin-block: 0 0.25em;
    padding-block-end: 0.15em;
    border-block-end: 0.026em solid colors.$sb-underline-color;
}

ul {
    font-size: 1.2em;
}

aside {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.proof {
    margin-block-start: 1em;

    @media (max-width: 900px) {
        margin-block-end: 1em;
    }

    p {
        width: fit-content;
        background-color: colors.$sb-proof-bg-color;
        color: colors.$sb-proof-text-color;
        border: 0.1em solid colors.$sb-proof-border-color;
        border-radius: 0.5em;
        padding: 0.5em 1em;
    }
}

.replay-box {
    display: flex;
    box-sizing: border-box;
    width: 100%;
    max-width: 16em;
    flex-direction: column;
    text-align: center;
    gap: 0.5em;
    font-size: 1.426em;
    background-color: black;
    border: 0.062em solid colors.$sb-replay-border-color;
    border-radius: 0.5em;
    padding: 1em;

    > div {
        display: flex;
        flex-direction: column;
        font-size: 0.8em;
    }
    
    textarea {
        background-color: colors.$sb-replay-bg-color;
        color: colors.$sb-replay-text-color;
        border: 0.1em solid colors.$sb-replay-border-color;
        height: 12em;
        user-select: all;
        font-size: 0.5em;
        resize: none;
    }

    button {
        margin-block-start: 0.75em;
    }
}

.bottom {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    gap: 2ch;
}
</style>