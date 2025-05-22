<script setup>
import CompassCard from '@/components/compass/CompassCard.vue';
import basicButton from '@/components/basic/button.vue';
import { useCompassStore } from '@stores/compass';
import { ref } from 'vue';


</script>

<template>
    <div class="container">
        <router-view />
    </div>
</template>

<style scoped>
.compass-toolbar {
    max-width: 51rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 1rem;
}

.view-mode {
    display: flex;
    gap: 0.5rem;
}


.compass-layout {
    --min: 7.5rem;
    --max: 25rem;
    display: grid;
    grid-auto-flow: row;
    grid-gap: 1rem;
    grid-template-columns: repeat(auto-fit, minmax(var(--min), var(--max)));
}

.compass-layout-card {
    --min: 7.5rem;
    --max: 15rem;
    display: grid;
    padding-top: 1.5rem;
    gap: 1rem;
    grid-template-columns: minmax(var(--min), var(--max)) repeat(auto-fit, minmax(var(--min), var(--max)));
}

@media (max-width:540px) {
    .container {
        padding: 1rem;
    }

    .compass-layout {
        --max: 100%;
    }
}
</style>