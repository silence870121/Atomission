<script setup>
import { ref } from 'vue';

let isScrolling = ref(false)
function isScrollTop(params) {
    if (document.querySelector('#mission').scrollTop == 0) return isScrolling.value = false
    isScrolling.value = true
}
</script>

<template>
    <div id="mission" class="container" :class="{ scrolling: isScrolling }" @scroll="isScrollTop">
        <router-view />
    </div>

</template>

<style scoped>
.scrolling {
    box-shadow: inset 0 1rem 1rem -1rem black;
}
</style>
