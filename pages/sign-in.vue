<template>
<div class="page-outer">
    <Title>{{ $t('signIn.tabTitle') }}</Title>
    <h1 v-t="'signIn.title'"></h1>
    <i18n-t keypath="signIn.ruleNote" scope="global" tag="p" class="tos-note">
        <NuxtLink class="glow-style" :to="localePath('/rules')" v-t="'signIn.ruleNoteLink'"></NuxtLink>
    </i18n-t>
</div>
</template>

<script lang="ts" setup>
import { SUPABASE } from '~/assets/scripts/database';

const localePath = useLocalePath();

function signIn() {
    SUPABASE.auth.signInWithOAuth({
        provider: 'discord'
    });
}
</script>

<style scoped lang="scss">
.page-outer {
    padding: 1em 2em;
}
</style>