<script setup>
const props = defineProps({
    icon: {
        type: Boolean,
        default: false,
    }
})
const data = defineModel('data', {
    type: String,
    default: '',
})
</script>

<template>
    <span>
        <i v-if="props.icon" class="i-carbon:information" />
        <slot></slot>
    </span>
</template>

<style scoped>
span {
    display: flex;
    align-items: center;
    gap: 0.25rem;
    color: var(--label-secondary-color);
    transition: color 200ms ease-in-out;
}

i {
    font-size: 1.25rem;
}

span:hover {
    color: var(--label-primary-color);
}
</style>