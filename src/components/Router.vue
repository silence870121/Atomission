<script setup>
import Theme from './Theme.vue'
</script>

<template>
    <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/missions">Mission</router-link></li>
        <li> <router-link to="/targets">Target</router-link></li>
        <li><router-link to="/profile">Profiles</router-link></li>
        <li>
            <Theme />
        </li>
    </ul>
</template>

<style scoped></style>