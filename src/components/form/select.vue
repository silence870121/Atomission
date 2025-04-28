<script setup>
const props = defineProps({
    name: {
        type: String,
        required: true,
    },
    option: {
        type: Array,
        default: [],
    },
    width: {
        type: String,
    },
})
const select = defineModel('select')
</script>

<template>
    <select :name="props.name" :id="props.name" v-model="select" class="form-select" :style="{ width: props.width }">
        <option v-for="(item, index) in props.option" :key="index" :value="item.value">
            {{ item.name }}
        </option>
    </select>
</template>

<style scoped>
.form-select {
    padding: 0.25rem 0.5rem;
    font-size: 0.875rem;
    color: var(--active-from-color);
    background: var(--action);
    border-radius: var(--border-radius-sm);
}
</style>