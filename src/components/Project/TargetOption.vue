<script setup>
import Select from "@/components/OptionItem_select.vue";
const selectTitle = ["main", "sub"]
const selectParts = ["first", "second", "third", "fourth", "fifth", "sixth", "seventh", "eighth"]
const selectPartsColor = {
    'first': '#111',
    'first': '#111',
    'second': '#333',
    'third': '#555',
    'forth': '#777',
    'five': '#999',
    'sixth': '#aaa',
    'seventh': '#ccc',
    'eighth': '#eee'
}

const selectTimer = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
</script>

<template>
    <div class="option">
        <h2>Option</h2>

        <div class="option-content">
            <input type="text">
            <div class="option-branch">
                <svg-icon name="branch" size="xs" />
                <Select :items="selectTitle" />
            </div>
        </div>
        <Select :items="selectTimer" unit="month" />
        <!-- <Select :option="selectParts" :hex="selectPartsColor" colorful /> -->
    </div>
</template>

<style>
.option {
    max-width: 375px;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
}

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