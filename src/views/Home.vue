<script setup>
import TargetCard from '@/components/Project/TargetCard.vue';
</script>

<template>
    <div class="target-simplify">
        <TargetCard :title="'First Target'" :progress=100 />
        <TargetCard :title="'First Target'" :progress=100 />
        <TargetCard :title="'First Target'" :progress=100 />
        <TargetCard :title="'First Target'" :progress=100 />
    </div>
</template>

<style scoped>
.target-simplify {
    width: 100%;
    display: flex;
    gap: 0.5rem;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
}

.target-simplify>>>.target-svg {
    width: 3rem;
    height: 3rem;
}

.target-simplify .target-card {
    flex: 1;
}
</style>