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
    center: {
        type: Boolean,
        default: false,
    },
    disabled: {
        type: Boolean,
        default: false,
    }
})
const select = defineModel('select')
</script>

<template>
    <select :name="props.name" :id="props.name" v-model="select" class="form-select" :style="{ width: props.width }"
        :disabled="props.disabled" :class="{ 'text-center': props.center }">
        <option v-for="(item, index) in props.option" :key="index" :value="item.value">
            {{ item.name }}
        </option>
    </select>
</template>

<style scoped>
.form-select {
    width: 4rem;
    height: 2rem;
    padding: 0.25rem 0.5rem;
    font-size: 0.875rem;
    color: var(--active-from-color);
    background: var(--action);
    border-radius: var(--border-radius-sm);
}

.text-center {
    text-align: center;
}

select:disabled {
    cursor: not-allowed;
}
</style>