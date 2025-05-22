<script setup>
import { useMissionStore } from '@stores/mission';
import basicButton from '@/components/basic/button.vue';
import basicInfo from '@/components/basic/info.vue';

import MissionForm from '@/components/mission/MissionForm.vue';
import CompassPreview from '@/components/compass/CompassPreview.vue';
const MissionStore = useMissionStore()
const Editor = MissionStore.missionEditor

function log(msg) {
    console.log(msg);
}
</script>

<template>
    <div class="function-bar">
        <basic-button @click="$router.push('/mission')" round background icon="i-carbon:chevron-left">
            back
        </basic-button>
        <basic-info icon>
            Cancel this mission editing.
        </basic-info>
    </div>
    <div class="content">
        <mission-form v-model:data="Editor" @save="log('save')" @cancel="log('cancel')" @delete="log('delete')" />
        <compass-preview v-model:data="Editor" />
    </div>
</template>

<style scoped>
.function-bar {
    display: flex;
    align-items: center;
    gap: 1rem;
}

.function-bar h2 {
    flex: 1;
    text-align: right;
    color: var(--wireframe-placeholder-color);
}


.function-btn {
    height: 2rem;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    background: var(--action);
    gap: 0.5rem;
    color: var(--label-secondary-color);
    border-radius: var(--border-radius-sm);
    padding: 0.25rem;
    padding-right: 1rem;
    color: var(--active-from-color);
}

.function-btn i {
    font-size: 1.5rem;
}

.content {
    display: flex;
    gap: 1rem;
}
</style>