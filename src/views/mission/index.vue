<script setup>
import { ref } from 'vue';

let isScrolling = ref(false)
function isScrollTop(params) {
    if (document.querySelector('#mission').scrollTop == 0) return isScrolling.value = false
    isScrolling.value = true
}
</script>

<template>
    <Router />
    <div id="mission" class="mission" :class="{ scrolling: isScrolling }" @scroll="isScrollTop">
        <router-view />
    </div>

</template>

<style scoped>
.mission {
    width: 100%;
    overflow-y: auto;
    box-shadow: inset 0 0 1rem -1rem black;
    transition: box-shadow 100ms ease-in-out;
    padding: 2rem;
}

.scrolling {
    box-shadow: inset 0 1rem 1rem -1rem black;
}
</style>
