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

    ['--surface-color', 'rgba(255, 255, 255, 0.75)'],
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

    ['--surface-color', 'rgba(0, 0, 0, 0.75)'],
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
    <button class="theme-btn" @click="switchTheme">Light Mode</button>
    <div class="theme border">
        <div class="theme-row">
            <div class="primary">primary</div>
            <div class="primary-variant">primary variant</div>
            <div class="on-primary border">on primary</div>
        </div>

        <div class="theme-row">
            <div class="background">background</div>
            <div class="surface border">surface</div>
            <div class="surface-variant">surface variant</div>
        </div>

        <div class="theme-row">
            <div class="on-background">on background</div>
            <div class="on-surface">on surface</div>
        </div>

        <div class="theme-row">
            <div class="border-box">border</div>
            <div class="border-center">border center</div>
            <div class="error">error</div>
        </div>
    </div>
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

.theme {
    --background: linear-gradient(135deg, var(--background-base-color), var(--background-color), var(--background-base-color), var(--background-variant-color));
    --border: linear-gradient(135deg, var(--border-color), var(--border-variant-color), var(--border-color), var(--border-variant-color));
    --border-center: linear-gradient(90deg, var(--border-center-variant-color), var(--border-center-color), var(--border-center-variant-color));
    background: var(--background);
    color: var(--on-background-color);
    min-width: 960px;
    display: flex;
    flex-wrap: wrap;
    justify-content: start;
    flex-direction: column;
    border-radius: 0.5rem;
    margin: 1rem 0;
    transition: all 2000ms linear;
}

.theme-row>div {
    transition: all 200ms linear;

}

.theme-btn {
    background-color: var(--primary-color);
    color: var(--on-primary-color);
    transition: all 200ms linear;
}

.theme-row {
    display: flex;
    justify-content: space-between;

}

.theme-row>div {
    flex: 1;
    align-self: center;
    padding: 0.5rem 1rem;
    margin: 0 1rem;
    border-radius: 0.5rem;
}

.primary {
    background-color: var(--primary-color);
    color: var(--on-primary-color);
}

.primary-variant {
    background-color: var(--primary-variant-color);
    color: var(--on-primary-color);
}

.on-primary {
    color: var(--primary-color);
    background-color: var(--surface-color);
}


.background {
    background: var(--background);
    color: var(--on-background-color);
}

.surface {
    background-color: var(--surface-color);
    color: var(--on-surface-color);
}

.surface-variant {
    background-color: var(--surface-variant-color);
    color: var(--on-surface-color);
}

.on-background {
    color: var(--background-color);
    background: var(--on-background-color);
}

.on-surface {
    background-color: var(--on-surface-color);
    color: var(--surface-color);
}

.border-box {
    background: var(--border);
    color: var(--on-primary-color);
}

.border-center {
    background: var(--border-center);
    color: var(--on-primary-color);
}

.error {
    background: var(--error-color);
    color: var(--on-primary-color);
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
    padding: 0.5px;
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