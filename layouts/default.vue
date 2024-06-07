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

<style>
body {
    margin: 0;
    padding: 0;
    font-family: 'techmino-proportional', sans-serif;
    background-color: black;
    color: white;
}
.outer {
    width: 100%;
    background-color: transparent;

    > .main-panel {
        border: 0.1em solid white;
        border-radius: 0.5rem;
        margin: 20px;
        
        @media (max-width: 700px) {
            margin: 0;
            border: 0 none transparent;
            border-bottom: 1px solid white;
        }

        > main {
            background-color: rgba(0, 0, 0, 0.6);
        }
    }
}
</style>