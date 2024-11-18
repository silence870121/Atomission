<script setup>
import Masonry from '@/components/Masonry.vue';
import { useDataStore } from '@stores/data';
const DataStore = useDataStore()


</script>

<template>
    <div class="function-bar">
        <form action="">
            <input type="text" name="filter" id="" placeholder="ctrl + K">
            <button type="button">search</button>
            <button type="button">filter</button>
        </form>
        <button class="create-btn">
            <i class="i-carbon:add-large"></i>
            <a href="/mission/edit"></a>
            <router-link to="/mission/edit">
                New mission
            </router-link>
        </button>
    </div>
    <Masonry :data="DataStore.missions" />
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

.create-btn {
    display: flex;
    align-items: center;
    gap: 0.125rem;
    padding: 0.25rem;
    padding-right: 0.75rem;
    border-radius: var(--border-radius-sm);
    background: var(--action);
    color: var(--active-from-color);
    font-size: 0.75rem;
    text-transform: capitalize;
}

.create-btn i {
    font-size: 1rem;
}
</style>