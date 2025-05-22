<script setup>
import { useCompassStore } from '@/stores/compass';

import basicButton from '@/components/basic/button.vue';
import basicInfo from '@/components/basic/info.vue';
import CompassForm from '@/components/compass/CompassForm.vue';
import CompassPreview from '@/components/compass/CompassPreview.vue';
const CompassStore = useCompassStore()
const Editor = CompassStore.compassEditor



function log(msg) {
    console.log(msg);
}

</script>

<template>
    <div class="function-bar">
        <basic-button @click="$router.push('/compass')" round background icon="i-carbon:chevron-left">
            back
        </basic-button>
        <basic-info icon>
            Cancel this compass editing.
        </basic-info>
    </div>
    <div class="content">
        <compass-form v-model:data="Editor" @save="log('save')" @cancel="log('cancel')" @delete="log('delete')" />
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