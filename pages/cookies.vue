<script lang="ts">
export default {
    async mounted() {
        const cookiesString: string = document.cookie;
        const cookies = cookiesString
            .trim()
            .split(';')
            .map(cookie => cookie.trim())
            .filter(cookie => cookie.length > 0);

        const cookieKeys = cookies.map(cookie => cookie.split('=')[0]);
        const cookieValues = cookies.map(cookie => cookie.split('=')[1]);

        const cookieResultStringEl = this.$refs.cookieResultStringEl as HTMLElement;
        const cookieResultListEl = this.$refs.cookieResultListEl as HTMLUListElement;

        let resultString;
        if(cookies.length === 0) {
            resultString = this.$t('cookies.cookieDetect.none');
        } else {
            resultString = this.$t('cookies.cookieDetect.some');
        }
        cookieResultStringEl.textContent = resultString;

        cookieKeys.forEach((key, index) => {
            const li = document.createElement('li');
            li.textContent = `${key}: ${cookieValues[index]}`;
            cookieResultListEl.appendChild(li);
        });
    }
}
</script>

<template>
    <div>
        <Title>{{ $t('cookies.tabTitle') }}</Title>
        <h1>{{ $t('cookies.title') }}</h1>
        <div v-html="$t('cookies.description')"></div>
        <hr>
        <noscript class="result">{{ $t('cookies.cookieDetect.noscript') }}</noscript>
        <span class="result" ref="cookieResultStringEl"></span>
        <ul ref="cookieResultListEl"></ul>
    </div>
</template>

<style scoped lang="scss">
.result {
    display: block;
    margin-top: 10px;
    font-size: 1.2em;
}
</style>