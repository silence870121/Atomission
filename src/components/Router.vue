<script setup>
import { ref } from 'vue'

const index = ref([
    {
        path: "/",
        icon: "home",
        content: "home"
    }, {
        path: "/compass",
        icon: "target",
        content: "area"
    }, {
        path: "/mission",
        icon: "mission",
        content: "mission"
    }, {
        path: "/profiles",
        icon: "profiles",
        content: "profiles"
    }, {
        path: "/settings",
        icon: "setting",
        content: "setting"
    }
])
const customIndex = ref([
    {
        path: "/test",
        icon: "info",
        content: "test"
    }, {
        path: "/404",
        icon: "info",
        content: "error"
    }
])

</script>

<template>
    <nav class="navbar">
        <div class="nav-group">
            <ul>
                <li v-for="i in index">
                    <router-link :to="i.path">
                        <div class="nav-icon"> <svg-icon :name="i.icon" size="s" /> </div>
                        <div class="content">
                            {{ i.content }}
                        </div>
                    </router-link>
                </li>
            </ul>
        </div>
        <div class="nav-group">
            <h3>My team</h3>
            <ul>
                <li v-for="i in customIndex">
                    <router-link :to="i.path">
                        <div class="nav-icon"> <svg-icon :name="i.icon" size="s" /> </div>
                        <div class="content">
                            {{ i.content }}
                        </div>
                    </router-link>
                </li>
            </ul>
        </div>
    </nav>
</template>

<style scoped>
.navbar {
    position: fixed;
    top: 3.5rem;
    left: 0;
    height: 100%;
    display: flex;
    gap: 1rem;
    flex-direction: column;
    background: var(--surface);
    border-image: var(--line-column) 1;
    border-right: 1px solid;
    color: var(--label-secondary-color);
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

a.router-link-exact-active,
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

.router-link-exact-active,
.router-link-exact-active:hover {
    font-weight: 600;
    background: var(--nav-active);
    color: var(--active-from-color);
}

.router-link-exact-active::after {
    display: none;
}

.router-link-exact-active .nav-icon {
    color: var(--active-from-color);
}

@media (max-width:540px) {
    .navbar {
        top: 0;
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