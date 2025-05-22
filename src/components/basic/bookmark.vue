<script setup>

import basicButton from '@/components/basic/button.vue';
const props = defineProps({

})
const bookmark = defineModel('bookmark', {
    type: Boolean,
    default: false,
})
</script>

<template>
    <basic-button @click="bookmark = !bookmark" round background
        :icon="bookmark ? 'i-carbon:bookmark-filled' : 'i-carbon:bookmark'" />
</template>

<style scoped>
button {
    width: max-content;
}
</style>