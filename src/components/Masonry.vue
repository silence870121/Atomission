<script setup>

const prop = defineProps({
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
        required: true,
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
// ? 計算容器內欄數
const columnsCount = computed(() => { return Math.min(Math.max(Math.floor(MasonryContainerWidth.value / prop.columnWidth), 1), 4) })

</script>

<template>
    <div class="v-masonry">

    </div>
</template>

<style scoped></style>