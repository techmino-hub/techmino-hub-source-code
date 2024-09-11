<template>
  <div>
    <Meta
      property="og:url"
      :content="`https://${websiteUrl}/${$route.path}`"
    />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
const websiteUrl = process.env.VERCEL_URL ?? process.env.URL ?? '';
</script>