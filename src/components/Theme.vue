<script setup>
import { ref, onMounted } from 'vue';
import { useThemeStore } from '@/stores/theme';
import { useSettingStore } from "@/stores/setting";
const theme = useThemeStore()
const setting = useSettingStore()
let themeText = ref('Theme Mode')
function renderThemeText() {
    switch (setting.isDarkMode) {
        case true:
            themeText.value = 'Dark Mode'
            break;
        case false:
            themeText.value = 'Light Mode';
            break;
        default:
            break;
    }
}
onMounted(() => {
    renderThemeText()
})
</script>

<template>
    <button class="theme-btn border" @click="theme.switchTheme(), renderThemeText()">{{ themeText }}</button>
</template>

<style>
.theme-btn {
    font-size: 0.75rem;
    background: var(--action);
    white-space: nowrap;
}
</style>