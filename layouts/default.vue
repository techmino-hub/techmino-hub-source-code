<template>
    <div class="outer">
        <Background />
        <div class="main-panel">
            <Header />
            <main>
                <slot />
            </main>
            <Footer />
        </div>
    </div>
</template>

<style lang="scss">
@use "~/assets/scss/main";
@use "~/assets/scss/index";
</style>