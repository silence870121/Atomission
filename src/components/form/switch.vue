<script setup>
const props = defineProps({
    name: {
        type: String,
        default: 'switch',
    },
    size: {
        type: String,
        default: '1rem',
    },
})

const switchModel = defineModel('switch')
const emit = defineEmits(['switch'])

const onSwitch = () => {
    switchModel.value = !switchModel.value
    emit('switch', switchModel)
}
</script>

<template>
    <button @click="onSwitch" class="form-switch" :style="{ '--size': props.size }" :class="{ 'enabled': switchModel }">
        <div class="switch-btn"></div>
    </button>


</template>

<style scoped>
.form-switch {
    --gap: 0.125rem;
    position: relative;
    width: calc(var(--size) * 2 + var(--gap)*4);
    height: calc(var(--size) + var(--gap)*2);
    padding: var(--gap);
    border-radius: 1rem;
    background-color: var(--action-to-color);
    transition: all 0.2s ease;
}

.form-switch.enabled {
    background-color: var(--active-from-color);
}

.switch-btn {
    left: var(--gap);
    position: absolute;
    width: var(--size);
    height: var(--size);
    background: var(--active);
    border-radius: 50%;
    transition: all 0.2s ease;
}

.form-switch.enabled .switch-btn {
    left: calc(100% - var(--size) - var(--gap));
    background: var(--active);
}
</style>