<script setup>
import Masonry from '@/components/Masonry.vue';
import { useMissionStore } from '../stores/mission';
const mission = useMissionStore()
</script>

<template>
    <div class="function-bar">
        <form action="">
            <input type="text" name="filter" id="" placeholder="ctrl + K">
            <button type="button">search</button>
            <button type="button">filter</button>
        </form>
        <button type="button">
            <router-link to="/missions/edit">
                New mission
            </router-link>
        </button>
    </div>

    <Masonry :list="mission.data" />
</template>

<style scoped>
.function-bar {
    /* width: 100%; */
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 2rem;
}


.function-bar form {
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>