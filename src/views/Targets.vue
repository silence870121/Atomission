<script setup>
import TargetCard from '@/components/Project/TargetCard.vue';
import TargetOption from '@/components/Project/TargetOption.vue';
import { ref } from 'vue';

let activeTargetOption = ref(false)

let defaultTarget = {
    id: String,
    title: String,
    ability: Number,
    stage: String,
    tracked: Boolean,
    timerMon: Number,
    timerYear: Number,
    progress: Number,
    createDate: String,
    modifiedDate: String,
}

let targetList = ref([{
    id: 't0001',
    title: 'First Target',
    ability: 3,
    stage: '初階',
    tracked: false,
    timerMon: 12,
    timerYear: 1,
    progress: 0,
    createDate: "2023-01-01",
    modifiedDate: "2023-02-01",
}, {
    id: 't0002',
    title: 'second Target',
    ability: 5,
    stage: '中階',
    tracked: true,
    timerMon: 0,
    timerYear: 2,
    progress: 50000,
    createDate: "2023-05-31",
    modifiedDate: "2023-06-30",
}, {
    id: 't0003',
    title: 'Third Target',
    ability: 1,
    stage: '高階',
    tracked: true,
    timerMon: 0,
    timerYear: 5,
    progress: 50000,
    createDate: "2023-09-15",
    modifiedDate: "2023-10-16",
}
])


function openOption() {
    activeTargetOption.value = true
}
function closeOption() {
    activeTargetOption.value = false
}

function getProgress(item) {
    let num = Math.floor(item.progress / ((item.timerYear * 75000 + item.timerMon * 100) / 100), 1)
    return Math.min(Math.max(num, 0), 100);
}

</script>

<template>
    <Router />
    <div class="container">
        <div class="target">
            <h2>----- Target -----</h2>
            <TargetCard v-for="item in targetList.sort((a, b) => b.tracked - a.tracked)" :title="item.title"
                :stage="item.stage" :progress="getProgress(item)" :create-date="item.createDate"
                :modified-date="item.modifiedDate" :tracked="item.tracked" detail @click="openOption" />
        </div>

        <div v-show="activeTargetOption" class="target target-option border">
            <button class="close-btn" @click="closeOption"> <svg-icon name="close" /> </button>
            <TargetOption />
        </div>
    </div>
</template>

<style scoped>
h2 {
    font-size: 1.5rem;
    font-weight: bold;
    text-align: left;
    padding-bottom: 1rem;
}


.target {
    display: flex;
    gap: 1rem;
    flex-direction: column;
    padding-bottom: 1rem;
}

.target-option {
    position: fixed;
    right: 0;
    margin: 2rem;
    margin-top: 3.5rem;
    /* background-color: var(--surface-color); */
    box-shadow: 0 0 1rem var(--on-surface-color);
    backdrop-filter: blur(1rem);
}

@media (max-width: 540px) {
    .target-option {
        left: 0;
        margin: 1rem 15px;
        top: 50%;
        transform: translateY(-50%);
    }
}
</style>