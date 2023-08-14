<script setup>
import { useThemeStore } from '@/stores/theme';

const theme = useThemeStore()

</script>

<template>
    <button class="theme-btn border" @click="theme.switchTheme()">Light Mode</button>
</template>

<style>
.theme-btn {
    font-size: 0.5rem;
    background-color: var(--surface-color);
    color: var(--on-surface-color);
    transition: all 200ms linear;
}
</style>