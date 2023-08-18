<script setup>


const prop = defineProps({
    switchOn: Boolean

})
</script>

<template>
    <div class="switch" :class="{ active: switchOn }">
        <div class="switch-ball"></div>
    </div>
</template>

<style scoped>
.switch {
    width: 2.25rem;
    height: 1rem;
    display: flex;
    align-items: center;
    background-color: var(--surface-variant-color);
    border-radius: 1rem;
}

.switch.active {
    background-color: var(--primary-variant-color);
}

.switch-ball {
    width: 1rem;
    height: 1rem;
    border-radius: 1rem;
    background-color: var(--on-primary-color);
    transition: all 300ms;
    border: 2px solid var(--surface-variant-color);
}

.switch.active .switch-ball {
    background-color: var(--primary-color);
    border: 2px solid var(--primary-variant-color);
    transform: translateX(1.25rem);
}
</style>