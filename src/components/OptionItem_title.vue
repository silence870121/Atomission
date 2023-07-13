<script setup>

import Select from "@/components/OptionItem_select.vue";


const prop = defineProps({
    title: {
        type: String,
        required: true,
    },
})

</script>

<template></template>

<style scoped>
.option-content {
    flex: 1;
    display: flex;
    padding: 1rem;
    background-color: var(--surface-color);
    flex-direction: row;
    align-items: center;
    gap: 1rem;
    border: 1px solid var(--border-color);
}

.option-content input {
    flex: 1;
    min-width: 7.5rem;
    width: 100%;
    font-size: 1.5rem;
    padding-bottom: 0.5rem;
    border-bottom: 1px solid var(--surface-variant-color);
    /* border-image: var(--border-center-row) 1; */
    white-space: nowrap;
}

.option-branch {
    display: flex;
    gap: 0.25rem;
    align-items: center;
    background: var(--surface-variant-color);
    border-radius: var(--border-radius-sm);
    padding: 0.25rem 0.5rem;
}

.option-content select {
    background: var(--surface-variant-color);
    border-radius: var(--border-radius-sm);
    /* padding: 0.25rem 1rem; */
    font-size: 1rem;
    text-align: center;
}

.option-content option {
    text-align: center;
    border: none;
    height: 2rem;
}
</style>