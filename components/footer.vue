<template>
  <footer>
    <div class="left">
        <p>
            <b>Techmino Hub</b> <br>
            Created with ❤ by <a href="https://github.com/techmino-hub/techmino-hub-source-code">NOT_A_ROBOT and contributors</a>
        </p>
    </div>
    <span class="right">
        <NuxtLink to="/settings">Settings</NuxtLink>
        <a href="https://discord.gg/f9pUvkh">Discord</a>
    </span>
  </footer>
</template>

<style scoped>
footer {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: rgba(0, 0, 0, 0.6);
    padding: 0.5em 1.5em;
    border-top: 0.15em dotted grey;
    color: rgb(180,180,180);

    a {
        color: rgb(180,180,180);
        transition: color 200ms;
        &:hover {
            color: lightgray;
        }
    }

    .right {
        display: flex;
        flex-direction: row;
        gap: 1em;
        align-items: center;
    }
}
</style>