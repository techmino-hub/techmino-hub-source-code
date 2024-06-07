<template>
  <div class="header-outer">
    <header>
        <NuxtLink to="/">
            <h1>
                Techmino Hub
            </h1>
        </NuxtLink>
        <nav>
            <NuxtLink to="/">Home</NuxtLink>
            <NuxtLink to="/about">About</NuxtLink>
            <NuxtLink to="/contact">Contact</NuxtLink>
        </nav>
    </header>
  </div>
</template>

<style lang="scss">
@use "~/assets/scss/main.scss";
.header-outer {
    display: flex;
    flex-direction: column;
    flex: 0 0 auto;
    width: 100%;
}
header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: main.$secondary-color-alpha50;
    padding: 0.5em 1.5em;

    > a {
        color: white;
        font-weight: bold;
    }
}
nav {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0 1em;
    font-size: 1.2em;
    gap: 1em;
}
a {
    text-decoration: none;
    color: main.$primary-color;
    padding: 0.15em 0.3em;
    border-radius: 0.2em;
    transition: background-color 200ms;

    &:hover {
        background-color: main.$primary-color-alpha25;
    }
}
</style>