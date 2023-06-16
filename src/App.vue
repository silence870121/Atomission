<script setup>
import HelloWorld from './components/HelloWorld.vue'
import Router from './components/Router.vue'
import Theme from './components/Theme.vue'
</script>
<template>
  <Theme />
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
.theme-light :root {
  --primary-color: rgb(0, 85, 204);
  --primary-variant-color: rgb(102, 166, 255);
  --on-primary-color: rgb(255, 255, 255);

  --background-color: rgb(229, 240, 255);
  --background-variant-color: rgb(204, 225, 255);

  --surface-color: rgba(255, 255, 255, 0.75);
  --surface-variant-color: rgb(204, 225, 255);

  --on-background-color: rgb(0, 85, 204);
  --on-surface-color: rgb(0, 42, 102);

  --border-color: rgb(102, 166, 255);
  --border-variant-color: rgb(204, 225, 255);

  --border-center-color: rgb(0, 106, 255);
  --border-center-variant-color: rgba(102, 166, 255, 0);

  --error-color: rgb(204, 0, 0);
}

.theme-dark :root {
  --primary-color: rgb(255, 204, 51);
  --primary-variant-color: rgb(153, 115, 0);
  --on-primary-color: rgb(0, 0, 0);

  --background-color: rgb(51, 38, 0);
  --background-variant-color: rgb(102, 77, 0);

  --surface-color: rgba(0, 0, 0, 0.75);
  --surface-variant-color: rgb(77, 57, 0);

  --on-background-color: rgb(255, 204, 51);
  --on-surface-color: rgb(255, 229, 153);

  --border-color: rgb(204, 153, 0);
  --border-variant-color: rgb(255, 217, 102);

  --border-center-color: rgb(255, 191, 0);
  --border-center-variant-color: rgba(153, 115, 0, 0);

  --error-color: rgb(255, 51, 51);

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
