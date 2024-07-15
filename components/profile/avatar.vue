<template>
    <div class="avy">
        <ProfileFallbackAvatar
            :profile-id="props.profileId"
            aria-hidden="true"
        />
        <img
            :src="avatarUrl"
            loading="lazy"
            aria-hidden="true"
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
</script>

<style scoped lang="scss">
.avy {
    position: relative;
    width: 200px;
    height: 200px;
    border: 1px solid white;
}

.fallback {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    color: white;
}

img {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
}
</style>