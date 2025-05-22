<script setup>
import { useMissionStore } from '@stores/mission';
import constants from '@/assets/constants.json';
import basicButton from '@/components/basic/button.vue';
import basicBookmark from '@/components/basic/bookmark.vue';
import basicMessage from '@/components/basic/message.vue';

import formLabel from '@components/form/label.vue';
import formTitle from '@components/form/title.vue';
import formSwitch from '@components/form/switch.vue';
import formSelect from '@components/form/select.vue';
import formNumber from '@components/form/number.vue';
import formText from '@components/form/text.vue';
const props = defineProps({
})
const emit = defineEmits(['save', 'cancel', 'delete'])
const data = defineModel('data', {
    type: Object,
    default: {},
})


const MissionStore = useMissionStore()
const compassList = [
    { name: 'None', value: 'none' },
    { name: 'compass1', value: 'compassId001' },
    { name: 'compass2', value: 'compassId002' },
    { name: 'compass3', value: 'compassId003' },
    { name: 'compass4', value: 'compassId004' }
]
const optionType = Object.entries(constants.mission.type).map(([key, value]) => {
    return { name: value, value: key }
})
const optionLevel = Object.entries(constants.mission.level).map(([key, value]) => {
    return { name: value, value: key }
})

</script>

<template>
    <form class="data-form" action="" @submit.prevent="">
        <form-title name="mission" v-model:title="data.name" v-model:description="data.description" />

        <form-label for="active" showInfo>
            <template #title> Active mission </template>
            <template #info>
                Active mission to run score system.
            </template>
            <form-switch v-model:switch="data.isEnabled" />
        </form-label>
        <form-label showInfo>
            <template #title> bookmark mission </template>
            <template #info>
                Bookmark a mission to keep it at the top of the page.
            </template>
            <template v-slot:default>
                <basic-bookmark v-model:bookmark="data.isMarked" />
            </template>
        </form-label>

        <form-label for="compass" showInfo>
            <template #title> From compass </template>
            <template #info>
                Select the type to which this mission is.
            </template>
            <form-select name="compass" :option="compassList" v-model:select="data.compass" />
        </form-label>

        <form-label for="type" showInfo>
            <template #title> type </template>
            <template #info>
                Select the type to which this mission is.
            </template>
            <form-select name="type" :option="optionType" v-model:select="data.type" />
        </form-label>

        <form-label for="level" showInfo>
            <template #title> level </template>
            <template #info>
                Select the level to which this mission is.
            </template>
            <form-select name="level" :option="optionLevel" v-model:select="data.level" />
        </form-label>

        <TransitionGroup name="list" tag="ul" class="form-list">
            <li v-for="i in data.taskSort" :key="i">
                <form-switch v-model:switch="data.task[i].isActive" @switch="MissionStore.sortTask(data)" />
                <form-text v-model:text="data.task[i].content" flex :disabled="!data.task[i].isActive" />
                <form-number v-model:number="data.task[i].requiredNum" :disabled="!data.task[i].isActive" />
                <form-text v-model:text="data.task[i].unit" center :disabled="!data.task[i].isActive" />
            </li>
        </TransitionGroup>
        <div class="form-flex">
            <basic-button @click="$emit('save')" round background icon="i-carbon:save" active>
                save
            </basic-button>
            <basic-button @click="$emit('cancel')" round background icon="i-carbon:task-remove">
                cancel
            </basic-button>
        </div>

        <basic-message type="danger">
            <template #title> warning </template>
            <p>刪除任務可能導致所屬領域被停用。</p>
            <basic-button @click="$emit('delete')" type="danger" round background icon="i-carbon:trash-can">
                delete mission
            </basic-button>
        </basic-message>
    </form>
</template>

<style scoped>
.data-form {
    max-width: 40rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    margin-top: 2rem;
    text-transform: capitalize;
}

.form-list {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.form-list li {
    display: flex;
    flex-direction: row;
    gap: 1rem;
}

.form-flex {
    display: flex;
    gap: 0.5rem;
}

.form-flex>* {
    width: 10rem;
}

.list-move,
.list-enter-active,
.list-leave-active {
    transition: all 200ms ease-out;
}

.list-enter-from,
.list-leave-to {
    opacity: 0;
    transform: translateX(30px);
}
</style>