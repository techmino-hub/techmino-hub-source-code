<template>
  <div class="page">
    <Title>{{ $t('account.tabTitle') }}</Title>
    <h1>{{ $t('account.title') }}</h1>
    <ClientOnly>
        <div v-if="loading">
            {{ $t('account.loading') }}
        </div>
        <div v-else-if="!user || !profile">
            {{ $t('account.loggedOut') }}
        </div>
        <div v-else-if="profile.account_state !== AccountState.Normal">
            {{ $t(`account.state${profile.account_state}`) }}
        </div>
        <div v-else>
            <div class="avy-changer">
                <h2>
                    {{ $t('account.setAvatar') }}
                </h2>
                <!-- TODO: click to change avatar -->
                <img class="avy" :src="imgPath" alt="avatar" />
                <input type="file" accept="image/*" @change="handleFileChange" />
            </div>
            <div class="bio-changer">
                <h2>
                    {{ $t('account.setBio') }}
                </h2>
                <label for="username">{{ $t('account.username') }}</label>
                <input type="text" id="username" v-model="username" />
                <label for="bio">{{ $t('account.bio') }}</label>
                <textarea id="bio" v-model="bio"></textarea>
            </div>
            <!-- TODO: Submit button(s) -->
        </div>
    </ClientOnly>
    <noscript>
        {{ $t('account.noscriptWarn') }}
    </noscript>
  </div>
</template>

<script lang="ts" setup>
import { type User } from '@supabase/supabase-js';
import { AccountState, type Profile } from '~/assets/types/database';

const database = useDatabase();
const user = ref<User | null>(null);
const profile = ref<Profile | null>(null);
const loading = ref<boolean>(true);
const imgPath = ref<string>('');

const avatar = ref<File | null>(null);
const username = ref<string>('');
const bio = ref<string>('');

onMounted(async function() {
    user.value = (await database.supabase.auth.getUser()).data.user;

    if(user.value) {
        imgPath.value = database.getAvatarUrlByUserId(user.value.id);

        profile.value = await database.getProfileById(user.value.id);

        username.value = profile.value.username;
        bio.value = profile.value.bio;
    }

    loading.value = false;
});

function handleFileChange(event: Event) {
    const target = event.target as HTMLInputElement;
    if(target.files && target.files[0]) {
        const file = target.files[0];
        avatar.value = file;
        const reader = new FileReader();
        reader.onload = (e) => {
            imgPath.value = e.target?.result as string;
        };
        reader.readAsDataURL(file);
    }
}
</script>

<style lang="scss" scoped>
.page {
    padding-block: 0.25em;
    padding-inline: 2em;
}

.avy {
    width: 200px;
    height: 200px;
}

input[type="file"] {
    display: none;
}
</style>