<script setup>
const props = defineProps({
    name: {
        type: String,
    },
    status: {
        type: String,
        validator(value) {
            // The value must match one of these strings
            return ['enabled', 'warning', 'disabled'].includes(value)
        }
    },
    background: {
        type: Boolean,
        default: false,
    },
}) 
</script>

<template>
    <p :class="['basic-status', 'status-enabled', { 'background': props.background }]"
        v-if="props.status === 'enabled'">
        <i class="i-carbon:checkmark-filled" />
        enabled
    </p>
    <p :class="['basic-status', 'status-warning', { 'background': props.background }]"
        v-if="props.status === 'warning'">
        <i class="i-carbon:warning-filled" />
        warning
    </p>
    <p :class="['basic-status', 'status-disabled', { 'background': props.background }]"
        v-if="props.status === 'disabled'">
        <i class="i-carbon:close-filled" />
        disabled
    </p>

</template>

<style scoped>
.basic-status {
    --on-type-color: var(--label-primary-color);
    display: flex;
    align-items: center;
    gap: 0.25rem;
    color: var(--on-type-color);
    padding: 0.5rem;
    border-radius: var(--border-radius-sm);
}

.background {
    background-color: var(--type-color);
}


.status-enabled {
    --type-color: hsla(120, 100%, 25%, 0.5);
    --on-type-color: hsl(120, 100%, 38%);
}

.status-warning {
    --type-color: hsla(45, 100%, 25%, 0.5);
    --on-type-color: hsl(45, 100%, 50%);
}

.status-disabled {
    --type-color: hsla(0, 100%, 25%, 0.5);
    --on-type-color: hsl(0, 100%, 75%);
}
</style>