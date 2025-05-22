<script setup>
const props = defineProps({
    type: {
        type: String,
    },
    icon: {
        type: Boolean,
        default: false
    }
})
</script>

<template>
    <div class="basic-message" :class="props.type">
        <h3>
            <slot name="title"></slot>
        </h3>
        <div class="basic-content">
            <slot>test</slot>
        </div>
    </div>
</template>

<style scoped>
h3 {
    font-weight: bold;
    text-transform: uppercase;
}

.basic-message {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    color: var(--on-type-color);
}

.basic-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
    position: relative;
}

.basic-content::after {
    z-index: -1;
    position: absolute;
    inset: 0;
    content: '';
    border: 1px solid var(--type-color);
    border-radius: var(--border-radius-md);
}

.info {
    --type-color: hsl(195, 0%, 50%);
    --on-type-color: hsl(195, 0%, 100%);
}

.warning {
    --type-color: hsl(45, 100%, 25%);
    --on-type-color: hsl(45, 100%, 75%);
}

.success {
    --type-color: hsl(120, 100%, 25%);
    --on-type-color: hsl(120, 100%, 75%);
}

.danger {
    --type-color: hsl(0, 100%, 25%);
    --on-type-color: hsl(0, 100%, 75%);
}
</style>