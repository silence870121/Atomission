<script setup>
const props = defineProps({
    name: {
        type: String,
        default: 'atomission',
    }
})
const title = defineModel('title')
const description = defineModel('description')

</script>

<template>
    <div class="form-title">
        <label :for="props.name">{{ props.name }} title</label>
        <input type="text" :name="props.name" :id="props.name" :placeholder="`${props.name} title`" v-model="title">
        <hr />

        <label :for="`${props.name}-description`">{{ props.name }} description</label>
        <textarea :name="`${props.name}-description`" :id="`${props.name}-description`"
            :placeholder="`${props.name} description...`" rows="3" v-model="description" />
    </div>
</template>

<style scoped>
.form-title {
    display: flex;
    flex-direction: column;
    background: var(--action);
    border-radius: var(--border-radius-md);
    padding: 0.5rem 1rem;
    text-transform: capitalize;
    position: relative;
}

hr {
    width: 100%;
    margin: 0;
    border: none;
    border-top: 1px solid var(--label-quaternary-color);
    transition: border 200ms ease-out;
}

label {
    display: none;
}

input {
    font-size: 1.5rem;
    line-height: 1.5;
}

textarea {
    font-size: 1rem;
    padding: 0.5rem 0.25rem;
    resize: none;
}

input::placeholder,
textarea::placeholder {
    color: var(--label-quaternary-color);
}

input:focus~hr {
    border-color: var(--active-from-color);

}

.form-title::after {
    position: absolute;
    content: '';
    inset: 0;
    border: 1px solid var(--active-from-color);
    border-radius: inherit;
    opacity: 0;
    transition: opacity 200ms ease-out;
    pointer-events: none;
}

.form-title:focus-within::after {
    opacity: 1;
    transition: 100ms;
}
</style>