<script setup>
import { onMounted } from 'vue';
onMounted(() => {

    const viewpoint = document.querySelector('.viewpoint');

    const option = {
        root: null,
        rootMargin: "-80px 0px -80% 0px",
        threshold: 0,
    }
    function activeView(entries, owner) {
        if (entries[0].isIntersecting) {
            viewpoint.classList.add('v-inner');
        } else {

            viewpoint.classList.remove('v-inner');
        }
    }

    const observer = new IntersectionObserver(activeView, option);
    observer.observe(document.querySelector(".content"));
})
</script>
<template>
    <div class="test">
        <div class="test-nav">
            <router-link to="/" @click="toLocal('Atomission')">
                &lt; Back Home
            </router-link>
        </div>
        <div class="test-location">
            <p>#test page</p>
        </div>


        <div class="viewpoint">
            <div class="inner">
                <p></p>
            </div>
        </div>
        <div class="observer">
            <div class="content">
            </div>
        </div>

        <!-- ? hide -->
        <div class="color-system" v-show="false">
            <h2>color system</h2>
            <h3>Wireframe:</h3>
            <div class="row">
                <p class="wireframe-background">wireframe | background</p>
                <p class="wireframe-surface">wireframe | surface</p>
                <p class="wireframe-surface-variant">wireframe | surface variant</p>
                <p class="wireframe-placeholder">wireframe | placeholder</p>
            </div>

            <h3>Label&Text:</h3>
            <div class="row">
                <p class="label-primary">label | primary</p>
                <p class="label-secondary">label | secondary</p>
                <p class="label-tertiary">label | tertiary</p>
                <p class="label-quaternary">label | quaternary</p>
                <p class="error">error</p>
            </div>

            <h3>interface:</h3>
            <div class="row">
                <p class="background">background</p>
            </div>
            <div class="row">
                <p class="surface">surface</p>
                <p class="surface-variant">surface-variant</p>
            </div>

            <h3>Stroke:</h3>
            <div class="row">
                <p class="border">border</p>
                <p class="line-row">line-row</p>
                <p class="line-column">line-column</p>
            </div>

            <h3>Event:</h3>
            <div class="row">
                <p class="active">active</p>
                <p class="action">action</p>
            </div>

            <h3>Hover:</h3>
            <div class="row">
                <p class="nav-rim">nav-rim</p>
                <p class="nav-active">nav-active</p>
                <p class="glow-light">glow-light</p>
            </div>

        </div>

    </div>
</template>

<style scoped>
.test {
    z-index: -1;
    overflow-x: auto;
}

.observer {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.viewpoint {
    width: 100%;
    height: 100%;
    inset: 0;
    position: fixed;
    padding-top: 80px;
    padding-bottom: 80%;
}


.inner {
    flex: 1;
    height: 100%;
    border: 1px solid white;
}

.content {
    margin: 80rem 0;
    width: 50rem;
    height: 1rem;
    background: hsla(240, 100%, 50%, 0.25);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 5rem;
    border: 1px solid white;
}

.v-inner {
    background: hsla(90, 100%, 50%, 0.25);
}
</style>
<style scoped>
.row {
    width: 100%;
    display: flex;
    margin-bottom: 1rem;
    gap: 1rem;
}

.row p {
    flex: 1;
    padding: 1.5rem 2rem;
    /* border: 1px solid var(--wireframe-placeholder-color); */
    border-radius: 0.5rem;
    text-align: left;
}

.color-system {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    background-color: var(--background-base-color) opacity 0.5;
    padding: 1rem;
    border-radius: 1rem;
}

.color-system h3 {
    width: 100%;
    text-align-last: left;
    padding: 0.5rem;
}

.test-nav {
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 1rem 2rem;
}

.test-location {
    position: fixed;
    top: 0;
    right: 0;
    padding: 1rem;
}

.test::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: linear-gradient(to right bottom, var(--primary-variant-color) 0%, transparent 100%);
    opacity: 0.5;
}

/* wireframe color | solid */
.wireframe-background {
    background: var(--wireframe-background-color);
}

.wireframe-surface {
    background: var(--wireframe-surface-color);
}

.wireframe-surface-variant {
    background: var(--wireframe-surface-variant-color);
}

.wireframe-placeholder {
    background: var(--wireframe-placeholder-color);
}

/* label color | solid */
.label-primary {
    background: var(--label-primary-color);
    color: var(--wireframe-placeholder-color);
}

.label-secondary {
    background: var(--label-secondary-color);
    color: var(--wireframe-placeholder-color);
}

.label-tertiary {
    background: var(--label-tertiary-color);
    color: var(--wireframe-placeholder-color);
}

.label-quaternary {
    background: var(--label-quaternary-color);
    color: var(--wireframe-placeholder-color);
}

.error {
    background: var(--error-color);
}

/* interface color | Gradients */
.background {
    background: var(--background);
}

.surface {
    background: var(--surface);
}

.surface-variant {
    background: var(--surface-variant);
}

.border {
    background: var(--border);
}

.line-row {
    background: var(--line-row);
}

.line-column {
    background: var(--line-column);
}

.active {
    background: var(--active);
}

.action {
    background: var(--action);
}

.nav-rim {
    background: var(--nav-rim);
}

.nav-active {
    background: var(--nav-active);
}

.glow-light {
    background: var(--glow-light);
}
</style>