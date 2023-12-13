<script setup>
</script>
<!-- TODO -->
<template>
    <div class="container">
        <div class="error">
            <svg-icon name="favicon" size="lg" />
            <div class="error-message">
                <h2 class="error-title">404</h2>
                <p class="error-subtitle">Error</p>
                <p>Page not found</p>
                <router-link to="/" @click="toLocal('Atomission')" class="error-btn border">
                    back Home
                </router-link>
            </div>
            <svg-icon name="pattern" size="lg" class="error-pattern" />
        </div>

    </div>
</template>

<style scoped>
svg {
    width: 20rem;
    height: 20rem;
    color: var(--surface-variant-color);
    color: var(--on-surface-color);
}

.error {
    width: 100%;
    flex: 1;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.error-message {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    padding: 0 4rem;
    border-image: var(--active) 1;
    border-left: 1px solid;
    font-size: 1.25rem;
}

.error-title {
    text-align: center;
    font-size: 7.5rem;
    font-weight: 600;
    background: var(--active);
    background-clip: text;
    color: transparent;
}

.error-subtitle {
    font-size: 5rem;
    color: var(--label-secondary-color);
}

.error-btn {
    padding: 0.5rem 1rem;
    margin-top: 2rem;
    border-radius: 2rem;
    background: var(--action);
}

.error-btn::after {
    border-radius: 2rem;
    background: var(--active);

    padding: 2px;
}

.error-pattern {
    position: fixed;
    z-index: -999;
    right: 0;
    height: 100vh;
    width: 100vh;
}
</style>