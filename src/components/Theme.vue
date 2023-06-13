<script setup>
//? Default Theme Style
let THEME_STYLE = false

//? Theme Style Settings
const LIGHT_THEME = new Map([
    ['--primary-color', 'blue'],
    ['--secondary-color', 'purple'],
    ['--background-color', 'white'],
    ['--surface-color', 'gray'],

    ['--on-primary-color', 'white'],
    ['--on-secondary-color', 'white'],
    ['--on-background-color', 'black'],
    ['--on-surface-color', 'black'],
    []
])
const DARK_THEME = new Map([
    ['--primary-color', 'gold'],
    ['--secondary-color', 'purple'],
    ['--background-color', 'black'],
    ['--surface-color', 'gray'],

    ['--on-primary-color', 'black'],
    ['--on-secondary-color', 'black'],
    ['--on-background-color', 'white'],
    ['--on-surface-color', 'white'],
    []
])

//? Set style root 
const setProperty = (config) => {
    if (!(config instanceof Map)) {
        throw new Error('config is not a Map');
    }
    config.forEach((value, key) => {
        document.documentElement.style.setProperty(key, value);
    })
}
//? Default Theme Style
const setDefaultProperty = setProperty(LIGHT_THEME)

//? Switch Theme Style
function switchTheme() {
    switch (THEME_STYLE) {
        case true:
            setProperty(LIGHT_THEME)
            document.querySelector('.theme-btn').innerHTML = "Light Mode";
            break;
        case false:
            setProperty(DARK_THEME)
            document.querySelector('.theme-btn').innerHTML = "Dark Mode"
            break;

        default:
            break;
    }
    THEME_STYLE = !THEME_STYLE
}
</script>

<template>
    <button class="theme-btn" @click="switchTheme">Light Mode</button>
</template>

<style>
:root {
    --primary-color: white;
    --secondary-color: purple;
    --on-primary-color: black;
    --grid-color: rgb(128, 128, 128);
}
</style>