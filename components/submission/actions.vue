<template>
    <div v-show="shouldShow" class="actions hide-noscript">
        <h2>{{ $t('submission.actions.title') }}</h2>
        <div class="row" v-show="isVerifier">
            <select name="" v-model="validity">
                <option v-for="validity in Object.values(SubmissionValidity)" :value="validity">
                    {{ $t(`leaderboard.validity.${validity}`) }}
                </option>
            </select>
            <button class="web-btn" @click="setValidity">
                {{ $t('submission.actions.validate') }}
            </button>
        </div>
        <button class="web-btn delete" v-show="isVerifier || isOwner" @click="onDelete">
            {{ deleteText }}
        </button>
    </div>
</template>

<script lang="ts" setup>
import type { PostgrestError } from '@supabase/supabase-js';
import { AccountState, Role, type Submission, type SubmissionWithReplay, SubmissionValidity } from '~/assets/types/database';

const props = defineProps({
    submission: {
        type: Object as PropType<Submission | SubmissionWithReplay>,
        required: true
    }
})

const router = useRouter();
const i18n = useI18n();

const database = useDatabase();
const user = await database.supabase.auth.getUser();
const profile =
    ('id' in user && typeof user.id === 'string') ?
    await database.getProfileById(user.id) :
    null;
const shouldShow = (
    'id' in user &&
    typeof user.id === 'string' &&
    (
        user.id === props.submission.submitted_by ||
        (
            profile &&
            profile.account_state === AccountState.Normal &&
            profile.role in [Role.Admin, Role.Verifier]
        )
    )
);
const isOwner = (
    'id' in user &&
    typeof user.id === 'string' &&
    user.id === props.submission.submitted_by
);
const isVerifier = (
    profile &&
    profile.account_state === AccountState.Normal &&
    profile.role in [Role.Admin, Role.Verifier]
);

const validity = ref(props.submission.validity);
const deleteText = ref(i18n.t('submission.actions.delete'));
const isConfirmingDelete = ref(false);

async function onDelete() {
    if(!isConfirmingDelete.value) {
        isConfirmingDelete.value = true;
        deleteText.value = i18n.t('submission.actions.deleteConfirm');

        setTimeout(() => {
            isConfirmingDelete.value = false;
            deleteText.value = i18n.t('submission.actions.delete');
        }, 5000);
    } else {
        try {
            await database.deleteSubmission(props.submission.id);
            alert(i18n.t('submission.actions.deleteSuccess'));
            router.push('/leaderboard');
        } catch(e) {
            alert(
                i18n.t(
                    'submission.actions.deleteFailed',
                    { error: (e as PostgrestError).message }
                )
            );
        }
    }
}

async function setValidity() {
    try {
        await database.editSubmission(
            props.submission.id,
            { validity: validity.value }
        );
        router.go(0);
    } catch(e) {
        alert(
            i18n.t(
                'submission.actions.validateFailed',
                { error: (e as PostgrestError).message }
            )
        );
    }
}
</script>

<style lang="scss" scoped>
@use '~/assets/scss/colors.scss' as colors;

.actions {
    display: flex;
    flex-direction: column;
    flex-grow: 0;
    min-width: fit-content;
    text-align: center;
    padding: 1em 2em;
    margin-block-start: 2em;
    gap: 0.5em;
    border: 0.15em solid colors.$tertiary-color;
    border-radius: 1em;
    background-color: colors.$tertiary-color-alpha25;

    .row {
        display: flex;
        flex-direction: row;
        gap: 1ch;
    }
}

.web-btn {
    margin: 0;

    &.delete {
        background-color: colors.$error-color-alpha25;
        border-color: colors.$error-color;

        &:hover {
            background-color: colors.$error-color-alpha50;
            box-shadow: 0 0 0.5em colors.$error-color;
        }

        &:active {
            background-color: colors.$error-color-alpha75;
            box-shadow: 0 0 2em colors.$error-color;
        }
    }
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

h2 {
    margin-block: 0 0.5em;
}
</style>