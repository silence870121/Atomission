<script setup>

</script>
<template>
    <div class="container">
        <div class="test-nav">
            <router-link to="/" class="test-nav"> &lt; Back Home </router-link>
            <h2>color system</h2>
        </div>
        <div class="color-system">
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
.test-nav {
    display: flex;
    position: relative;
}

.test-nav h2 {
    flex: 1;
    text-align: center;
}

.test-nav a {
    position: absolute;
}

.color-system {
    flex: 1;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 1rem;
}

.row {
    width: 100%;
    display: flex;
    margin-bottom: 1rem;
    gap: 1rem;
}

.row p {
    flex: 1;
    padding: 1rem 2rem;
    border-radius: 0.5rem;
    text-align: left;
    text-transform: capitalize;
}



.color-system h3 {
    width: 100%;
    padding-bottom: 0.5rem;
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