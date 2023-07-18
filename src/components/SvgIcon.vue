<script setup>
import { computed } from 'vue';

const props = defineProps({
    name: {
        type: String,
        required: true,
    },
    size: {
        type: String,
        default: "sm",
    }
})
const symbolId = computed(() => { return `#icon-${props.name}` })

const SvgSize = computed(() => { return `svg-icon-${props.size}` })

</script>

<template>
    <svg aria-hidden="true" :class="SvgSize">
        <use :xlink:href="symbolId" />
    </svg>
</template>

<style>
svg {
    width: 100%;
    height: 100%;
}

.svg-icon-xs {
    width: 1rem;
    height: 1rem;
}

.svg-icon-s {
    width: 1.5rem;
    height: 1.5rem;
}

.svg-icon-sm {
    width: 2rem;
    height: 2rem;
}

.svg-icon-md {
    width: 3rem;
    height: 3rem;
}

.svg-icon-lg {
    width: 4rem;
    height: 4rem;
}
</style>