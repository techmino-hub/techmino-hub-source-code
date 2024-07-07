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

    alert(t('signIn.errorTimeout', { error: error.message }));

    router.push(localePath('/'));
}

function finish() {
    router.push(localePath('/'));
}

onMounted(async function() {
    const { data } = await supabase.auth.getUser();

    if(data.user) return finish();

    let waiting = ref(true);

    supabase.auth.onAuthStateChange((event, session) => {
        if(event === 'SIGNED_IN') {
            waiting.value = false;
        }
    });

    const waitForAuth = new Promise<void>((resolve) => {
        watchEffect(() => {
            if(!waiting.value) resolve();
        })
    });

    const timeout = new Promise<void>((resolve) => {
        setTimeout(resolve, 5000);
    });

    await Promise.race([waitForAuth, timeout]);

    if(waiting.value) {
        showError(new Error(t('signIn.timeout')));
        return;
    } else {
        finish();
        return;
    }
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