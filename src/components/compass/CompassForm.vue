<script setup>
import { useCompassStore } from '@/stores/compass';
import constants from '@/assets/constants.json';


import basicButton from '@/components/basic/button.vue';
import basicBookmark from '@/components/basic/bookmark.vue';
import basicMessage from '@/components/basic/message.vue';
import basicStatus from '@/components/basic/status.vue';

import formLabel from '@components/form/label.vue';
import formTitle from '@components/form/title.vue';
import formSelect from '@components/form/select.vue';
import formNumber from '@components/form/number.vue';
import { computed } from 'vue';
const props = defineProps({

})
const emit = defineEmits(['save', 'cancel', 'delete'])
const data = defineModel('data', {
    type: Object,
    default: {},
})


const optionStage = Object.entries(constants.compass.stage).map(([key, value]) => {
    return { name: value, value: key }
})
const optionAptness = Object.entries(constants.compass.aptness).map(([key, value]) => {
    return { name: value, value: key }
})


const getStatus = computed(() => {
    if (!data.value.isEnabled) return 'disabled'
    if (data.value.isFull) return 'enabled'
    return 'warning'
})

const getLandmark = computed(() => {
    const landmark = constants.compass.landmark[data.value.stage] * data.value.landmark * 30 * constants.mission.maxScore
    return `${constants.mission.maxScore} : ${landmark}`
})
console.log(getLandmark.value);
</script>

<template>
    <form class="data-form" action="" @submit.prevent="">
        <form-title name="compass" v-model:title="data.name" v-model:description="data.description" />
        <form-label for="enable" showInfo>
            <template #title>狀態 | status </template>
            <template #info>
                the status of this compass is enabled or not.
            </template>
            <basic-status :status="getStatus" />
        </form-label>

        <form-label showInfo>
            <template #title>標籤 | bookmark </template>
            <template #info>
                Bookmark a compass to keep it at the top of the page.
            </template>
            <template v-slot:default>
                <basic-bookmark v-model:bookmark="data.isMarked" />
            </template>
        </form-label>
        <form-label for="compass" showInfo>
            <template #title>階段 | Stage </template>
            <template #info>
                Select the Stage of compass.
            </template>
            <form-select name="compass" :option="optionStage" v-model:select="data.stage" />
        </form-label>
        <form-label for="compass" showInfo>
            <template #title>適應力 | aptness </template>
            <template #info>
                Select the aptness of compass.
            </template>
            <form-select name="compass" :option="optionAptness" v-model:select="data.aptness" />
        </form-label>
        <form-label for="compass" showInfo>
            <template #title>里程碑 | landmark </template>
            <template #info>
                Set the landmark base number of compass. Unit: month
            </template>
            <form-number name="compass" v-model:number="data.landmark" :max=12 />
        </form-label>
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
            <p>刪除路標後，屬於該路標的所有任務將歸類為未指定。</p>
            <basic-button @click="$emit('delete')" type="danger" round background icon="i-carbon:trash-can">
                delete compass
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

.form-flex {
    display: flex;
    gap: 0.5rem;
}

.form-flex>* {
    width: 10rem;
}
</style>