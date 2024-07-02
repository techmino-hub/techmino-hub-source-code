/**
 * 
 * @param name The name of the mode.
 * @param t
 * The i18n translation function.  
 * `<template>`: Put in `$t`.  
 * `<script setup>`: Put in `useI18n().t`.
 * @returns 
 */
export function getModeI18nString(name: string, t: (key: string) => string): string {
    const title = t(`modes.${name}.title`);
    const subtitle = t(`modes.${name}.subtitle`);

    if(subtitle.length > 0) {
        return `${title} ${subtitle}`;
    }

    return title;
}