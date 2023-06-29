<script setup>
import { onMounted } from 'vue'
import ThemeBtn from './Theme.vue'
import Logo from './Logo.vue'
let location = 'Atomission'

function toggleMenu(params) {
    document.querySelector('.navbar-menu').classList.toggle('show')
    console.log(
        document.querySelector('.navbar-menu').classList
    );
}

</script>

<template>
    <nav class="navbar">
        <h2>{{ location }}</h2>
        <button class="navbar-user" @click="toggleMenu">
            <Logo class="logo" />
            <span>UserName</span>
        </button>
        <div class="navbar-menu">
            <button class="btn" @click="toggleMenu">X</button>
            <ul>
                <li>
                    <img src="/public/Icon/home.svg" alt="Home icon">
                    <router-link to="/" @click="location = 'Home'">Home</router-link>
                </li>
                <li>
                    <img src="/public/Icon/mission.svg" alt="Mission icon">
                    <router-link to="/missions" @click="location = 'Mission'">Mission</router-link>
                </li>
                <li>
                    <img src="/public/Icon/target.svg" alt="Target icon">
                    <router-link to="/targets" @click="location = 'Target'">Target</router-link>
                </li>
                <li>
                    <img src="/public/Icon/profiles.svg" alt="Profiles icon">
                    <router-link to="/profile" @click="location = 'Profiles'">Profiles</router-link>
                </li>
                <li>
                    <img src="/public/Icon/setting.svg" alt="Setting icon">
                    <router-link to="/setting" @click="location = 'Setting'">Setting</router-link>
                </li>
                <li>
                    <ThemeBtn />
                </li>
            </ul>
        </div>

    </nav>
</template>

<style scoped>
.navbar {
    background-color: var(--surface-color);
    padding: 3rem 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
    border-right: 1px solid;
    border-image: var(--border-center) 1;
}

.navbar-user {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    cursor: pointer;
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
    /* justify-content: center; */
    flex-direction: column;
    /* align-items: center; */
}

.navbar-menu .btn {
    display: none;
}

.navbar-menu ul {
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    align-items: flex-start;
    gap: 1.5rem;

}

.navbar-menu li {
    gap: 0.5rem;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: nowrap;
    color: var(--on-background-color);
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

    .navbar-user span {
        display: none;
        order: 0;
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