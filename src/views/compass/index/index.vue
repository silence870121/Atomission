<script setup>
import CompassCard from '@/components/compass/CompassCard.vue';
import basicButton from '@/components/basic/button.vue';
import formText from '@/components/form/text.vue';
import { useCompassStore } from '@stores/compass';
import { ref } from 'vue';

const PAGE_PATH = '/compass'
const setting = useCompassStore()

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

</script>

<template>
    <div class="compass-toolbar">
        <form action="">
            <form-text name="filter" placeholder="ctrl + K" />
            <basic-button round background icon="i-carbon:search" />
            <basic-button round background icon="i-carbon:filter" />
        </form>
        <div class="button-group ">
            <basic-button @click="$router.push('/compass/edit')" round background icon="i-carbon:add-large">
                New compass
            </basic-button>
            <basic-button round background @click="selectCardMode" :active="setting.isCardMode" icon="i-carbon:grid" />
            <basic-button round background @click="selectListMode" :active="!setting.isCardMode"
                icon="i-carbon:list-boxes" />
        </div>
    </div>
    <ul class="compass-layout" :class="{ 'compass-layout-card': setting.isCardMode }">
        <li v-for="item in targetList.sort((a, b) => b.tracked - a.tracked)">
            <CompassCard detail :isCard="setting.isCardMode" />
        </li>
    </ul>
</template>

<style scoped>
.compass-toolbar {
    max-width: 51rem;
    display: flex;
    justify-content: space-between;
}

.compass-toolbar form {
    display: flex;
    gap: 0.5rem;
}

.button-group {
    display: flex;
    gap: 0.5rem;
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