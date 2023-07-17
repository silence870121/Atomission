<script setup>
import { computed, ref } from 'vue';
let selectValue = ref('----')
let isSelect = ref(false)
const prop = defineProps({
    items: Array,
    colorful: Boolean,
    hex: Object,
    unit: String,
})
function openSelect(params) {
    isSelect.value = true
}
function closeSelect(params) {
    isSelect.value = false
}
function toggleSelect(params) {
    isSelect.value = !isSelect.value
}
function selectItem(item) {
    selectValue.value = item
}
document.addEventListener('click', closeSelect())

document.querySelectorAll('.select')
</script>

<template>
    <div class="select" @click.stop>
        <div class="select-overlay" @click="toggleSelect"> {{ selectValue }} <svg-icon name="select" size="xs" /></div>
        <ul v-if="isSelect" class="select-list">
            <li v-for="item in prop.items" @click="selectItem(item), closeSelect()" :aria-valuetext="item">{{ item }} </li>
        </ul>


    </div>
</template>

<style scoped>
.select {
    text-transform: capitalize;
    display: flex;
    position: relative;
}

.select-overlay {
    min-width: 3rem;
    white-space: nowrap;
    cursor: pointer;
    border: 1px solid var(--surface-variant-color);
    user-select: none;
}

.select-list {
    position: absolute;
    top: 100%;
    /* left: 50%; */
    /* transform: translateX(-50%); */
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    padding: 0.5rem 0;
    background-color: var(--surface-variant-color);
    margin-top: 0.5rem;
    /* border: 1px solid var(--on-surface-color); */
    border-radius: var(--border-radius-sm);
    z-index: 1;
}

.select-list li {
    padding: 0 1rem;
    cursor: pointer;
}
</style>