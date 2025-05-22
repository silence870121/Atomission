<script setup>
const props = defineProps({
    for: {
        type: String,
    },
    showInfo: {
        type: Boolean,
        default: false,
    },
    direction: {
        type: String,
        default: 'row',
    },
})
const data = defineModel('data', {
    type: String,
    default: '',
})
</script>

<template>
    <div :for="props.for" class="form-label" :class="`direction-${props.direction}`">
        <label>
            <slot name="title"></slot>
            <span v-if="props.direction !== 'column' && props.showInfo">
                <slot name="info"></slot>
            </span>
        </label>
        <slot></slot>
        <span v-if="props.direction == 'column' && props.showInfo">
            <slot name="info"></slot>
        </span>
    </div>
</template>

<style scoped>
.form-label {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 0.5rem;
}

label {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    font-weight: bold;
}

span {
    font-size: 0.875rem;
    color: var(--label-secondary-color);
    padding-left: 0.25rem;
    font-weight: normal;
}

.direction-column {
    flex-direction: column;
    align-items: start;
}
</style>