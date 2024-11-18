<script setup>
import { ref } from 'vue';
import CompassCard from '@/components/compass/Compass_Card.vue';
import MissionCard from '@/components/Project/MissionCard.vue';
import Swiper from '@/components/layouts/Swiper.vue';

import { useMissionStore } from '@stores/mission';
import { useCompassStore } from '@stores/compass';


//? Mission configs
const mission = useMissionStore()
const compass = useCompassStore()
let missionList = ref([

])

</script>
<template>
    <Router />
    <div class="container">
        <section>
            <h2 class="home-title">
                My Compass
                <router-link to="/compass">more ></router-link>
            </h2>
            <ul class=" compass-list">
                <li>
                    <CompassCard />
                </li>
                <li class="disabled">
                    <CompassCard />
                </li>
                <li class="disabled">
                    <CompassCard />
                </li>
                <li class="disabled">
                    <CompassCard />
                </li>
            </ul>
        </section>
        <section>
            <h2 class="home-title">
                My Mission
                <router-link to="/mission">more ></router-link>
            </h2>
            <div class=" mission-list">
                <Swiper />
            </div>
        </section>
    </div>
</template>

<style scoped>
.container {
    width: 100%;
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 2rem;
    justify-content: space-between;
}

section {
    flex: 1;
    display: flex;
    flex-direction: column;
}

.home-title a {
    color: var(--label-secondary-color);
    padding-left: 1rem;
    font-size: 1rem;
    text-transform: lowercase;
}

.compass-list {
    --min: 5rem;
    --max: 17.5rem;
    display: grid;
    padding-top: 1.5rem;
    grid-template-columns: minmax(var(--min), var(--max)) repeat(auto-fit, minmax(var(--min), var(--max)));
    gap: 1rem;
}

.mission-list {
    padding-top: 1.5rem;
}

.disabled {
    opacity: 0.25;
}
</style>