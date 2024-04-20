<script setup>
import { useThemeStore } from '@/stores/theme';
import { useSettingStore } from '@/stores/setting';
const theme = useThemeStore()
const setting = useSettingStore()
</script>

<template>
    <button v-if="setting.isDarkMode" class="theme-btn" @click="theme.lightTheme()">L</button>
    <button v-else class="theme-btn" @click="theme.darkTheme()">D</button>
</template>

<style>
.theme-btn {
    width: 1.5rem;
    height: 1.5rem;
}
</style>