<script setup>

const prop = defineProps({
    option: Array,
    colorful: Boolean,
    hex: Object,
    unit: String,
})
</script>

<template>
    <div class="select">

        <select name="" id="">
            <option v-for="item in  prop.option " :value="item">
                <span v-if="colorful">{{ prop.hex[item] }}</span>
                {{ item }}
            </option>
        </select>
        <svg-icon name="select" size="xs" />
        <p v-if="unit">{{ prop.unit }}</p>
    </div>
</template>

<style scoped>
.select {
    text-transform: capitalize;
    display: flex;
}
</style>