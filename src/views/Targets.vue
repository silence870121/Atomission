<script setup>
import TargetCard from '@/components/Project/TargetCard.vue';
import TargetOption from '@/components/Project/TargetOption.vue';
import { ref } from 'vue';

let activeTargetOption = ref(true)

function openOption() {
    activeTargetOption.value = true
}
function closeOption() {
    activeTargetOption.value = false
}

</script>

<template>
    <Router />
    <div class="container">
        <div class="target">
            <h2>----- Target -----</h2>
            <TargetCard :title="'First Target'" :stage="'初階'" :progress=100 :create-date="'2023-01-01'"
                :modified-date="'2023-07-01'" tracked detail @click="openOption" />
            <TargetCard :title="'First Target'" :stage="'初階'" :progress=100 :create-date="'2023-01-01'" :modified-date="''"
                tracked detail @click="openOption" />
            <TargetCard :title="'First Target'" :stage="'初階'" :progress=100 :create-date="'2023-01-01'"
                :modified-date="'2023-07-01'" tracked @click="openOption" />
        </div>

        <div v-show="activeTargetOption" class="target target-option border">
            <button class="close-btn" @click="closeOption"> <svg-icon name="close" /> </button>
            <TargetOption />
        </div>
    </div>
</template>

<style scoped>
h2 {
    font-size: 1.5rem;
    font-weight: bold;
    text-align: left;
    padding-bottom: 1rem;
}


.target {
    display: flex;
    gap: 1rem;
    flex-direction: column;
    padding-bottom: 1rem;
}

.target-option {
    position: fixed;
    right: 0;
    margin: 2rem;
    margin-top: 3.5rem;
    /* background-color: var(--surface-color); */
    box-shadow: 0 0 1rem var(--on-surface-color);
    backdrop-filter: blur(1rem);
}

@media (max-width: 540px) {
    .target-option {
        left: 0;
        margin: 1rem 15px;
        top: 50%;
        transform: translateY(-50%);
    }
}
</style>