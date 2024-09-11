<template>
  <Title>{{ $t('rulesTabTitle') }}</Title>
  <Meta property="og:title" :content="$t('rulesTabTitle')" />
  <div class="page-outer" v-html="$t('rules')"></div>
</template>

<style scoped lang="scss">
@use '~/assets/scss/global';

.page-outer {
    padding: 1em 2em;

    a { @extend .glow-style; }
}
</style>