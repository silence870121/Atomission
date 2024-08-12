<script setup>
</script>
<template>
    <div class="error">
        <p class="code">404</p>
        <h1 class="title">Page not found</h1>
        <div class="divider"> </div>
        <blockquote class="quote">
            But if you don't change your direction, and if you keep looking, you may end up
            where you are heading.
        </blockquote>
        <router-link to="/" class="btn">
            back Home
        </router-link>
    </div>
</template>

<style scoped>
.error {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 8rem 2rem;
    margin-left: -10rem;
    text-align: center;
}

.code {
    font-size: 4rem;
    line-height: 4rem;
    font-weight: 600;
    color: var(--active-from-color);
}

.title {
    padding-top: 12px;
    letter-spacing: 2px;
    line-height: 20px;
    font-size: 20px;
    font-weight: 700;
    text-transform: uppercase;
    color: var(--active-from-color);
}

.divider {
    margin: 24px auto 18px;
    width: 10rem;
    height: 1px;
    background: var(--line-row);
}

.quote {
    max-width: 16rem;
    font-size: 14px;
    font-weight: 500;
    line-height: 24px;
    color: var(--label-secondary-color);
}

.btn {
    padding: 0.5rem 1rem;
    margin-top: 2rem;
    border-radius: 2rem;
    /* background: var(--action); */
    border: 2px solid var(--wireframe-placeholder-color);
}
</style>