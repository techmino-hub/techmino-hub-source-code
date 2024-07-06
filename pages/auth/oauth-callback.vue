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
    const searchParams = new URLSearchParams(window.location.search);
    const code = searchParams.get('code');
    const next = searchParams.get('next') ?? localePath('/');
    const error = searchParams.get('error');

    if(error) {
        showError(new Error(error));
        return;
    }

    if(!code) {
        showError(new Error('Code not found'));
        return;
    }

    const { error: sessionError } =
        await supabase.auth.exchangeCodeForSession(code);
    
    if(sessionError) {
        showError(sessionError);
        return;
    }

    router.push(next);
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