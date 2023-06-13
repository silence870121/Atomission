<template>
    <nav class="navbar">
        <router-link to="/">Home</router-link> | <router-link to="/missions">Mission</router-link> | <router-link
            to="/targets">Target</router-link> | <router-link to="/profile">Profiles</router-link>
    </nav>
    <main>
        <router-view />
    </main>
</template>

<style scoped>
.navbar {
    border-bottom: 1px solid;
    padding: 1rem 0;
}
</style>