<script setup>
import Select from "@/components/OptionItem_select.vue";
const prop = defineProps({
    missionItem: Object
})
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

const selectTimerMon = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
const selectTimerYear = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
</script>

<template>
    <div class="option">
        <h2>Option</h2>

        <div class="option-item option-title">
            <input type="text" placeholder="Title">

            <div class="option-branch">
                <svg-icon name="branch" size="xs" />
                <Select :items="selectTitle" icon-size="xs" />
            </div>
        </div>


        <div class="option-item">
            <div class="option-info">
                <h3>Timer</h3>
                <p>Timer Dec.</p>
            </div>
            <Select :items="selectTimerYear" unit="年" icon-size="s" />
            <Select :items="selectTimerMon" unit="月" icon-size="s" />
        </div>
        <div class="option-item">
            <div class="option-info">
                <h3>Learning Ability</h3>
                <p>Timer Dec.</p>
            </div>
            <Select :items="selectTimerYear" icon-size="s" />
        </div>
    </div>
</template>

<style>
.option {
    max-width: 540px;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
}

.option-item {
    flex: 1;
    gap: 0.5rem;
    display: flex;
    padding: 0.5rem;
    padding-right: 1rem;
    flex-direction: row;
    align-items: center;
    /* border: 1px solid var(--border-color); */
    background-color: var(--surface-color);
}

.option-title {
    padding: 1rem;
}

.option-item input {
    flex: 1;
    /* min-width: 7.5rem; */
    width: 100%;
    font-size: 1.5rem;
    padding-bottom: 0.5rem;
    border-bottom: 1px solid var(--surface-variant-color);
    /* border-image: var(--border-center-row) 1; */
    white-space: nowrap;
}

.option-item input::placeholder {
    color: var(--surface-variant-color);
}

.option-branch {
    display: flex;
    gap: 0.25rem;
    padding: 0.25rem 0.5rem;
    align-items: center;
    /* background: var(--surface-variant-color); */
    /* border-radius: var(--border-radius-sm); */
}

.option-branch>.select .select-overlay {
    padding: 0.25rem 0;
}

.option-info {
    flex: 1;
    text-align: left;
}

.option-info h3 {
    padding-bottom: 0.75rem;
    font-weight: bold;
    color: var(--on-surface-color);
}

.option-info p {
    font-size: 0.75rem;
}
</style>