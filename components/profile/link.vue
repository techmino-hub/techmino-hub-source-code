<template>
  <div class="profile-link-outer">
    <NuxtLinkLocale class="link" :to="`/profiles/${profile.id}`" @mouseover="loadProfileCard">
        {{ profile.username }}
    </NuxtLinkLocale>
    <div class="popup" v-if="withCard" ref="popup">
        <ProfileCard v-if="loadCard" :profile="profile" :link="false" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { Profile } from '~/assets/types/database';

const props = defineProps({
    /**
     * The profile to link to.  
     * This can be a Profile itself or one's ID.  
     * If an ID is provided, the Profile object will be fetched from the database.
     */
    profile: {
        type: [Object, String] as PropType<Profile | string>,
        required: true,
    },
    withCard: {
        type: Boolean,
        default: true
    }
});

let profile: Profile;

if (typeof props.profile === 'string') {
    const { data, error } = await useFetch(`/api/fetch-profile`, {
        query: {
            uuid: props.profile
        }
    });

    if (error.value) {
        throw error.value;
    }

    if(data.value) {
        profile = data.value.profile;
    } else {
        throw new Error(`Profile with ID ${props.profile} not found.`);
    }
} else {
    profile = props.profile;
}


const popup = ref<HTMLDivElement | null>(null);
const loadCard = ref(false);

function loadProfileCard() {
    loadCard.value = true;
}
</script>

<style scoped lang="scss">
@use '~/assets/scss/colors';

.profile-link-outer {
    display: inline-block;
    position: relative;

    @media (max-width: 33em) {
        position: static;
    }

    a.link {
        color: colors.$tertiary-color;
    }

    .popup {
        position: absolute;
        bottom: 2em;
        opacity: 0;
        transition: 250ms opacity;
        transition-delay: 150ms;
        pointer-events: none;
        z-index: 1;

        @media (max-width: 33em) {
            position: absolute;
            display: flex;
            flex-direction: row;
            justify-content: center;
            left: 0;
            right: 0;
            bottom: unset;
        }
    }

    &:has(a.link:hover) .popup {
        opacity: 1;
        transition-delay: 600ms;
        pointer-events: auto;
    }
}
</style>