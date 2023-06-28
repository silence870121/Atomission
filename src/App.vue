<script setup>
import Navigation from './components/Router.vue'
import Logo from './components/Logo.vue'
</script>
<template>
  <Navigation />
  <main>
    <router-view class="contect" />
    <div>
      <a href="https://vitejs.dev" target="_blank">
        <img src="/vite.svg" class="logo" alt="Vite logo" />
      </a>
      <a href="https://vuejs.org/" target="_blank">
        <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
      </a>
    </div>
  </main>
</template>

<style scoped>
main {
  height: 100%;
  flex: 1;
  padding: 2rem;
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: column;
}
</style>
