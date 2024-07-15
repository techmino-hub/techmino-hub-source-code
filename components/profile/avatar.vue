<template>
    <div class="avy">
        <ProfileFallbackAvatar
            :profileId="props.profile.id"
            aria-hidden="true"
        />
        <img
            :src="avatarUrl"
            aria-hidden="true"
        />
    </div>
</template>

<script lang="ts" setup>
import { type Profile } from '~/assets/types/database';

const props = defineProps({
    profile: {
        type: Object as PropType<Profile>,
        required: true
    }
});

const database = useDatabase();

const avatarUrl = database.getAvatarUrlByUserId(props.profile.id);
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