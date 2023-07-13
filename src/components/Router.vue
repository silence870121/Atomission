<script setup>
import { ref, onMounted } from 'vue'
let location = ref('Atomission')

const getLocation = onMounted(() => {
    if (window.location.pathname.substring(1)) return location.value = window.location.pathname.substring(1)
})
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
        <h1 class="title">Atomission</h1>
        <h2 class="location">{{ location }}</h2>
        <button class="navbar-user" @click="toggleMenu">
            <!-- <Logo class="logo" /> -->
            <svg-icon class="logo" name="favicon" size="sm" />
            <span>UserName</span>
        </button>
        <div class="navbar-menu">
            <button class="close-btn" @click="closeMenu">
                <svg-icon name="close" />
            </button>
            <ul>
                <li>
                    <router-link to="/" @click="toLocal('Atomission')">
                        <svg-icon name="home" />
                        Home
                    </router-link>
                </li>
                <li>
                    <router-link to="/missions" @click="toLocal('missions')">
                        <svg-icon name="mission" />
                        Mission
                    </router-link>
                </li>
                <li>
                    <router-link to="/targets" @click="toLocal('targets')">
                        <svg-icon name="target" />
                        Target
                    </router-link>
                </li>
                <li>
                    <router-link to="/profile" @click="toLocal('profile')">
                        <svg-icon name="profiles" />
                        Profiles
                    </router-link>
                </li>
                <li>
                    <router-link to="/setting" @click="toLocal('setting')">
                        <svg-icon name="setting" />
                        Setting
                    </router-link>
                </li>
            </ul>
        </div>

    </nav>
</template>

<style scoped  >
.navbar {
    display: flex;
    gap: 1.5rem;
    flex-direction: column;
    padding: 3rem 1rem;
    background-color: var(--surface-color);
    border-image: var(--border-center) 1;
    border-right: 1px solid;
}

.navbar .title,
.navbar .location {
    font-weight: 600;
    font-size: 1.5rem;
    text-transform: capitalize;
}

.navbar .location {
    display: none;
}

.navbar-user {
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 0.5rem;
    cursor: pointer;
    padding: 0 16px;
    font-size: 1rem;
}

.logo {
    width: 2rem;
    height: 2rem;
}

.logo::after {
    border-radius: 50%;
}

.navbar-menu {
    display: flex;
    flex-direction: column;
}

.navbar-menu .close-btn {
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
    color: var(--primary-color);
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
    color: var(--on-surface-color);
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



@media (max-width:540px) {
    .navbar {
        width: 100%;
        gap: 0.5rem;
        flex-direction: row;
        align-items: center;
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

    .navbar-user {
        padding: 0;
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

    .navbar-menu .close-btn {
        display: block;
    }

    .navbar-menu ul {
        padding-right: 2rem;
    }
}
</style>