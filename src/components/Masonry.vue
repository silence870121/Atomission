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
        default: 320,
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
    list: {
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
    masonryWidth.value = document.querySelector('.v-masonry').offsetWidth
    columnsCount.value = Math.min(Math.max(Math.floor(masonryWidth.value / prop.columnWidth), 1), prop.maxColumn)
    resetMasonryColumn()
    appendCell(prop.list)

}

onMounted(() => {
    renderMasonry()
})
window.onresize = () => { renderMasonry() }

//? 初始化列表欄位
function resetMasonryColumn() {
    columnHeights.value = new Array(columnsCount.value).fill(0)
    columnList.value = []
    for (let i = 0; i < columnsCount.value; i++) {
        columnList.value.push([])
    }
}

function appendCell(list) {
    list.forEach(item => {
        //? 判斷最低高度
        const minHeight = Math.min(...columnHeights.value)
        //? 查詢最低高度的陣列索引
        const indexOfMinHeight = columnHeights.value.indexOf(minHeight)

        //? 對 最低高度的數組 增加 當前物件的高度
        columnHeights.value[indexOfMinHeight] += item.list.length + 320

        //? 在 最低高度的次級列表 加入 當前的物件
        columnList.value[indexOfMinHeight].push(item)
    })
}


</script>

<template>
    <div class="v-masonry">
        <ul v-for="list in columnList" class="masonry-column">
            <li v-for="item in list" class="masonry-cell">
                <MissionCard :mission="item" />
            </li>
        </ul>
    </div>
</template>

<style scoped>
.v-masonry {
    width: 100%;
    display: flex;
    gap: 1.5rem;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: nowrap;
}

.masonry-column {
    display: flex;
    flex-direction: column;
    flex: 1;
    gap: 1.5rem;
}

.masonry-cell {
    width: 100%;
    display: flex;
    justify-content: center;
}

.mission-card {
    width: 100%;
    max-width: 25rem;
}
</style>