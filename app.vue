<template>
  <div>
    <Meta
      property="og:url"
      :content="`https://${websiteUrl}/${$route.path}`"
    />
    <Meta
      property="og:description"
      :content="$t('embed.description')"
    />
    <Meta
      property="og:locale"
      :content="$i18n.locale"
    />
    <Meta
      v-for="locale in $i18n.availableLocales.filter(l => l != $i18n.locale)"
      property="og:locale:alternate"
      :content="locale"
    />
    <Meta
      property="og:site_name"
      :content="$t('common.appName')"
    />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
const websiteUrl = process.env.VERCEL_URL ?? process.env.URL ?? 'techmino-hub.vercel.app';

const i18n = useI18n();

useHead({
  htmlAttrs: {
    lang: i18n.locale,
  },
});
</script>