<script setup>
import TargetCard from '@/components/Project/TargetCard.vue';


</script>

<template>
    <Router />
    <div class="container">
        <div class="target">
            <h2>----- Target -----</h2>
            <TargetCard :title="'First Target'" :stage="'初階'" :progress=100 :create-date="'2023-01-01'"
                :modified-date="'2023-07-01'" tracked detail />
            <TargetCard :title="'First Target'" :stage="'初階'" :progress=100 :create-date="'2023-01-01'"
                :modified-date="'2023-07-01'" tracked />
        </div>

        <div class="target-option">
            <h2 class="target-option-title"></h2>
        </div>
    </div>
</template>

<style scoped>
h2 {
    font-size: 1.5rem;
    font-weight: bold;
    text-align: left;
}

.target {
    display: flex;
    gap: 1rem;
    flex-direction: column;
    padding-bottom: 1rem;
}
</style>