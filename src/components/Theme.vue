<script setup>
//? Default Theme Style
let THEME_STYLE = false

//? Theme Style Settings
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
    <button class="theme-btn border" @click="switchTheme">Light Mode</button>
</template>

<style>
/* LIGHT_THEME */
.theme-light :root {
    --primary-color: rgb(0, 85, 204);
    --primary-variant-color: rgb(102, 166, 255);
    --on-primary-color: rgb(255, 255, 255);

    --background-color: rgb(229, 240, 255);
    --background-variant-color: rgb(204, 225, 255);

    --surface-color: rgba(255, 255, 255, 0.75);
    --surface-variant-color: rgb(204, 225, 255);

    --on-background-color: rgb(0, 85, 204);
    --on-surface-color: rgb(0, 42, 102);

    --border-color: rgb(102, 166, 255);
    --border-variant-color: rgb(204, 225, 255);

    --border-center-color: rgb(0, 106, 255);
    --border-center-variant-color: rgba(102, 166, 255, 0);

    --error-color: rgb(204, 0, 0);
}

/* DARK_THEME */
.theme-dark :root {
    --primary-color: rgb(255, 204, 51);
    --primary-variant-color: rgb(153, 115, 0);
    --on-primary-color: rgb(0, 0, 0);

    --background-color: rgb(51, 38, 0);
    --background-variant-color: rgb(102, 77, 0);

    --surface-color: rgba(0, 0, 0, 0.75);
    --surface-variant-color: rgb(77, 57, 0);

    --on-background-color: rgb(255, 204, 51);
    --on-surface-color: rgb(255, 229, 153);

    --border-color: rgb(204, 153, 0);
    --border-variant-color: rgb(255, 217, 102);

    --border-center-color: rgb(255, 191, 0);
    --border-center-variant-color: rgba(153, 115, 0, 0);

    --error-color: rgb(255, 51, 51);
}


.theme-btn {
    font-size: 0.5rem;
    background-color: var(--surface-color);
    color: var(--on-surface-color);
    transition: all 200ms linear;
}

/* global border */
.border {
    position: relative;
}

.border::after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    padding: 1px;
    border-radius: 8px;
    background: var(--border);
    --m-o: content-box, padding-box;
    --m-i: linear-gradient(white, black);
    mask-image: var(--m-i), var(--m-i);
    -webkit-mask-image: var(--m-i), var(--m-i);
    mask-origin: var(--m-o);
    -webkit-mask-origin: var(--m-o);
    mask-clip: var(--m-o);
    -webkit-mask-clip: var(--m-o);
    mask-composite: exclude;
    -webkit-mask-composite: destination-out;
}
</style>