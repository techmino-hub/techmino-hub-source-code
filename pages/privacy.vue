<template>
  <div class="page-outer" v-html="$t('privacy')"></div>
</template>

<style lang="scss">
@use '~/assets/scss/index';

.page-outer {
    padding: 1em 2em;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;

    a { @extend .glow-style; }
}
</style>