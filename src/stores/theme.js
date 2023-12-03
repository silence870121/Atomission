import { ref } from "vue";
import { defineStore } from "pinia";
import { useSettingStore } from "./setting";


export const useThemeStore = defineStore('theme', () => {
    const setting = useSettingStore()
    const LIGHT_THEME = new Map([
        ['--wireframe-background-color', 'hsl(210, 100%, 95%)'],
        ['--wireframe-surface-color', 'hsl(210, 100%, 90%)'],
        ['--wireframe-surface-variant-color', 'hsl(210, 100%, 85%)'],
        ['--wireframe-placeholder-color', 'hsl(210, 100%, 80%)'],

        ['--label-primary-color', 'hsla(210, 100%, 35%, 1)'],
        ['--label-secondary-color', 'hsla(210, 100%, 35%, 0.6)'],
        ['--label-tertiary-color', 'hsla(210, 100%, 35%, 0.4)'],
        ['--label-quaternary-color', 'hsla(210, 100%, 35%, 0.2)'],

        ['--background-base-color', 'hsl(  0,   0%, 100%)'],
        ['--background-from-color', 'hsl(210, 100%,  90%)'],
        ['--background-to-color', 'hsl(210, 100%,  95%)'],

        ['--surface-from-color', 'hsla(210, 100%, 90%, 0.5)'],
        ['--surface-to-color', 'hsla(210, 100%, 90%, 0.1)'],

        ['--surface-variant-from-color', 'hsla(210, 100%, 85%, 0.5)'],
        ['--surface-variant-to-color', 'hsla(210, 100%, 85%, 0)'],

        ['--stroke-from-color', 'hsla(210, 100%, 80%, 0.75)'],
        ['--stroke-to-color', 'hsla(210, 100%, 80%, 0)'],

        ['--active-from-color', 'hsl(210, 100%, 60%)'],
        ['--active-to-color', 'hsl(210, 100%, 90%)'],

        ['--action-from-color', 'hsla(210, 100%, 80%, 0.25)'],
        ['--action-to-color', 'hsla(210, 100%, 95%, 0.25)'],

        ['--nav-rim-from-color', 'hsla(210, 100%, 50%, 0.2)'],
        ['--nav-rim-to-color', 'hsla(210, 100%, 95%, 0)'],

        ['--nav-active-from-color', 'hsla(210, 100%, 60%, 0.5)'],
        ['--nav-active-to-color', 'hsla(210, 100%, 60%, 0)'],

        ['--glow-light-from-color', 'hsla(210, 100%, 60%, 1)'],
        ['--glow-light-step-color', 'hsla(210, 100%, 70%, 0.25)'],
        ['--glow-light-to-color', 'hsla(210, 100%, 95%, 0)'],

        ['--error-color', 'hsl(0, 100%, 40%)']
    ])
    const DARK_THEME = new Map([
        ['--wireframe-background-color', 'hsl(45, 60%, 10%)'],
        ['--wireframe-surface-color', 'hsl(45, 60%, 15%)'],
        ['--wireframe-surface-variant-color', 'hsl(45, 60%, 20%)'],
        ['--wireframe-placeholder-color', 'hsl(45, 60%, 25%)'],

        ['--label-primary-color', 'hsla(0, 0%, 100%, 1)'],
        ['--label-secondary-color', 'hsla(0, 0%, 100%, 0.6)'],
        ['--label-tertiary-color', 'hsla(0, 0%, 100%, 0.4)'],
        ['--label-quaternary-color', 'hsla(0, 0%, 100%, 0.2)'],

        ['--background-base-color', 'hsl( 0,  0%,  0%)'],
        ['--background-from-color', 'hsl(45, 60%, 10%)'],
        ['--background-to-color', 'hsl(45, 60%, 15%)'],

        ['--surface-from-color', 'hsla(45, 60%, 15%, 0.5)'],
        ['--surface-to-color', 'hsla(45, 60%, 15%, 0.1)'],

        ['--surface-variant-from-color', 'hsla(45, 60%, 20%, 0.5)'],
        ['--surface-variant-to-color', 'hsla(45, 60%, 20%, 0)'],

        ['--stroke-from-color', 'hsla(45, 60%, 25%, 0.75)'],
        ['--stroke-to-color', 'hsla(45, 60%, 25%, 0)'],

        ['--active-from-color', 'hsl(45, 100%, 80%)'],
        ['--active-to-color', 'hsl(45, 100%, 20%)'],

        ['--action-from-color', 'hsla(45, 100%, 10%, 0.25)'],
        ['--action-to-color', 'hsla(45, 100%, 25%, 0.25)'],

        ['--nav-rim-from-color', 'hsla(45, 100%, 50%, 0.2)'],
        ['--nav-rim-to-color', 'hsla(45,  60%, 10%, 0)'],

        ['--nav-active-from-color', 'hsla(45, 60%, 40%, 0.5)'],
        ['--nav-active-to-color', 'hsla(45, 60%, 10%, 0)'],


        ['--glow-light-from-color', 'hsla(45, 100%, 80%, 1)'],
        ['--glow-light-step-color', 'hsla(45,  60%, 60%, 0.25)'],
        ['--glow-light-to-color', 'hsla(45,  60%, 10%, 0)'],


        ['--error-color', 'hsl(0, 100%, 60%)']
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