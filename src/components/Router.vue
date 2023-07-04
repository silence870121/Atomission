<script setup>
import { ref, onMounted, watch } from 'vue'
import ThemeBtn from './Theme.vue'
import Logo from './Logo.vue'
let location = ref('Atomission')

function toggleMenu(params) {
    document.querySelector('.navbar-menu').classList.toggle('show')
}
function openMenu(params) {
    document.querySelector('.navbar-menu').classList.add('show')
}
function closeMenu(params) {
    document.querySelector('.navbar-menu').classList.remove('show')
}
function toLocal(page) {
    location.value = page
    closeMenu()
}
</script>

<template>
    <nav class="navbar">
        <h2 class="title">Atomission</h2>
        <h2 class="location">{{ location }}</h2>
        <button class="navbar-user" @click="toggleMenu">
            <Logo class="logo" />
            <span>UserName</span>
        </button>
        <div class="navbar-menu">
            <button class="btn" @click="closeMenu">X</button>
            <ul>
                <li>
                    <router-link to="/" @click="toLocal('Atomission')">
                        <img src="/public/Icon/home.svg" alt="Home icon">
                        Home
                    </router-link>
                </li>
                <li>
                    <router-link to="/missions" @click="toLocal('Mission')">
                        <img src="/public/Icon/mission.svg" alt="Mission icon">
                        Mission
                    </router-link>
                </li>
                <li>
                    <router-link to="/targets" @click="toLocal('Target')">
                        <img src="/public/Icon/target.svg" alt="Target icon">
                        Target
                    </router-link>
                </li>
                <li>
                    <router-link to="/profile" @click="toLocal('Profiles')">
                        <img src="/public/Icon/profiles.svg" alt="Profiles icon">
                        Profiles
                    </router-link>
                </li>
                <li>
                    <router-link to="/setting" @click="toLocal('Setting')">
                        <img src="/public/Icon/setting.svg" alt="Setting icon">
                        Setting
                    </router-link>
                </li>
                <li>
                    <ThemeBtn />
                </li>
            </ul>
        </div>

    </nav>
</template>

<style scoped  >
.navbar {
    background-color: var(--surface-color);
    padding: 3rem 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
    border-right: 1px solid;
    border-image: var(--border-center) 1;
}

.navbar .title,
.navbar .location {
    font-weight: 600;
    font-size: 1.5rem;
}

.navbar .location {
    display: none;
}

.navbar-user {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    cursor: pointer;
    padding: 0;
}

.logo {
    width: 1.5rem;
    height: 1.5rem;
}

.logo::after {
    border-radius: 50%;
}

.navbar-menu {
    display: flex;
    flex-direction: column;
}

.navbar-menu .btn {
    display: none;
}


.navbar-menu ul {
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
}

.navbar-menu li {
    width: 100%;
}

.navbar-menu li a {
    color: var(--primary-variant-color);
    padding: 0.5rem 1rem;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: nowrap;
    gap: 0.5rem;
    transition: all 200ms ease-in-out;
}

.navbar-menu li a:hover,
.navbar-menu li a.router-link-exact-active {
    background-color: var(--surface-variant-color);
    /* background-color: var(--primary-variant-color); */
    color: var(--primary-color);
    border-radius: 0.5rem;
    transition: all 0s;
}

.navbar-menu li img {
    width: 1.5rem;
    height: 1.5rem;
    /* fill: var(--primary-color); */
}




.navbar-footer {
    align-self: center;
    flex: 1;
}



@media (max-width:375px) {
    .navbar {
        flex-direction: row;
        padding: 0 15px;
        height: 44px;
        border-bottom: 1px solid;
        border-image: var(--border-center-row) 1;
    }

    .navbar .title {
        display: none;
    }

    .navbar .location {
        display: block;
        padding-bottom: 0.25rem;
    }

    .navbar-user span {
        display: none;
        order: 0;
    }

    .logo {
        width: 2rem;
        height: 2rem;
    }

    .navbar h2 {
        order: 1;
    }

    .navbar-menu {
        display: none;
        left: 50%;
        transform: translateX(-50%);
        height: 90vh;
        border-radius: 1rem;
        position: fixed;
        z-index: 1;
        background-color: var(--surface-color);
        backdrop-filter: blur(0.5rem);
        box-shadow: 0px 4px 16px 0px var(--surface-variant-color);
        align-items: center;
        gap: 2rem;
        padding: 3rem 0;
        width: 90vw;
        top: 2rem;
        transition: opacity 200ms linear;
        opacity: 0;
    }

    .navbar-menu.show {
        display: flex;
        opacity: 1;
    }

    .navbar-menu .btn {
        display: block;
        position: fixed;
        top: 0;
        right: 0;
        padding: 0;
        margin: 0.5rem;
        width: 1.5rem;
        height: 1.5rem;
    }

    .navbar-menu ul {
        padding-right: 2rem;
    }
}
</style>