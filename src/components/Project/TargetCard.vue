<script setup>
import { computed } from 'vue';
const prop = defineProps({
    target: {
        type: Object,
        default: {
            title: 'Target name',
            stage: 'Target stage',
            ability: 5,
            tracked: false,
            createDate: '2024-01-01',
            modifiedDate: '',
            timerMon: 0,
            timerYear: 1,
            score: 0,
        }

    },
    mode: {
        typeof: Boolean,
    }
})

const getProgress = computed(() => {
    let progress = Math.floor(prop.target.score / ((prop.target.timerYear * 75000 + prop.target.timerMon * 100) / 100), 1)
    return Math.min(Math.max(progress, 0), 100);
})
</script>

<template>
    <!-- *Card mode layout -->
    <div v-if="mode" class="target-card border">
        <div class="target-header">
            <div class="target-svg border">
                <svg-icon name="favicon" />
            </div>
            <p class="target-progress">{{ getProgress }} %</p>
        </div>

        <div class="target-content border">
            <h3 class="target-title">{{ target.title }} </h3>
            <p class="target-stage">{{ target.stage }}</p>
            <p class="target-date">
                <span v-if="target.modifiedDate">Edit date : {{ target.modifiedDate }}</span>
                <span v-else>Create: {{ target.createDate }}</span>
            </p>
        </div>
        <svg-icon name="tracked" v-if="target.tracked" class="target-track" />
    </div>

    <!-- *list mode layout -->
    <div v-else class="target-list border">
        <div class="target-svg border">
            <svg-icon name="favicon" />
        </div>
        <div class="target-content">
            <h3 class="target-title">{{ target.title }} </h3>
            <p class="target-stage">{{ target.stage }}</p>
            <p class="target-date">
                <span v-if="target.modifiedDate">Edit date : {{ target.modifiedDate }}</span>
                <span v-else>Create: {{ target.createDate }}</span>
            </p>
        </div>
        <p class="target-progress">{{ getProgress }} %</p>
        <svg-icon name="tracked" v-if="target.tracked" class="target-track" />
    </div>
</template>

<style scoped>
.target-svg {
    width: 4rem;
    height: 4rem;
    display: flex;
    padding: 0;
    background: var(--surface-variant);
}

.target-content {
    flex: 1;
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    /* align-items: start; */
}

.target-title {
    text-align: left;
    font-size: 1rem;
    font-weight: 600;
    margin-bottom: 0.25rem;
}

.target-stage {
    text-align: left;
    font-size: 0.75rem;
    margin-bottom: 0.25rem;
    color: var(--label-secondary-color);
}

.target-date {
    flex: 1;
    display: flex;
    margin-top: 1rem;
    justify-content: start;
}

.target-title,
.target-stage,
.target-date {
    white-space: nowrap;
}

.target-date span {
    text-transform: uppercase;
    font-size: 0.75rem;
    color: var(--label-secondary-color);
}

.target-progress {
    font-weight: 600;
    padding-left: 1rem;
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

/* ?Part Cards or List Mode Style */
/* *Cards Mode */
.target-card {
    width: calc(50% - 0.5rem);
    display: flex;
    flex-direction: column;
    background: var(--surface);
}

.target-header {
    flex: 1;
    display: flex;
    justify-content: space-between;
    align-items: start;
    padding: 1rem;
}

.target-header .target-progress {
    font-size: 1.5rem;
}

.target-card .target-content {
    padding: 1rem;
    background: var(--surface-variant);
}

.target-card .target-date {
    justify-content: end;
}

.target-content.border {
    border-radius: 0;

}

.target-content.border::after {
    border-radius: 0;
    padding-top: 0;
    top: 0;
}

/* *List Mode */
.target-list {
    width: 100%;
    max-width: 35rem;
    display: flex;
    padding: 1rem;
    gap: 1rem;
    justify-content: center;
    align-items: center;
    background: var(--surface);
}
</style>