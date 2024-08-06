<template>
    <div class="avy" :aria-label="$t('profile.avy')">
        <ProfileFallbackAvatar
            class="fallback"
            :profile-id="props.profileId"
            aria-hidden="true"
        />
        <img
            :src="avatarUrl"
            v-show="imageValid"
            loading="lazy"
            aria-hidden="true"
            @error="imageValid = false"
        />
    </div>
</template>

<script lang="ts" setup>
const props = defineProps({
    profileId: {
        type: String,
        required: true
    }
});

const database = useDatabase();

const avatarUrl = database.getAvatarUrlByUserId(props.profileId);
const imageValid = ref(true);
</script>

<style scoped lang="scss">
.avy {
    position: relative;
    width: 200px;
    height: 200px;
    border: 1px solid white;

    > * {
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
        border-radius: inherit;
    }
}

.fallback {
    object-fit: cover;
    color: white;
}

img {
    z-index: 1;
}
</style>