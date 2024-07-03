/**
 * Translate with a key if it exists, otherwise fallback to another key.
 * 
 * @param initKey
 * The initial key to try to translate.
 * 
 * @param fallbackKey
 * The fallback key to use if the initial key does not exist.
 * 
 * @param options
 * The options to pass to the translation function.
 * This is passed to the translation function, regardless of the existence of the initial key.
 * 
 * @returns
 * The result of the translation function.
 */
export function translateWithFallback(
    initKey: string,
    fallbackKey: string,
    options?: any
): string {
    const i18n = useI18n();

    if(i18n.te(initKey)) {
        return i18n.t(initKey, options)
    } else {
        return i18n.t(fallbackKey, options)
    }
}

export default defineNuxtPlugin((nuxtApp) => {
    const tf = translateWithFallback;

    return {
        provide: {
            tf
        }
    }
});