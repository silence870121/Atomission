import { ref } from "vue";
import { defineStore } from "pinia";
import { useSettingStore } from "./setting";


export const useThemeStore = defineStore('theme', () => {
    const setting = useSettingStore()
    const LIGHT_THEME = new Map([
        ['--primary-color', 'rgb(0, 85, 204)'],
        ['--primary-variant-color', 'rgb(102, 166, 255)'],
        ['--on-primary-color', 'rgb(255, 255, 255)'],

        ['--background-color', 'rgb(229, 240, 255)'],
        ['--background-base-color', 'rgb(255, 255, 255)'],
        ['--background-variant-color', 'rgb(204, 225, 255)'],

        ['--surface-color', 'rgba(255, 255, 255, 0.5)'],
        ['--surface-variant-color', 'rgb(204, 225, 255)'],

        ['--on-background-color', 'rgb(0, 85, 204)'],
        ['--on-surface-color', 'rgb(0, 42, 102)'],

        ['--border-color', 'rgb(102, 166, 255)'],
        ['--border-variant-color', 'rgb(204, 225, 255)'],

        ['--border-center-color', 'rgb(0, 106, 255)'],
        ['--border-center-variant-color', 'rgba(102, 166, 255, 0)'],

        ['--error-color', 'rgb(204, 0, 0)']
    ])
    const DARK_THEME = new Map([
        ['--primary-color', 'rgb(255, 204, 51)'],
        ['--primary-variant-color', 'rgb(153, 115, 0)'],
        ['--on-primary-color', 'rgb(0, 0, 0)'],

        ['--background-color', 'rgb(51, 38, 0)'],
        ['--background-base-color', 'rgb(0, 0, 0)'],
        ['--background-variant-color', ' rgb(102, 77, 0)'],

        ['--surface-color', 'rgba(0, 0, 0, 0.5)'],
        ['--surface-variant-color', 'rgb(77, 57, 0)'],

        ['--on-background-color', 'rgb(255, 204, 51)'],
        ['--on-surface-color', 'rgb(255, 229, 153)'],

        ['--border-color', 'rgb(204, 153, 0)'],
        ['--border-variant-color', 'rgb(255, 217, 102)'],

        ['--border-center-color', 'rgb(255, 191, 0)'],
        ['--border-center-variant-color', 'rgba(153, 115, 0, 0)'],

        ['--error-color', 'rgb(255, 51, 51)']
    ])
    function renderThemeStyle() {
        switch (setting.isDarkMode) {
            case true:
                setStyleProperty(DARK_THEME)
                document.querySelector('.theme-btn').innerHTML = "Dark Mode"
                break;
            case false:
                setStyleProperty(LIGHT_THEME)
                document.querySelector('.theme-btn').innerHTML = "Light Mode";
                break;
            default:
                break;
        }
    }
    function setStyleProperty(config) {
        if (!(config instanceof Map)) {
            throw new Error('config is not a Map');
        }
        config.forEach((value, key) => {
            document.documentElement.style.setProperty(key, value);
        })
    }
    function switchTheme() {
        setting.isDarkMode = !setting.isDarkMode
        renderThemeStyle()
    }

    return { renderThemeStyle, switchTheme }
})