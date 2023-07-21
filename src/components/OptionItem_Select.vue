<script setup>
import { computed, ref } from 'vue';
let selectValue = ref('----')
let isSelect = ref(false)
const prop = defineProps({
    items: Array,
    colorful: Boolean,
    hex: Object,
    unit: String,
    iconSize: String,
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
document.addEventListener('click', function close() {
    closeSelect()
})
</script>

<template>
    <div class="select" @click.stop>
        <div class="select-overlay" @click="toggleSelect">
            <p> {{ selectValue }}</p>
            <svg-icon name="select" :size="iconSize" />
        </div>
        <p class="select-unit" v-if="prop.unit">{{ prop.unit }}</p>
        <ul v-if="isSelect" class="select-list">
            <li v-for="item in prop.items" @click="$emit('return', item), selectItem(item), closeSelect()"
                :aria-valuetext="item">
                {{ item }}
            </li>
        </ul>

    </div>
</template>

<style scoped>
.select {
    display: flex;
    position: relative;
    /* border: 1px solid var(--surface-variant-color); */
    align-items: center;
    gap: 0.5rem;
}

.select-overlay {
    white-space: nowrap;
    cursor: pointer;
    user-select: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 0.25rem;
    border: 1px solid var(--surface-variant-color);
    background: var(--surface-variant-color);
    border-radius: var(--border-radius-sm);
}

.select-overlay p {
    min-width: 2.5rem;
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