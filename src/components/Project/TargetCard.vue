<script setup>
defineProps({
    title: String,
    progress: Number,
    stage: String,
    tracked: Boolean,
    createDate: String,
    modifiedDate: String,
    detail: Boolean,
})

</script>

<template>
    <div class="target-card border">
        <svg-icon name="progress" class="target-svg" />
        <div class="target-content">
            <h3 class="target-title">{{ title }} </h3>
            <p v-if="detail" class="target-stage">{{ stage }}</p>
            <p class="target-progress">{{ progress }}%</p>
            <p v-if="detail" class="target-date">
                <span>Create: {{ createDate }}</span>
                <span v-if="modifiedDate">Edit: {{ modifiedDate }}</span>
            </p>
        </div>
        <svg-icon name="tracked" v-if="tracked && detail" class="target-track" />
    </div>
</template>

<style scoped>
.target-card {
    color: var(--on-surface-color);
    background-color: var(--surface-color);
    position: relative;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    padding: 1rem;
    cursor: pointer;
}

.target-svg {
    width: 4rem;
    height: 4rem;
    margin-right: 1rem;
    border: 1px solid var(--primary-variant-color);
    border-radius: var(--border-radius-md);
    /* background: var(--background); */
    flex-shrink: 0;
}

.target-content {
    flex: 1;
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    gap: 0.5rem;
}

.target-title {
    width: 100%;
    font-weight: bold;
    text-align: left;
    white-space: nowrap;
}

.target-stage {
    line-height: 1.25rem;
    color: var(--primary-color);
}

.target-progress {
    flex: 1;
    font-size: 1.25rem;
    font-weight: bold;
    color: var(--primary-color);
    text-align: right;
}

.target-date {
    width: 100%;
    width: 100%;
    display: flex;
    gap: 1rem;
    justify-content: space-between;
    color: var(--primary-variant-color);
    font-size: 0.75rem;
    margin-top: 1rem;
    flex-wrap: wrap;
}

.target-date span {
    white-space: nowrap;
}

.target-track {
    width: 1rem;
    height: 1rem;
    color: var(--on-surface-color);
    border-radius: var(--border-radius-sm);
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
}
</style>