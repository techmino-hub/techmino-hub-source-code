<template>
    <div class="fallback-avy" aria-hidden="true">
        <div>
            {{ char }}
        </div>
    </div>
</template>

<script lang="ts" setup>
const props = defineProps({
    profileId: {
        type: String,
        default: 'fallback'
    }
});

let hash: number = 0;

for (let i = 0; i < props.profileId.length; i++) {
    hash = props.profileId.charCodeAt(i) + ((hash << 5) - hash);
}

hash = Math.abs(hash); // in case of overflow
hash %= 29;

const codePoint = 0xF0040 + hash;
const highSurrogate = 0xD800 + ((codePoint - 0x10000) >> 10);
const lowSurrogate = 0xDC00 + ((codePoint - 0x10000) & 0x3FF);
const char = String.fromCharCode(highSurrogate, lowSurrogate);
</script>

<style scoped lang="scss">
.fallback-avy {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    font-family: 'techmino-proportional';
    overflow: hidden;
    user-select: none;
    pointer-events: none;
    caret-color: transparent;
    background-color: black;
    color: white;

    div {
        display: block;
        width: fit-content;
        margin: auto;
        text-align: center;
        font-size: 7em;
        transform: rotate(-0.42rad);
    }
}
</style>