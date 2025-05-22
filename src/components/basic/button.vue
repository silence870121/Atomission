<script setup>
import { ref } from 'vue';

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
    disabled: {
        type: Boolean,
        default: false,
    },
    type: {
        type: String,
    },
    active: {
        type: Boolean,
        default: false,
    },
})
</script>

<template>
    <button :disabled="props.disabled" :class="[props.type, {
        'round': props.round,
        'background': props.background,
        'disabled': props.disabled,
        'active': props.active,
    }]">
        <i :class="props.icon" />
        <p v-if="$slots.default">
            <slot></slot>
        </p>
    </button>
</template>

<style scoped>
button {
    --on-type-color: var(--active-from-color);
    display: flex;
    justify-content: center;
    align-items: center;
    /* min-width: 2rem; */
    height: 2rem;
    gap: 0.25rem;
    padding: 0.25rem 0.5rem;
    color: var(--on-type-color);
    text-transform: uppercase;
    white-space: nowrap;
    position: relative;
}



p {
    padding-right: 0.25rem;
    line-height: 1.5rem;
}

i {
    font-size: 1.25em;
}

.round {
    border-radius: var(--border-radius-sm);
}


.background {
    background: var(--action);
}

button:disabled {
    opacity: 0.25;
    cursor: not-allowed;
}

button::after {
    content: '';
    z-index: -1;
    position: absolute;
    inset: 0;
    background: var(--active);
    opacity: 0;
    transition: opacity 200ms ease-in-out;
    border-radius: inherit;
}

.active::after {
    opacity: 0.5;
    transition: 100ms;
}

button:hover::after {
    opacity: 0.75;
    transition: 100ms;
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