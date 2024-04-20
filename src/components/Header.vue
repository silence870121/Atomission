<script setup>
import { ref } from 'vue';
defineProps({
    list: Array,
    fn: Function,
    filtered: String
})


</script>

<template>
    <div class="header">
        <!-- logo & theme mode -->
        <div class="logo">
            <svg-icon name="favicon" size="sm" />
            <p>Atomission</p>
            <ThemeBtn />
        </div>
        <!-- search area -->
        <form class="search">
            <input type="text" placeholder="ctrl + K">
            <button> <svg-icon name="setting" size="s" /> </button>
        </form>
        <!-- action button -->
        <div class="btn-group">
            <button class="btn"><svg-icon name="setting" size="s" /></button>
            <button class="btn"><svg-icon name="setting" size="s" /></button>
            <button class="btn user"><svg-icon name="profiles" size="s" /></button>
        </div>

    </div>
</template>

<style scoped>
.header {
    z-index: 1;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 3.5rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0 1rem 0 2rem;
    border-bottom: 1px solid var(--stroke-from-color);
    backdrop-filter: blur(1rem);
    background: var(--nav-rim);
}

.logo {
    display: flex;
    align-items: center;
}

.logo p {
    font-weight: 600;
    letter-spacing: 2px;
}

.search {
    height: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--action);
    padding: 0 0.5rem;
    border-radius: 2rem;
}

.search input {
    background: none;
}

.search button {
    padding: 0;
    margin: 0;
}

.btn-group {
    height: 3.5rem;
}

.btn {
    width: 3rem;
    height: 100%;
}
</style>