<script setup>
import ThemeBtn from './Theme.vue'
import Logo from './Logo.vue'
</script>

<template>
    <ul class="navbar">
        <li>
            <Logo class="logo" />
            <a href="">UserName</a>
        </li>
        <li>
            <img src="/public/Icon/home.svg" alt="Home icon">
            <router-link to="/">Home</router-link>
        </li>
        <li>
            <img src="/public/Icon/mission.svg" alt="Mission icon">
            <router-link to="/missions">Mission</router-link>
        </li>
        <li>
            <img src="/public/Icon/target.svg" alt="Target icon">
            <router-link to="/targets">Target</router-link>
        </li>
        <li>
            <img src="/public/Icon/profiles.svg" alt="Profiles icon">
            <router-link to="/profile">Profiles</router-link>
        </li>
        <li class="footer">
            <ThemeBtn />
        </li>
    </ul>
</template>

<style scoped>
.navbar {
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    align-items: center;
    border-right: 1px solid;
    background-color: var(--surface-color);
    padding: 3rem 2rem;
    gap: 1.5rem;
}

.navbar li {
    /* width: 100%; */
    gap: 0.5rem;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-self: start;
    align-items: center;
    flex-wrap: nowrap;
}

.navbar .logo {
    width: 1.5rem;
    height: 1.5rem;
}

.navbar .logo::after {
    border-radius: 50%;
}

.navbar li img {
    width: 1.5rem;
    height: 1.5rem;
    fill: var(--primary-color);
}

.navbar .footer {
    flex: 1;
}
</style>