<script setup>
import { ref } from 'vue'
import { useMenuStore } from "@stores/menu.js";

const menuStore = useMenuStore();

</script>

<template>
    <nav class="navbar">

        <ul class="nav-group">
            <li v-for="router in menuStore.routes">
                <router-link :to="router.path">
                    <div class="nav-icon"> <i :class=router.icon /> </div>
                    <div class="content">
                        {{ router.content }}
                    </div>
                </router-link>
            </li>
        </ul>
        <div class="nav-group" v-for="mission in menuStore.bookmark">
            <h3>{{ mission.compass }}</h3>
            <ul>
                <li v-for="router in mission.routes">
                    <router-link :to="router.path">
                        <div class="nav-icon"> <i :class=router.icon /> </div>
                        <div class="content">
                            {{ router.content }}
                        </div>
                    </router-link>
                </li>
            </ul>
        </div>
        <div class="nav-group">
            <h3>dev tool</h3>
            <ul>
                <li v-for="router in menuStore.custom">
                    <router-link :to="router.path">
                        <div class="nav-icon"> <i :class=router.icon /> </div>
                        <div class="content">
                            {{ router.content }}
                        </div>
                    </router-link>
                </li>
            </ul>
        </div>

    </nav>
</template>

<style scoped>
.navbar {
    height: calc(100vh - 3.5rem);
    position: sticky;
    top: 3.5rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    background: var(--surface);
    border-image: var(--line-column) 1;
    border-right: 1px solid;
    color: var(--label-secondary-color);
    text-transform: capitalize;
}


.nav-group h3 {
    text-align: left;
    padding: 1rem;
    padding-bottom: 0.5rem;
}

.nav-icon {
    color: var(--label-quaternary-color);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
}


a {
    width: 10rem;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: start;
    gap: 0.5rem;
    padding-left: 1.5rem;
    padding-right: 2rem;
    border-image: var(--line-row) 1;
    border-bottom: 1px solid;
    transition: all 200ms ease-in-out;
}

.content {
    padding: 1rem 0;
    overflow: hidden;
}

a.router-link-active,
.nav-group ul li:last-child a {
    border: none
}

a:hover {
    color: var(--label-primary-color);
}

a::after {
    z-index: -1;
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background: var(--nav-active);
    opacity: 0;
}

a:hover::after {
    opacity: 0.75;
    transition: all 200ms ease-in-out;
}

.router-link-active,
.router-link-active:hover {
    font-weight: 600;
    background: var(--nav-active);
    color: var(--active-from-color);
}

.router-link-active::after {
    display: none;
}

.router-link-active .nav-icon {
    color: var(--active-from-color);
}

@media (max-width:540px) {
    .navbar {
        top: 0;
        bottom: 0;
        left: 0;
        transform: translateX(calc(-100% + 0.5rem));
        position: fixed;
        z-index: 9;
        background: var(--background);
        transition: all 500ms ease-in-out;
    }

    .navbar:hover {
        transform: translateX(0);
        transition: all 200ms ease-in-out;
        box-shadow: 0 0 1rem black;
    }
}
</style>