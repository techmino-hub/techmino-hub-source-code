<template>
  <Title>{{ $t('privacyTabTitle') }}</Title>
  <Meta property="og:title" :content="$t('privacyTabTitle')" />
  <div class="page-outer" v-html="$t('privacy')"></div>
</template>

<style scoped lang="scss">
@use '~/assets/scss/global';

.page-outer {
    padding: 1em 2em;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;

    a { @extend .glow-style; }
}
</style>