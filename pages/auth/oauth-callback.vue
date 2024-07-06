<template>
    <noscript>
        <h1>
            {{ $t('signIn.noscriptWarn') }}
        </h1>
    </noscript>
</template>

<script lang="ts" setup>
const { t } = useI18n();
const localePath = useLocalePath();
const router = useRouter();
const supabase = useSupabase();

function showError(error: Error) {
    console.error(error);

    // OK (Yes): Go to GitHub Issues
    // Cancel (No): Go to homepage
    const response = confirm(t('signIn.error', { error: error.message }));

    if(response) {
        router.push("https://github.com/techmino-hub/techmino-hub-source-code/issues");
    } else {
        router.push(localePath('/'));
    }
}

onMounted(async function() {
    // Format, as hash:
    // access_token, expires_at, expires_in, provider_refresh_token, provider_token, refresh_token, token_type=bearer
    // like https://example.com/#access_token=SNIP&expires_at=SNIP&... you get the idea

    // TODO: parse URL
    alert("This feature isn't complete.");
    router.replace(localePath('/'));
});

definePageMeta({ layout: 'none' });
</script>

<style scoped>
h1 {
    font-size: 2em;
    text-align: center;
    margin-top: 1em;
}
</style>