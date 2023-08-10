<script setup>
import { onMounted, ref } from 'vue';
import MissionCard from '@/components/Project/MissionCard.vue';
const prop = defineProps({
    maxColumn: {
        type: Number,
        default: 4,
        //? 列數上限
    },
    columnWidth: {
        type: Number,
        default: 360,
        //? 元素寬度
    },
    widthGap: {
        type: Number,
        default: 16
        //? 元素寬度間隔
    },
    heightGap: {
        type: Number,
        default: 16
        //? 元素高度間隔
    },
    itemList: {
        type: Array,
        // required: true,
        //? 元素列表
    },
    isDebounce: {
        type: Boolean,
        default: true,
        //? 防抖 
    },
    isLazy: {
        type: Boolean,
        default: true,
        //? 延遲讀取
    }
})


//? Masonry database
let missionList = ref([
    {
        id: "m0001",
        title: "First mission",
        type: "Daily",
        branch: "Main",
        forTarget: "First target",
        description: "This is the first mission,This is the first mission, ",
        level: 5,
        list: [
            {
                content: "Mission Item 1",
                done: 10,
                requestNum: 50,
                unit: "unit"
            }, {
                content: "Mission Item 2",
                done: 30,
                requestNum: 50,
                unit: "unit"
            }
        ],
        createDate: "2023-01-01",
        modifiedDate: "2023-01-31",
        tip: "This is a daily mission. "
    }, {
        id: "m0002",
        title: "Second mission",
        type: "Weekly",
        branch: "Main",
        forTarget: "First target",
        description: "This is the Second mission.This is the first mission.This is the first mission.",
        level: 3,
        list: [
            {
                content: "Mission Item 1",
                done: 15,
                requestNum: 30,
                unit: "unit"
            }, {
                content: "Mission Item 2",
                done: 35,
                requestNum: 30,
                unit: "unit"
            }, {
                content: "Mission Item 3",
                done: 55,
                requestNum: 30,
                unit: "unit"
            }
        ],
        createDate: "2023-02-01",
        modifiedDate: "2023-02-28",
        tip: ""
    }, {
        id: "m0003",
        title: "Third mission",
        type: "Stage",
        branch: "Main",
        forTarget: "First target",
        description: "This is the first mission",
        level: 1,
        list: [
            {
                content: "Mission Item 1",
                done: 5,
                requestNum: 10,
                unit: "unit"
            }, {
                content: "Mission Item 2",
                done: 15,
                requestNum: 10,
                unit: "unit"
            }, {
                content: "Mission Item 3",
                done: 25,
                requestNum: 10,
                unit: "unit"
            }, {
                content: "Mission Item 4",
                done: 35,
                requestNum: 10,
                unit: "unit"
            },
        ],
        createDate: "2023-03-01",
        modifiedDate: "2023-03-31",
        tip: "This is a daily mission. You must complete the mission, or else you will lose this mission score."
    }, {
        id: "m0004",
        title: "Forth mission",
        type: "Stage",
        branch: "Main",
        forTarget: "First target",
        description: "This is the first mission",
        level: 1,
        list: [
            {
                content: "Mission Item 1",
                done: 5,
                requestNum: 10,
                unit: "unit"
            }
        ],
        createDate: "2023-03-01",
        modifiedDate: "2023-03-31",
        tip: "This is a daily mission. You must complete the mission, or else you will lose this mission score."
    }
])




let columnList = ref([])
let columnHeights = ref([])

let masonryWidth = ref(720)
let columnsCount = ref(2)

function renderMasonry() {
    masonryWidth.value = document.querySelector('.v-masonry').offsetWidth
    columnsCount.value = Math.min(Math.max(Math.floor(masonryWidth.value / prop.columnWidth), 1), prop.maxColumn)
    resetMasonryColumn()
    appendCell(missionList.value)

}

onMounted(() => {
    renderMasonry()
})
window.onresize = () => { renderMasonry() }

//? 初始化列表欄位
function resetMasonryColumn() {
    columnList.value = new Array(columnsCount.value).fill([])
    columnHeights.value = new Array(columnsCount.value).fill(0)
}

function appendCell(list) {
    list.forEach(item => {

        const minHeight = Math.min(...columnHeights.value)

        const indexOfMinHeight = columnHeights.value.indexOf(minHeight)
        console.log('最低列表的索引 ' + indexOfMinHeight);

        console.log(item.list.length);
        console.log('將item 加入至 列表' + indexOfMinHeight);
        // console.log(columnList.value[indexOfMinHeight]);

        columnList.value[0].push(item)
        columnHeights.value[indexOfMinHeight] += item.list.length

        console.log(columnList.value);
        console.log(columnList.value[0]);
        console.log(columnHeights.value);
    })
}


</script>

<template>
    <div class="v-masonry">
        <ul v-for="list in columnList" class="masonry-list">
            <li v-for="item in list" class="masonry-cell">
                <MissionCard :mission="item" isDesc isTarget isTip @click="handleMission(item), openOption()" />
            </li>
        </ul>
    </div>
</template>

<style scoped>
:root {
    --masonry-gap: 1rem;
}

.v-masonry {
    width: 100%;
    display: flex;
    gap: var(--masonry-gap);
    flex-direction: row;
    flex-wrap: nowrap;
}

.masonry-list {
    display: flex;
    flex-direction: column;
    flex: 1;
    gap: var(--masonry-gap);
}

.masonry-cell {
    width: 100%;
}
</style>