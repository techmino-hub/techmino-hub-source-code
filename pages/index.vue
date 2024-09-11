<template>
    <div class="main-inner">
        <Title>{{ $t('home.tabTitle') }}</Title>
        <Meta property="og:title" :content="$t('home.tabTitle')" />
        <h1>{{ $t('home.title') }}</h1>
        <article v-html="$t('home.article')"></article>
    </div>
</template>

<style scoped>
.main-inner {
    padding: 1em 2em;
}
</style>