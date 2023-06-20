<script setup>
import Router from './components/Router.vue'
import Theme from './components/Theme.vue'
import Logo from './components/Logo.vue'
</script>
<template>
  <div class="navbar">
    <Router />
    <Theme />
  </div>
  <main>
    <Logo />
    <router-view class="contect" />
  </main>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
</template>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid;
  padding: 15PX 1rem;
}

main {
  padding-top: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
