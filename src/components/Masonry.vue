<script setup>
import { onMounted, onUnmounted, ref } from 'vue';
import MissionCard from '@/components/mission/MissionCard.vue';
const props = defineProps({
    maxColumn: {
        type: Number,
        default: 4,
        //? 列數上限
    },
    columnWidth: {
        type: Number,
        default: 280,
        //? 元素寬度
    },
    rowGap: {
        type: Number,
        default: 2
        //? 元素寬度間隔 (rem)
    },
    columnGap: {
        type: Number,
        default: 3
        //? 元素高度間隔 (rem)
    },
    data: {
        type: Array,
        // required: true,
        //? 渲染列表
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
    },
})

// 每欄的列表
let columnList = ref([])
// 每欄的高度
let columnHeights = ref([])
// 瀑布的寬度
let masonryWidth = ref(720)
// 瀑布的欄數
let columnsCount = ref(2)

function renderMasonry() {
    masonryWidth.value = document.querySelector('.masonry-row').offsetWidth
    columnsCount.value = Math.min(Math.max(Math.floor(masonryWidth.value / (props.columnWidth + props.columnGap)), 1), props.maxColumn)
    resetMasonryColumn()
    appendCell(props.data)
}


//? 初始化列表欄位數量
function resetMasonryColumn() {
    columnHeights.value = new Array(columnsCount.value).fill(0)
    columnList.value = []
    for (let i = 0; i < columnsCount.value; i++) {
        columnList.value.push([])
    }
}
function appendCell(data) {
    if (!data) return
    //? 判斷是否有資料
    data.forEach(item => {
        if (!item.task) return
        //? 判斷最低高度
        const minHeight = Math.min(...columnHeights.value)
        //? 查詢最低高度的陣列索引
        const indexOfMinHeight = columnHeights.value.indexOf(minHeight)

        //? 對 最低高度的數組 增加 當前物件的高度
        columnHeights.value[indexOfMinHeight] += item.task.length + 320

        //? 在 最低高度的次級列表 加入 當前的物件
        columnList.value[indexOfMinHeight].push(item)


    })
}
function hasData(params) {
    return columnList[0].length == 0
}
onMounted(() => {
    window.onresize = () => { renderMasonry() }
    renderMasonry()
})
onUnmounted(() => {
    window.onresize = null
})
</script>

<template>
    <div class="masonry-warning">
        <p v-if="props.data.length == 0"> No any mission</p>
        <p v-else-if="hasData">
            Your mission data format is incorrect.<br />
            Please refresh this page.
        </p>
    </div>
    <div class="masonry-row" :style="{ '--gap': props.rowGap }">
        <ul v-for="column in columnList" class="masonry-column" :style="{ '--gap': props.columnGap }">
            <li v-for="item in column" class="masonry-cell">
                <MissionCard :mission="item" />
            </li>
        </ul>
    </div>
</template>

<style scoped>
.masonry-row {
    width: 100%;
    display: flex;
    gap: calc(var(--gap) * 1rem);
    flex-direction: row;
    justify-content: start;
    flex-wrap: nowrap;
    padding: 0 calc(var(--gap) * 0.5rem);
}

.masonry-column {
    gap: calc(var(--gap) * 1rem);
    display: flex;
    flex-direction: column;
}

.masonry-cell {
    display: flex;
    justify-content: center;
}

.masonry-warning {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2rem;
    text-transform: capitalize;
    text-align: center;
    line-height: 1.5rem;
}
</style>