<script setup>
const props = defineProps({
    name: {
        type: String,
        required: true,
    },
})
const symbolId = `#icon-${props.name}`
</script>

<template>
    <svg aria-hidden="true">
        <use :xlink:href="symbolId" />
    </svg>
</template>

<style scoped></style>