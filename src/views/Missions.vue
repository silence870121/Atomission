<script setup>
import MissionCard from '@/components/Project/MissionCard.vue';
import MissionOption from '@/components/Project/MissionOption.vue';
import { ref } from 'vue';

let activeMissionOption = ref(false)

let missionList = ref([
    {
        id: "m0001",
        title: "First mission",
        type: "Daily",
        branch: "Main",
        forTarget: "First target",
        description: "This is the first mission,This is the first mission, ",
        level: 5,
        list: [
            {
                content: "Mission Item 1",
                done: 10,
                requestNum: 50,
                unit: "unit"
            }, {
                content: "Mission Item 2",
                done: 30,
                requestNum: 50,
                unit: "unit"
            }, {
                content: "Mission Item 3",
                done: 50,
                requestNum: 50,
                unit: "unit"
            }, {
                content: "Mission Item 4",
                done: 70,
                requestNum: 50,
                unit: "unit"
            },
        ],
        createDate: "2023-01-01",
        modifiedDate: "2023-01-31",
        tip: "This is a daily mission. "
    }, {
        id: "m0002",
        title: "Second mission",
        type: "Weekly",
        branch: "Main",
        forTarget: "First target",
        description: "This is the Second mission.This is the first mission.This is the first mission.",
        level: 3,
        list: [
            {
                content: "Mission Item 1",
                done: 15,
                requestNum: 30,
                unit: "unit"
            }, {
                content: "Mission Item 2",
                done: 35,
                requestNum: 30,
                unit: "unit"
            }, {
                content: "Mission Item 3",
                done: 55,
                requestNum: 30,
                unit: "unit"
            }, {
                content: "Mission Item 4",
                done: 75,
                requestNum: 30,
                unit: "unit"
            },
        ],
        createDate: "2023-02-01",
        modifiedDate: "2023-02-28",
        tip: "This is a Weekly mission. You must complete the mission, or else you will lose this mission score."
    }, {
        id: "m0003",
        title: "Third mission",
        type: "Stage",
        branch: "Main",
        forTarget: "First target",
        description: "This is the first mission",
        level: 1,
        list: [
            {
                content: "Mission Item 1",
                done: 5,
                requestNum: 10,
                unit: "unit"
            }, {
                content: "Mission Item 2",
                done: 15,
                requestNum: 10,
                unit: "unit"
            }, {
                content: "Mission Item 3",
                done: 25,
                requestNum: 10,
                unit: "unit"
            }, {
                content: "Mission Item 4",
                done: 35,
                requestNum: 10,
                unit: "unit"
            },
        ],
        createDate: "2023-03-01",
        modifiedDate: "2023-03-31",
        tip: "This is a daily mission. You must complete the mission, or else you will lose this mission score."
    }
])


</script>

<template>
    <Router />
    <div class="container">
        <div class="mission">
            <h2> Mission </h2>
            <div class="mission-group">
                <ul name="daily">
                    <li v-for="item in missionList.filter(m => m.type == 'Daily')">
                        <MissionCard :mission="item" isDesc isTarget isTip />
                    </li>
                </ul>
                <ul name="Weekly">
                    <li v-for="item in missionList.filter(m => m.type == 'Weekly')">
                        <MissionCard :mission="item" isDesc isTarget isTip />
                    </li>
                </ul>
                <ul name="Stage">
                    <li v-for="item in missionList.filter(m => m.type == 'Stage')">
                        <MissionCard :mission="item" isDesc isTarget isTip />
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<style scoped>
.mission {
    width: 100%;
}

.mission-group {
    display: flex;
    gap: 1rem;
    margin: 0 -1rem;
}

.mission-group ul {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
}
</style>