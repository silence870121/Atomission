<script setup>
import TargetCard from '@/components/Project/TargetCard.vue';


</script>

<template>
    <div class="target">
        <TargetCard :title="'First Target'" :stage="'初階'" :progress=100 :create-date="createDate"
            :modified-date="'2023-07-01'" tracked detail />
        <TargetCard :title="'First Target'" :stage="'初階'" :progress=100 :create-date="createDate"
            :modified-date="'2023-07-01'" tracked />
    </div>

    <div class="target-option">
        <h2 class="target-option-title">s</h2>
    </div>
</template>

<style scoped>
h2 {
    padding-bottom: 2rem;
}

.target {
    width: 100%;
    display: flex;
    gap: 1rem;
    flex-direction: column;
    padding-bottom: 1rem;
}
</style>