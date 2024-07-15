<template>
  <div class="profile-link-outer">
    <NuxtLinkLocale class="link" :to="`/profiles/${profile.id}`">
        {{ profile.username }}
    </NuxtLinkLocale>
    <div class="popup">
        <ProfileCard :profile="profile" :link="false" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { Profile } from '~/assets/types/database';

const props = defineProps({
    profile: {
        type: Object as PropType<Profile>,
        required: true
    }
});
</script>

<style scoped lang="scss">
@use '~/assets/scss/colors';

.profile-link-outer {
    display: inline-block;
    position: relative;

    a.link {
        color: colors.$tertiary-color;

    }

    .popup {
        position: absolute;
        bottom: 2em;
        opacity: 0;
        transition: 250ms opacity;
        transition-delay: 150ms;
    }

    &:has(:hover) .popup {
        opacity: 1;
        transition-delay: 600ms;
    }
}
</style>