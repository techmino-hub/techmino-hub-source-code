<script setup lang="ts">
import type { NuxtError } from '#app';

const props = defineProps({
  error: Object as () => NuxtError
});

const { error } = props;

const handleError = () => clearError({ redirect: '/' });
const copyError = () => {
    navigator.clipboard.writeText(JSON.stringify(error, null, 2));
    const button = document.getElementById('copy-err-button');
    if (button) {
        button.textContent = 'Error info copied!';
        setTimeout(() => {
            button.textContent = 'Copy error info';
        }, 2000);
    }
}
</script>

<template>
    <div class="outer">
        <Title>
            Techmino Hub - Error {{ error?.statusCode }}
        </Title>
        <div class="main-panel">
            <Background />
            <Header class="error" />
            <main>
                <h1>
                    Error {{ error?.statusCode }}
                </h1>
                <p v-if="error?.statusCode === 404">
                    The page you are looking for does not exist. <br>
                    You may have stumbled onto an unfinished page.
                </p>
                <a v-else :href="`https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/${error?.statusCode}`">
                    Learn more about HTTP status code {{ error?.statusCode }}
                </a>
                <pre><code class="error-code">{{ error?.message }}</code></pre>
                <hr>
                <div class="error-bottom">
                    <menu class="error-buttons">
                        <NuxtLink @click="handleError" to="/" class="home">
                            Go back to home
                        </NuxtLink>
                        <button @click="copyError" class="copy hide-noscript" id="copy-err-button">
                            Copy error info
                        </button>
                        <NuxtLink to="https://github.com/techmino-hub/techmino-hub-source-code/issues/new" class="report">
                            Report error on GitHub
                        </NuxtLink>
                    </menu>
                    <details>
                        <summary>
                            Raw error info
                        </summary>
                        <pre><code class="error-details">{{ error }}</code></pre>
                    </details>
                </div>
            </main>
            <Footer />
        </div>
    </div>
</template>

<style lang="scss">
@use "~/assets/scss/main";
@use "~/assets/scss/colors";
@use "~/assets/scss/index";

main {
    padding: 1em 2em;
    a {
        color: colors.$primary-color;
        transition-duration: 200ms;
        border-radius: 0.5em;
        padding: 0.25em 0.4em;
        &:hover {
            background-color: colors.$primary-color-alpha25;
        }
        &:active {
            background-color: colors.$primary-color-alpha50;
        }
    }
}

code.error-code {
    display: block;
    border: 0.15em dashed colors.$error-color;
    border-radius: 0.5em;
    background-color: black;
    padding: 1em;
    white-space: pre-wrap;
    word-break: break-word;
    font-size: 1.5em;
}

code.error-details {
    display: block;
    border-radius: 0.5em;
    background-color: black;
    padding: 0.5em;
    white-space: pre-wrap;
    word-break: break-word;
    font-size: 1.25em;
}

.error-bottom {
    position: relative;
    display: flex;
    margin-inline: auto;
    flex-direction: column;
    max-width: 40em;
    gap: 1em;
    border: 0.15em solid colors.$secondary-color;
    border-radius: 0.5em;
    background-color: colors.$secondary-color-alpha50;
    padding: 1em;

    details {
        font-weight: bold;
        padding: 0.25em;
        background-color: colors.$error-color-alpha25;
        border: 0.15em solid colors.$error-color;
        border-radius: 0.5em;

        summary {
            cursor: pointer;
        }

        pre {
            margin-bottom: 0;
        }
    }
}

.error-buttons {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 1em;
    row-gap: 1em;
    padding: 0; margin: 0;
    flex-wrap: wrap;

    > * {
        color: white;
        padding: 0.5em 1em;
        border: 0.15em solid colors.$secondary-color;
        border-radius: 0.5em;
        background-color: colors.$secondary-color;
        text-align: center;
        text-decoration: none;
        transition: background-color 200ms, color 200ms, box-shadow 200ms;
        cursor: pointer;

        &.home {
            background-color: colors.$primary-color-alpha25;
            border-color: colors.$primary-color;

            &:hover {
                box-shadow: 0 0 0.5em colors.$primary-color;
            }
            &:active {
                box-shadow: 0 0 0.5em colors.$primary-color-dark;
                background-color: colors.$primary-color-alpha50;
            }
        }

        &.copy {
            background-color: colors.$tertiary-color-alpha25;
            border-color: colors.$tertiary-color;
            font-family: 'techmino-proportional';
            font-size: 1em;

            &:hover {
                box-shadow: 0 0 0.5em colors.$tertiary-color;
            }
            &:active {
                box-shadow: 0 0 0.5em colors.$tertiary-color-dark;
                background-color: colors.$tertiary-color-alpha75;
            }
        }

        &.report {
            $gh-color-dark: #111;
            $gh-color-light: #ddd;

            background-color: $gh-color-dark;
            border-color: $gh-color-light;
            color: $gh-color-light;
            transition-duration: 350ms;

            &:hover {
                box-shadow: 0 0 0.5em $gh-color-light;
            }
            &:active {
                box-shadow: 0 0 2em $gh-color-dark;
                background-color: $gh-color-light;
                border-color: $gh-color-dark;
                color: $gh-color-dark;
            }
        }
    }
}
</style>