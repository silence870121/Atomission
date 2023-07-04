<script setup>
import Navigation from './components/Router.vue'
</script>
<template>
  <Navigation />
  <main>
    <router-view />
    <div>
      <a href="https://vitejs.dev" target="_blank">
        <img src="/vite.svg" class="logo" alt="Vite logo" />
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
