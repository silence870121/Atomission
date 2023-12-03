<script setup>
</script>
<!-- TODO -->
<template>
    <div class="container">
        <div class="test-nav">
            <a href="/">&lt; Back Home</a>
        </div>
        <div class="test-location">
            <p>#test page</p>
        </div>
        <div class="color-system">
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
<style>
:root {
    --background: linear-gradient(135deg,
            var(--background-base-color) 0%, var(--background-from-color) 35%,
            var(--background-base-color) 70%, var(--background-to-color) 100%);

    --surface: linear-gradient(to bottom,
            var(--surface-from-color) 0%, var(--surface-to-color) 100%);

    --surface-variant: linear-gradient(to bottom,
            var(--surface-variant-from-color) 0%, var(--surface-variant-to-color) 100%);

    --border: linear-gradient(to bottom,
            var(--stroke-from-color) 75%, var(--stroke-to-color) 100%);

    --line-row: linear-gradient(var(--stroke-to-color) 0%,
            var(--stroke-from-color) 50%, var(--stroke-to-color) 100%);

    --line-column: linear-gradient(to bottom, var(--stroke-to-color) 0%,
            var(--stroke-from-color) 50%, var(--stroke-to-color) 100%);

    --active: linear-gradient(135deg,
            var(--active-from-color) 0%, var(--active-to-color) 100%);

    --action: linear-gradient(135deg,
            var(--action-from-color) 0%, var(--action-to-color) 100%);

    --nav-rim: radial-gradient(125% 125% at 50% 125%,
            var(--nav-rim-from-color) 0%,
            var(--nav-rim-to-color) 100%);

    --nav-active: linear-gradient(135deg,
            var(--nav-active-to-color) 0%,
            var(--nav-active-from-color) 50%,
            var(--nav-active-to-color) 100%);

    --glow-light: radial-gradient(,
            var(--glow-light-from-color) 0%,
            var(--glow-light-step-color) 50%,
            var(--glow-light-to-color) 100%);
}

* {
    color: var(--label-primary-color);
}

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
<style scoped>
.test-nav {
    position: fixed;
    width: 50%;
    top: 0;
    left: 0;
    display: flex;
    justify-content: space-between;
    padding: 1rem 2rem;
}

.test-location {
    position: fixed;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
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
</style>