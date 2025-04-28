<script setup>
import CompassCard from '@/components/Project/Compass_Card.vue';
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
    <div class="container">
        <div class="compass-toolbar">
            <h2>Compass</h2>
            <div class="compass-btn">
                <button @click="selectCardMode" :class="{ active: setting.isCardMode }">
                    <i class="i-carbon:grid"></i>
                </button>
                <button @click="selectListMode" :class="{ active: !setting.isCardMode }">
                    <i class="i-carbon:list-boxes"></i>
                </button>
            </div>
        </div>
        <ul class="compass-layout" :class="{ 'compass-layout-card': setting.isCardMode }">
            <li v-for="item in targetList.sort((a, b) => b.tracked - a.tracked)">
                <CompassCard detail :isCard="setting.isCardMode" />
            </li>
        </ul>
    </div>
</template>

<style scoped>
.compass-toolbar {
    max-width: 51rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 1rem;
}

.compass-btn {
    display: flex;
    gap: 0.5rem;
}

.compass-btn button {
    font-size: 1.5rem;
    padding: 0.5rem;
    color: var(--wireframe-placeholder-color);
    border: 1px solid var(--wireframe-placeholder-color);
    background: var(--action-from-color);
    border-radius: var(--border-radius-md);
}

.compass-btn button.active {
    color: var(--active-from-color);
    background: var(--wireframe-placeholder-color);
    transition: all 200ms ease-in-out;
}


.compass-layout {
    --min: 7.5rem;
    --max: 25rem;
    display: grid;
    grid-auto-flow: row;
    grid-gap: 1rem;
    grid-template-columns: repeat(auto-fit, minmax(var(--min), var(--max)));
}

.compass-layout-card {
    --min: 7.5rem;
    --max: 15rem;
    display: grid;
    padding-top: 1.5rem;
    gap: 1rem;
    grid-template-columns: minmax(var(--min), var(--max)) repeat(auto-fit, minmax(var(--min), var(--max)));
}

@media (max-width:540px) {
    .container {
        padding: 1rem;
    }

    .compass-layout {
        --max: 100%;
    }
}
</style>