<template>
    <div v-show="shouldShow" class="actions hide-noscript">
        <h2>{{ $t('submission.actions.title') }}</h2>
        <div class="row" v-show="isVerifier && !isOwner">
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
import type { PostgrestError, User } from '@supabase/supabase-js';
import { AccountState, Role, type Submission, type SubmissionWithReplay, SubmissionValidity, type Profile } from '~/assets/types/database';

const props = defineProps({
    submission: {
        type: Object as PropType<Submission | SubmissionWithReplay>,
        required: true
    }
})

const router = useRouter();
const i18n = useI18n();

const database = useDatabase();

const user = ref<User | null>(null);
const profile = ref<Profile | null>(null);

const shouldShow = computed(() => (isOwner.value || isVerifier.value));

const isOwner = computed(() => (
    user.value !== null &&
    user.value.id === props.submission.submitted_by
));

const isVerifier = computed(() => (
    profile.value !== null &&
    profile.value.account_state === AccountState.Normal &&
    ([Role.Admin, Role.Verifier] as [Role, Role])
        .includes(profile.value.role)
));

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

onMounted(async function() {
    user.value = (await database.supabase.auth.getUser()).data?.user;

    if(!user.value) {
        return;
    }

    profile.value = await database.getProfileById(user.value.id);
});
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
    gap: 1ch;
    border: 0.15em solid colors.$tertiary-color;
    border-radius: 1em;
    background-color: colors.$tertiary-color-alpha25;

    .row {
        display: flex;
        flex-direction: row;
        gap: 1ch;
        flex-wrap: wrap;

        > * {
            flex-grow: 1;
        }
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