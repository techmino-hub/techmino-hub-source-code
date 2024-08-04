<template>
    <div v-show="shouldShow" class="actions hide-noscript">
        <h2>{{ $t('submission.actions.title') }}</h2>
    </div>
</template>

<script lang="ts" setup>
import { AccountState, Role, type Submission, type SubmissionWithReplay } from '~/assets/types/database';

const props = defineProps({
    submission: {
        type: Object as PropType<Submission | SubmissionWithReplay>,
        required: true
    }
})

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
</script>

<style lang="scss" scoped>
@use '~/assets/scss/colors.scss' as colors;

.actions {
    padding: 0em 2em;
    margin-block-start: 2em;
    border: 0.15em solid colors.$tertiary-color;
    border-radius: 1em;
    background-color: colors.$tertiary-color-alpha25;
}
</style>