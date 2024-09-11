<template>
    <div class="main-inner">
        <Meta name="google-site-verification" content="66vIiO5Xcwcll5E6vnT9ttysKBk0SNQHvE5jdz9jg3Q" />
        <Title>{{ $t('home.tabTitle') }}</Title>
        <h1>{{ $t('home.title') }}</h1>
        <article v-html="$t('home.article')"></article>
    </div>
</template>

<style scoped>
.main-inner {
    padding: 1em 2em;
}
</style>