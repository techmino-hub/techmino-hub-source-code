/**
 * Gets the name of the specified mode.
 * @param name The name of the mode.
 * @param t
 * The i18n translation function.  
 * `<template>`: Put in `$t`.  
 * `<script setup>`: Put in `useI18n().t`.
 * @returns The name of the specified mode.
 * @example
 * ```ts
 * getModeI18nString('sprint_10l', useI18n().t); // Sprint 10L
 * getModeI18nString('confusion', useI18n().t); // Confusion
 * ```
 */
export function getModeI18nString(name: string, t: (key: string) => string): string {
    const title = t(`modes.${name}.title`);
    const subtitle = t(`modes.${name}.subtitle`);

    if(subtitle.length > 0) {
        return `${title} ${subtitle}`;
    }

    return title;
}