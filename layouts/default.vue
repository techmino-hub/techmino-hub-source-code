<template>
    <div class="outer">
        <canvas id="background"></canvas>
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
canvas#background {
    position: fixed;
    top: 0;
    left: 0;
    z-index: -1;
    width: 100%;
    height: 100%;
}
.outer {
    width: 100%;
    background-color: transparent;

    > .main-panel {
        border: 1px solid white;
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