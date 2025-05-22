<script setup>
const props = defineProps({
    name: {
        type: String,
    },
    flex: {
        type: Boolean,
        default: false,
    },
    center: {
        type: Boolean,
        default: false,
    },
    disabled: {
        type: Boolean,
        default: false,
    },
    placeholder: {
        type: String,
        default: '',
    },
})
const text = defineModel('text', {
    type: String,
    default: '',
})
</script>

<template>
    <div class="form-text" :class="{ 'flex': props.flex, 'disabled': props.disabled }">
        <input type="text" :placeholder="props.placeholder" v-model="text"
            :style="{ 'text-align': center ? 'center' : '' }" :disabled="props.disabled" />
    </div>
</template>

<style scoped>
.form-text {
    width: 5rem;
    background: var(--action);
    border-radius: var(--border-radius-sm);
    position: relative;
    transition: opacity 100ms ease-out;
}

.form-text::after {
    position: absolute;
    content: '';
    inset: 0;
    border: 1px solid var(--active-from-color);
    border-radius: inherit;
    opacity: 0;
    transition: opacity 200ms ease-out;
    pointer-events: none;
}

.form-text:focus-within::after {
    opacity: 1;
    transition: 100ms;
}

.flex {
    flex: 1;
}

.disabled {
    opacity: 0.25;
    cursor: not-allowed;
}

input {
    text-transform: none;
    font-size: 1rem;
    line-height: 1.5rem;
    padding: 0.25rem 0.5rem;
    width: 100%;
}

input:disabled {
    pointer-events: none;
    font-style: italic;
}
</style>