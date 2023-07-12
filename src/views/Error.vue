<script setup>
</script>
<!-- TODO -->
<template>
    <div class="container">
        <div class="error">
            <svg-icon name="favicon" size="lg" />
            <h2>404 Not Found</h2>
        </div>
    </div>
</template>

<style scoped>
svg {
    width: 10rem;
    height: 10rem;
    color: var(--surface-variant-color);
    color: var(--on-surface-color);
}

h2 {
    text-align: center;
    padding: 2rem;
    color: var(--on-surface-color);
}

.error {
    flex: 1;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
</style>