<script setup>
import HelloWorld from './components/HelloWorld.vue'
import Router from './components/Router.vue'
import Theme from './components/Theme.vue'
</script>
<template>
  <Theme />
  <div class="theme-display">
    <div class="primary">primary</div>
    <div class="secondary">secondary</div>
    <div class="background">background</div>
    <div class="surface">surface</div>
  </div>
  <Router />
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue + " />
</template>

<style scoped>
:root {
  --primary-color: white;
  --secondary-color: purple;
}

.theme-btn {
  background-color: var(--primary-color);
  color: var(--on-primary-color);
  transition: all 200ms linear;
}

.theme-display {
  padding: 1rem;
  margin: 1rem;
  background-color: rgb(128, 128, 128);
  display: flex;
  border: 1px solid var(--grid-color);
  border-radius: 0.5rem;
}

.theme-display>div {
  padding: 0.5rem 1rem;
  border: 1px solid var(--grid-color);
  margin: 0.5rem;
  border-radius: 0.5rem;
  transition: all 200ms linear;
}

.primary {
  background-color: var(--primary-color);
  color: var(--on-primary-color);
}

.secondary {
  background-color: var(--secondary-color);
  color: var(--on-secondary-color);
}

.background {
  background-color: var(--background-color);
  color: var(--on-background-color);
}

.surface {
  background-color: var(--surface-color);
  color: var(--on-surface-color);
}

.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
