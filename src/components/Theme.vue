<script setup>
import { useThemeStore } from '@/stores/theme';
import { useSettingStore } from '@/stores/setting';
const theme = useThemeStore()
const setting = useSettingStore()
</script>

<template>
    <a v-if="setting.isDarkMode" @click="theme.lightTheme()">
        <i class="i-carbon:moon"></i>
    </a>
    <a v-else @click="theme.darkTheme()">
        <i class="i-carbon:sun"></i>
    </a>
</template>

<style></style>