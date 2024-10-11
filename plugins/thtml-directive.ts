import { type DirectiveBinding } from "vue";

// Workaround for v-html not being supported for custom elements
// Source: https://github.com/nuxt/nuxt/issues/10333#issuecomment-1842692933

// Usage: <element v-thtml="'innerHtmlString'" />
// I don't recommend you use this for non-custom elements.
// If v-html works, use that instead.
export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.directive('thtml', {
        mounted: (el: HTMLElement, binding: DirectiveBinding) => {
            el.innerHTML = binding.value;
        },
        getSSRProps(binding: DirectiveBinding) {
            return {
                innerHTML: binding.value
            };
        }
    })
})