<script setup>
const props = defineProps({
    icon: {
        type: String,
    },
    round: {
        type: Boolean,
        default: false,
    },
    background: {
        type: Boolean,
        default: false,
    },
    center: {
        type: Boolean,
        default: false,
    },
})
</script>

<template>
    <button @click="$emit('click')"
        :class="{ 'round': props.round, 'background': props.background, 'center': props.center }">
        <i :class="props.icon" />
        <p v-if="$slots.default">
            <slot></slot>
        </p>
    </button>
</template>

<style scoped>
button {
    display: flex;
    text-transform: uppercase;
    align-items: center;
    height: 2rem;
    color: var(--label-secondary-color);
    padding: 0.25rem;
    color: var(--active-from-color);
    gap: 0.25rem;
}

p {
    padding-right: 0.75rem;
    line-height: 1.5rem;
}

i {
    min-width: 0.5rem;
    font-size: 1.5rem;
}

.round {
    border-radius: var(--border-radius-sm);
}

.background {
    background: var(--action);
}

.center {
    justify-content: center;
}
</style>