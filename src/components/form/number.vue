<script setup>
import basicButton from '@/components/basic/button.vue';
const props = defineProps({
    step: {
        type: Number,
        default: 1,
    },
    min: {
        type: Number,
        default: 0,
    },
    max: {
        type: Number,
        default: 99,
    },
    disabled: {
        type: Boolean,
        default: false,
    },
})

const number = defineModel('number', {
    type: Number,
    default: 0,
})
const increase = () => {
    number.value = Math.min(number.value + props.step, props.max);
};

const decrease = () => {
    number.value = Math.max(number.value - props.step, props.min);
};
const validateInput = () => {
    let value = Number(number.value);
    if (isNaN(value)) value = props.min;
    if (value < props.min) value = props.min;
    if (value > props.max) value = props.max;
    number.value = value;
};


</script>

<template>
    <div class="form-number" :class="{ 'disabled': props.disabled }">
        <basic-button @click="decrease" icon="i-carbon:subtract-large" />
        <input type="number" v-model="number" placeholder="0" :step="props.step" :min="props.min" :max="props.max"
            @input="validateInput" />
        <basic-button @click="increase" icon="i-carbon:add-large" />

    </div>
</template>

<style scoped>
.form-number {
    display: flex;
    background: var(--action);
    border-radius: var(--border-radius-sm);
    transition: opacity 100ms ease-out;
}

.disabled {
    pointer-events: none;
    opacity: 0.5;
}

input[type=number] {
    width: 4rem;
    padding: 0.25rem;
    text-align: center;
    background: hsla(0, 0%, 0%, 0.2);
}

input[type=number]::-webkit-outer-spin-button,
input[type=number]::-webkit-inner-spin-button {
    -webkit-appearance: none;
}
</style>