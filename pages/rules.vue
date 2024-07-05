<template>
  <div class="page-outer" v-html="$t('rules')"></div>
</template>

<style lang="scss">
@use '~/assets/scss/index';

.page-outer {
    padding: 1em 2em;

    a { @extend .glow-style; }
}
</style>