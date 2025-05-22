<script setup>
import Masonry from '@/components/Masonry.vue';
import basicButton from '@/components/basic/button.vue';
import formText from '@/components/form/text.vue';
import { useDataStore } from '@stores/data';
import { useMissionStore } from '@stores/mission';
import { onMounted } from 'vue';

const PAGE_PATH = '/mission'
const DataStore = useDataStore()
const MissionStore = useMissionStore()

onMounted(() => {
    MissionStore.getAllMission()
})
</script>

<template>
    <div class="function-bar">
        <form action="">
            <form-text name="filter" placeholder="ctrl + K" />
            <basic-button round background icon="i-carbon:search" />
            <basic-button round background icon="i-carbon:filter" />
        </form>
        <basic-button @click="$router.push('/mission/edit')" round background icon="i-carbon:add-large">
            New mission
        </basic-button>
    </div>
    <Masonry :data="MissionStore.missionList" />
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
    gap: 0.5rem;
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