<script setup>
import { ref, onMounted, computed } from 'vue';
const Masonry_GAP = 16
const column_Width = 360
let MasonryContainerWidth = ref('720')

// ? 計算容器內欄數
const columnsCount = computed(() => { return Math.min(Math.max(Math.floor(MasonryContainerWidth.value / column_Width), 1), 4) })


function renderMasonry() {
    MasonryContainerWidth.value = document.querySelector('.masonry').offsetWidth
    console.log(MasonryContainerWidth.value);
}

onMounted(() => {
    renderMasonry()
})
window.onload = function () {
    renderMasonry()
}
window.onresize = function () {
    renderMasonry()
}
</script>
<template>
    <div class="masonry">
        <h3>Waterfall</h3>
        <p>column: {{ MasonryContainerWidth + " & " + columnsCount }}</p>
        <ul class="masonry-container">
            <li v-for="i in columnsCount" class="masonry-box"></li>
        </ul>
    </div>
</template>

<style scoped>
.masonry-container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 1rem;
    padding: 1rem 0;
}

.masonry-box {
    flex: 1;
    border: 1px solid var(--border-color);
    height: 180px;
}
</style>