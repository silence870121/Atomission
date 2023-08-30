<script setup>
import Select from "@/components/OptionItem_select.vue";
import Switch from "@/components/OptionItem_switch.vue";
import { ref } from "vue";
const prop = defineProps({
    missionItem: Object
})
const selectBranch = ["main", "sub"]
const selectTarget = ["Target 1", "Target 2", "Target 3"]
const selectType = ["Daily", "Weekly", "Stage"]
const selectLevel = ["Easier", "Easy", "Normal", "Hard", "Harder"]

let switchOn = ref(false)
</script>

<template>
    <div class="option">
        <h2>Option</h2>

        <div class="option-item option-title">
            <input type="text" placeholder="Title">

            <div class="option-branch">
                <svg-icon name="branch" size="xs" />
                <Select :items="selectBranch" icon-size="xs" :selectValue="missionItem.branch"
                    @update="(e) => missionItem.branch = e" />
            </div>
        </div>
        <div class="option-item">
            <div class="option-info">
                <h3>Pin</h3>
                <p>Pin your mission</p>
            </div>
            <Switch :switchOn="switchOn" @click="switchOn = !switchOn" />
        </div>

        <div class="option-item">
            <div class="option-info">
                <h3>Target</h3>
                <p>Select target that mission at. </p>
            </div>
            <Select :items="selectTarget" icon-size="s" :selectValue="missionItem.fromTarget"
                @update="(e) => missionItem.fromTarget = e" />
        </div>
        <div class="option-item">
            <div class="option-info">
                <h3>Type</h3>
                <p>Select Mission type</p>
            </div>
            <Select :items="selectType" icon-size="s" :selectValue="missionItem.type"
                @update="(e) => missionItem.type = e" />
        </div>
        <div class="option-item">
            <div class="option-info">
                <h3>Level</h3>
                <p>how difficulty of the mission.</p>
            </div>
            <Select :items="selectLevel" icon-size="s" :selectValue="missionItem.difficulty"
                @update="(e) => missionItem.difficulty = e" />
        </div>
        <div class="option-item">
            <ul class="option-mission-item">
                <li v-for="item in missionItem.itemList">
                    <p>- {{ item.content }}</p>
                    <p>[ {{ item.requiredNum }} <span>{{ item.unit }}</span> ]</p>
                </li>
            </ul>
        </div>
        <div class="option-btn">
            <button class="option-complete ">
                <svg-icon name="complete" size="s" />
                Save Mission
            </button>
            <button class="option-delete">
                <svg-icon name="warning" size="s" />
                Delete Mission
            </button>
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

.option-mission-item {
    display: flex;
    flex-direction: column;
    flex: 1;
    gap: 1rem;
}

.option-mission-item li {
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    flex-wrap: nowrap;
    white-space: nowrap;
}

.option-btn {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 2rem;
    padding: 0 2rem;
}

.option-btn button {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.25rem;
    font-weight: bold;
    padding: 0.5rem;
    color: var(--on-primary-color);
    background-color: var(--primary-color);
}

.option-btn .option-delete {
    opacity: 0.25;
    margin-top: 2rem;
    color: var(--on-primary-color);
    background-color: var(--error-color);
    transition: opacity 500ms linear;
}

.option-btn .option-delete:hover {
    opacity: 1;
}
</style>