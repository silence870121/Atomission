<script setup>
import { ref } from 'vue';
defineProps({
    list: Array,
    fn: Function,
    filtered: String
})


</script>

<template>
    <header class="nav">
        <!-- logo & theme mode -->
        <router-link to="/" class="logo">
            <svg-icon name="favicon" size="sm" />
            Atomission
        </router-link>
        <!-- search area -->
        <form class="search">
            <input type="text" placeholder="ctrl + K">
            <button class="search-btn" @click="console.log('info')">
                <i class="i-carbon:search" />
            </button>
        </form>
        <!-- action button -->
        <div class="action">
            <a @click="console.log('info')"><i class="i-carbon:information" /></a>
            <a @click="console.log('info')"><i class="i-carbon:information" /></a>
            <a @click="console.log('user')"><i class="i-carbon:user" /></a>
            <ThemeBtn />
        </div>

    </header>
</template>

<style scoped>
.nav {
    position: fixed;
    z-index: 1;
    width: 100%;
    height: 3.5rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0 2rem 0 1rem;
    border-bottom: 1px solid var(--stroke-from-color);
    backdrop-filter: blur(1rem);
    background: var(--nav-rim);
}

.logo {
    height: 100%;
    display: flex;
    align-items: center;
    font-weight: 600;
    letter-spacing: 2px;
}


.search {
    display: grid;
    grid-gap: 1.5rem;
    grid-auto-flow: column;
    background: var(--action);
    border-radius: 0.5rem;
    padding: 0.5rem;
}


.action {
    display: grid;
    grid-gap: 1.5rem;
    grid-auto-flow: column;
}

.action a {
    font-size: 1.5rem;
    display: flex;
    cursor: pointer;
    color: var(--label-secondary-color);
    transition: all 200ms linear;
}

.action a:hover {
    color: var(--label-primary-color);
}
</style>