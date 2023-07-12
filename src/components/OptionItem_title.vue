<script setup>

const prop = defineProps({
    title: {
        type: String,
        required: true,
    },
})

</script>

<template>
    <div class="option-content">
        <input type="text" :value="title">
        <div class="option-branch">

            <select name="" id="">
                <svg-icon name="branch" size="xs" />
                <option value="main"> Main</option>
                <option value="sub">Sub</option>
            </select>
        </div>
    </div>
</template>

<style scoped>
.option-content {
    flex: 1;
    display: flex;
    padding: 1rem;
    background-color: var(--on-surface-color);
    flex-direction: row;
    align-items: center;
    gap: 1rem;
}

.option-content input {
    flex: 1;
    min-width: 7.5rem;
    width: 100%;
    font-size: 1.5rem;
    padding-bottom: 0.5rem;
    border-bottom: 1px solid;
    border-image: var(--border-center-row) 1;
    white-space: nowrap;
}

.option-content select {
    background: var(--surface-variant-color);
    padding: 0.25rem 1rem;
    font-size: 1rem;
    border-radius: var(--border-radius-sm);
    text-align: center;
}

.option-content option {
    text-align: center;
    border: none;
    height: 2rem;

}
</style>