<script setup>
import { computed } from 'vue';
const prop = defineProps({
    detail: {
        type: Boolean,
        default: false
    },
    compass: {
        type: Object,
        default: {
            id: "c0001",
            name: "Compass",
            stage: "beginning",
            landmark: 1000,
            score: 999,
            aptness: "",
            create_date: "2024-01-01",
            edit_date: "",
            isActive: true,
            halveScore: false,
            isMarked: false,
            children: []
        }
    },
    isCard: {
        typeof: Boolean,
    }
})

const getProgress = computed(() => {
    let progress = Math.floor(prop.compass.score / prop.compass.landmark * 100, 1)
    return Math.min(Math.max(progress, 0), 100);
})
</script>

<template>
    <!-- *Card mode layout -->
    <div class="compass border" :id="prop.compass.id" :class="{ 'compass-card': isCard }">
        <div class="compass-svg border">
            <svg-icon name="favicon" />
        </div>
        <div class="compass-content" :class="{ detail: prop.detail }">
            <div class="compass-title"> {{ prop.compass.name }}</div>
            <div v-if="prop.detail" class="compass-stage">{{ prop.compass.stage }}</div>
            <div v-if="prop.detail" class="compass-date">
                <div v-if="prop.compass.edit_date">Edit: {{ prop.compass.edit_date }}</div>
                <div v-else>Create: {{ prop.compass.create_date }}</div>
            </div>
            <div class="compass-progress"> {{ getProgress }} %
            </div>
        </div>
        <div class="compass-bookmark" v-if="prop.detail">
            <i v-if="prop.compass.isMarked" class="i-carbon:bookmark-filled"></i>
            <i v-else class="i-carbon:bookmark disabled"></i>
        </div>
    </div>

</template>

<style scoped>
.compass {
    --space: 0.75rem;
    width: 100%;
    display: flex;
    gap: var(--space);
    padding: var(--space);
    position: relative;
    background: var(--surface);
    text-wrap: nowrap;
    cursor: pointer;
}

.compass.compass-card {
    gap: 0;
    padding: 0;
    flex-direction: column;
}

.compass-svg {
    width: 4rem;
    height: 4rem;
    background: var(--surface-variant);
    flex: none;
}

.compass-card .compass-svg {
    width: 3rem;
    height: 3rem;
    margin: 1rem;
}

.compass-bookmark {
    position: absolute;
    top: var(--space);
    right: var(--space);
}

.compass-bookmark .disabled {
    color: var(--label-tertiary-color);

}

.compass-content {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.compass-card .compass-content {
    background: var(--surface-variant);
    padding: var(--space);
}

.compass-title {
    text-transform: uppercase;
}

.compass-stage {
    color: var(--label-secondary-color);
    text-transform: capitalize;
    font-size: 0.875rem;
    padding: 0.25rem;
    flex: 1;
}

.compass-date {
    color: var(--label-secondary-color);
    text-transform: uppercase;
    font-size: 0.75rem;
    text-align: right;
    width: 100%;
    font-weight: lighter;
    letter-spacing: 1px;

}

.compass-card .compass-date {
    padding-top: 1rem;
}

.compass-progress {
    text-align: right;
    text-wrap: nowrap;
    font-size: 1rem;
}

.detail .compass-progress {
    position: absolute;
    top: 2.25rem;
    right: 1rem;
    font-size: 1rem;
}

.compass-card .compass-progress {
    top: 2.75rem;
    font-size: 1.25rem;
}
</style>