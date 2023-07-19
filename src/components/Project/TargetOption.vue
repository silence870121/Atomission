<script setup>
import Select from "@/components/OptionItem_select.vue";
const prop = defineProps({
    targetItem: Object
})
const selectTitle = ["main", "sub"]
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
            <textarea name="dec" id="dec" rows="3" wrap="hard" placeholder="Target Dec."></textarea>
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
    color: var(--on-surface-color);
}

.option-item textarea {
    height: auto;
    padding: 0.5rem 0;
    margin: 0 0.5rem;
    flex: 1;
    resize: none;
    color: var(--on-surface-color);
    /* background-color: var(--surface-variant-color); */
    line-height: 1.5rem;
    overflow-x: hidden;
    border-bottom: 1px solid var(--surface-variant-color);
}

.option-item textarea::-webkit-scrollbar-track {
    background-color: inherit;
}

.option-item textarea::-webkit-scrollbar {
    width: var(--border-radius-sm);

    background-color: inherit;
}

.option-item textarea::-webkit-scrollbar-thumb {
    background-color: var(--surface-variant-color);
    border-radius: var(--border-radius-sm);
}

.option-item input::placeholder,
.option-item textarea::placeholder {
    color: var(--primary-variant-color);
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
    padding-left: 0.25rem;
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