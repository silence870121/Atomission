<script setup>
import CompassCard from '@/components/compass/Compass_Card.vue';
import compassOption from '@/components/compass/Compass_Option.vue';
import { useCompassStore } from '@stores/compass';
import { ref } from 'vue';

const setting = useCompassStore()
let defaultTarget = {
    id: "c2401001",
    name: "name",
    stage: "stage",
    landmark: 1000,
    score: 999,
    aptness: "",
    create_date: "yyyy-mm-dd",
    edit_date: "",
    isActive: true,
    halveScore: false,
    isMarked: false,
    children: [],
}

let targetList = ref([
    {
        id: "c2401001",
        name: "name",
        stage: "stage",
        landmark: 1000,
        score: 999,
        aptness: "",
        create_date: "yyyy-mm-dd",
        edit_date: "",
        isActive: true,
        halveScore: false,
        isMarked: false,
        children: [],
    }, {
        id: 't0002',
        title: 'second Target',
        ability: 5,
        stage: '中階',
        tracked: true,
        timerMon: 0,
        timerYear: 2,
        score: 50000,
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
        score: 50000,
        createDate: "2023-09-15",
        modifiedDate: "2023-10-16",
    }
])

function selectCardMode() {
    setting.isCardMode = true
}
function selectListMode() {
    setting.isCardMode = false
}

let activeTargetOption = ref(false)
function openOption() {
    activeTargetOption.value = true
}
function closeOption() {
    activeTargetOption.value = false
}
const FILTER_LIST = ["初階", "中階", "專家", "大師"]


function setFilter(params) {
    if (params) return console.log(params)
    console.log('SHOW ALL')
}

</script>

<template>
    <Router />
    <div class="target">
        <div class="target-head">
            <h2>----- Target -----</h2>
            <div v-if="targetSetting.isCardMode" class="target-mode">
                <button @click="selectCardMode" class="active">Card</button>
                <button @click="selectListMode">List</button>
            </div>
            <div v-else class="target-mode">
                <button @click="selectCardMode">Card</button>
                <button @click="selectListMode" class="active">List</button>
            </div>
        </div>
        <div class="target-content">
            <TargetCard v-for="item in targetList.sort((a, b) => b.tracked - a.tracked)" :target="item"
                :mode="targetSetting.isCardMode" />
        </div>


    </div>
</template>

<style scoped>
.target {
    width: 100%;
    max-width: 35rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 2rem;
}

.target-head {
    width: 100%;
    display: flex;
    align-items: start;
    gap: 10rem;
}

.target-head h2 {
    flex: 1;
}

.target-mode {
    display: flex;
    gap: 0.5rem;
    padding: 0.5rem 0;
}

.target-mode button {
    width: 2rem;
    height: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 0.25rem;
    font-weight: bold;

    color: var(--wireframe-placeholder-color);
    background: var(--wireframe-surface-color);
}

.target-content {
    width: 100%;
    display: flex;
    align-items: start;
    gap: 1rem;
    flex-wrap: wrap;

}

.target-mode button.active {
    color: var(--wireframe-surface-color);
    background: var(--wireframe-placeholder-color);
}
</style>