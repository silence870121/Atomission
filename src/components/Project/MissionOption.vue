<script setup>
import Select from "@/components/OptionItem_select.vue";
const prop = defineProps({
    missionItem: Object
})
const selectBranch = ["main", "sub"]
const selectTarget = ["Target 1", "Target 2", "Target 3"]
const selectType = ["Daily", "Weekly", "Stage"]
const selectLevel = ["Easier", "Easy", "Normal", "Hard", "Harder"]
</script>

<template>
    <div class="option">
        <h2>Option</h2>

        <div class="option-item option-title">
            <input type="text" placeholder="Title">

            <div class="option-branch">
                <svg-icon name="branch" size="xs" />
                <Select :items="selectBranch" icon-size="xs" />
            </div>
        </div>
        <div class="option-item">
            <div class="option-info">
                <h3>Pin</h3>
                <p>Pin your mission</p>
            </div>
            <label class="option-pin" for="pin"></label>
            <input type="checkbox" name="" id="pin">
        </div>

        <div class="option-item">
            <div class="option-info">
                <h3>Target</h3>
                <p>Select target that mission at. </p>
            </div>
            <Select :items="selectTarget" icon-size="s" />
        </div>
        <div class="option-item">
            <div class="option-info">
                <h3>Type</h3>
                <p>Select Mission type</p>
            </div>
            <Select :items="selectType" icon-size="s" />
        </div>
        <div class="option-item">
            <div class="option-info">
                <h3>Level</h3>
                <p>how difficulty of the mission.</p>
            </div>
            <Select :items="selectLevel" icon-size="s" />
        </div>
        <button class="option-btn">
            <svg-icon name="warning" size="s" />
            Delete Mission
        </button>
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

.option-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.25rem;
    font-weight: bold;
    color: var(--on-primary-color);
    background-color: var(--error-color);
    padding: 0.5rem;
    margin: 4rem 2rem;
}
</style>