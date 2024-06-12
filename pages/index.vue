<template>
    <Title>
        {{ $t('home.tabTitle') }}
    </Title>
    <div class="main-inner">
        <h1>{{ $t('home.title') }}</h1>
        <p v-html="$t('home.article')"></p>
    </div>
</template>

<style scoped>
.main-inner {
    padding: 1em 2em;
}
</style>