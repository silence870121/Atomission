<script setup>
defineProps({
    title: String,
    progress: Number,
    stage: String,
    tracked: Boolean,
    createDate: Date,
    modifiedDate: Date,
})

</script>

<template>
    <div class="target-card">
        <div class="target-svg" />
        <div class="target-content">
            <h3 class="target-title">{{ title }} </h3>
            <p class="target-stage">{{ stage }}</p>
            <p class="target-date">Create: {{ createDate }}</p>
            <p class="target-progress">{{ progress }}%</p>
            <p class="target-date">Edit: {{ modifiedDate }}</p>
        </div>
        <span v-if="tracked" class="target-track">T</span>
    </div>
</template>

<style scoped>
.target-card {
    background-color: var(--surface-color);
    color: var(--on-surface-color);
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    padding: 1rem;
    border-radius: var(--border-radius-md);
    position: relative;
    width: 400px;
}

.target-svg {
    min-width: 4rem;
    min-height: 4rem;
    margin-right: 1rem;
    border: 1px solid var(--primary-variant-color);
    border-radius: var(--border-radius-md);
    background: var(--background);
}

.target-content {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    /* justify-content: space-between; */
}

.target-content>* {
    /* border: 1px solid black; */
}

.target-title {
    font-weight: bold;
    text-align: left;
}

.target-stage {
    color: var(--primary-color);
}

.target-progress {
    font-weight: bold;
}

.target-date {
    /* width: 100%; */
    color: var(--primary-variant-color);
    font-size: 0.75rem;
}

.target-track {
    width: 1rem;
    height: 1rem;
    background-color: var(--surface-variant-color);
    border-radius: var(--border-radius-sm);
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
}
</style>