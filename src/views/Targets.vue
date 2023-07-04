<script setup>
import TargetCard from '@/components/Project/TargetCard.vue';
</script>

<template>
    <h2> Target </h2>
    <TargetCard title="First Target" stage="初階" :progress=100 create-date="2023-01-01" modified-date="2023-07-01" tracked />
</template>

<style scoped>
h2 {
    padding-bottom: 2rem;
}
</style>