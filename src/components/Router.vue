<script setup>
import { ref, onMounted } from 'vue'


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
        <div class="nav-title">
            <svg-icon class="logo" name="favicon" size="md" />
            <h1 class="title">Atomission</h1>
        </div>

        <!-- <button class="close-btn" @click="closeMenu">
            <svg-icon name="close" />
        </button> -->
        <div class="nav-menu">
            <ul>
                <li>
                    <router-link to="/" @click="toLocal('Atomission')">
                        <div class="icon"> <svg-icon name="home" /> </div>
                        Home
                    </router-link>
                </li>
                <li>
                    <router-link to="/missions" @click="toLocal('missions')">
                        <div class="icon"> <svg-icon name="mission" /> </div>
                        Mission
                    </router-link>
                </li>
                <li>
                    <router-link to="/targets" @click="toLocal('targets')">
                        <div class="icon"> <svg-icon name="target" /> </div>
                        Target
                    </router-link>
                </li>
                <li>
                    <router-link to="/profile" @click="toLocal('profile')">
                        <div class="icon"><svg-icon name="profiles" /></div>
                        Profiles
                    </router-link>
                </li>
                <li>
                    <router-link to="/setting" @click="toLocal('setting')">
                        <div class="icon"><svg-icon name="setting" /></div>
                        Setting
                    </router-link>
                </li>

            </ul>
        </div>
        <div class="nav-menu">
            <h3>My story line</h3>
            <ul>
                <li>
                    <router-link to="/test" @click="toLocal('test')">
                        <div class="icon"> <svg-icon name="info" /> </div>
                        Test
                    </router-link>
                </li>
            </ul>
        </div>
        <div class="nav-menu">
            <h3>My team</h3>
            <ul>

                <li>
                    <router-link to="/error" @click="toLocal('error')">
                        <div class="icon"> <svg-icon name="info" /> </div>
                        Error
                    </router-link>
                </li>
            </ul>
        </div>
    </nav>
</template>

<style scoped  >
.navbar {
    /* width: 15rem; */
    display: flex;
    flex-direction: column;
    background: var(--surface);
    border-image: var(--border) 1;
    border-right: 1px solid;
    gap: 1rem;
    color: var(--label-secondary-color);
}

.nav-title {
    display: flex;
    align-items: center;
    /* gap: 1rem; */
    padding: 1rem;
    padding-top: 2rem;
    color: var(--label-primary-color);
}

.nav-title h1 {
    font-size: 2rem;
    /* line-height: 1.5; */
    font-family: 'Times New Roman', Times, serif;
    font-weight: bold;
    background: var(--active);
    background-clip: text;
    color: transparent;
    padding-right: 1rem;
}

.nav-menu h3 {
    text-align: left;
    padding: 1rem;
    padding-bottom: 0.5rem;
}


.nav-menu ul li .icon {
    color: var(--label-quaternary-color);
    width: 2rem;
    height: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
}

.nav-menu ul li .icon svg {
    width: 1.5rem;
}

.nav-menu ul li .router-link-exact-active .icon {
    color: var(--label-primary-color);
    /* background: var(--active); */
    border-radius: 3rem;
    position: relative;
    background: var(--surface);
}

.nav-menu ul li .router-link-exact-active .icon::after {
    content: "";
    position: absolute;
    z-index: -1;
    left: -1px;
    top: -1px;
    bottom: -1px;
    right: -1px;
    padding: 1px;
    border-radius: 3rem;
    background: var(--active);
    --m-o: content-box, padding-box;
    --m-i: linear-gradient(white, black);
    mask-image: var(--m-i), var(--m-i);
    -webkit-mask-image: var(--m-i), var(--m-i);
    mask-origin: var(--m-o);
    -webkit-mask-origin: var(--m-o);
    mask-clip: var(--m-o);
    -webkit-mask-clip: var(--m-o);
    mask-composite: exclude;
    -webkit-mask-composite: destination-out;
}

.nav-menu ul li a {
    position: relative;
    display: flex;
    align-items: center;
    gap: 1.5rem;
    padding: 1rem 1.5rem;
    border-image: var(--line-row) 1;
    border-bottom: 1px solid;
    transition: all 200ms ease-in-out;
}

.nav-menu ul li a:hover {
    color: var(--label-primary-color);
}

.nav-menu ul li a::after {
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

.nav-menu ul li a:hover::after {
    opacity: 0.75;
    transition: all 200ms ease-in-out;
}

.nav-menu ul li a.router-link-exact-active {
    background: var(--nav-active);
    color: var(--label-primary-color);
}

.nav-menu ul li a.router-link-exact-active,
.nav-menu ul li:last-child a {
    border: none
}

@media (max-width:540px) {
    .navbar {
        z-index: 99;
        position: fixed;
        width: 100%;
        gap: 0.5rem;
        flex-direction: row;
        align-items: center;
        padding: 0 15px;
        height: 44px;
        border-bottom: 1px solid;
        border-image: var(--border-center-row) 1;
        box-shadow: 0 0.5rem 1rem var(--on-primary-color);
    }

    .navbar .location {
        display: block;
        padding-bottom: 0.25rem;
    }

    .logo {
        width: 2rem;
        height: 2rem;
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