<script setup>
import { ref } from 'vue';
//? import Swiper
// Swiper vue 
import { Swiper, SwiperSlide } from 'swiper/vue';
// Swiper Modules  
import { Mousewheel, Pagination } from 'swiper/modules';
// Swiper Styles
import 'swiper/css';
import 'swiper/css/pagination';

//? import Missions Components
import MissionCard from '@/components/Project/MissionCard.vue';
import MissionOption from '@/components/Project/MissionOption.vue';

import { storeToRefs } from 'pinia';
import { useMissionStore } from '../stores/mission';



//? Swiper configs
const modules = [Mousewheel, Pagination]


//? show mission options
let activeMissionOption = ref(false)
function openOption() { activeMissionOption.value = true }
function closeOption() { activeMissionOption.value = false }

const mission = useMissionStore()
const { showTarget, showDesc, showTip } = storeToRefs(mission)
mission.showTip = false

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
            }
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
            }
        ],
        createDate: "2023-02-01",
        modifiedDate: "2023-02-28",
        tip: ""
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
    }, {
        id: "m0004",
        title: "Forth mission",
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
            }
        ],
        createDate: "2023-03-01",
        modifiedDate: "2023-03-31",
        tip: "This is a daily mission. You must complete the mission, or else you will lose this mission score."
    }
])
const typeList = ["Daily", "Weekly", "Stage"]

function handleMission(item) {
    console.log(item.id);
}

</script>

<template>
    <Router />
    <div class="container">
        <div class="mission">
            <h2> Mission </h2>
            <!--? Outer Swiper -->
            <swiper class="mySwiper swiper-h mission-view" spaceBetween="0" :grabCursor="true" :centeredSlides="false"
                :pagination="{
                    dynamicBullets: true,
                }" :breakpoints="{ 540: { slidesPerView: 'auto' } }" :modules="modules">
                <!--! Inner Swiper -->
                <!--? Column 1 -->
                <swiper-slide v-for=" group in typeList">
                    <swiper class="mySwiper2 swiper-v mission-group" :mousewheel="true" :slidesPerView="'auto'"
                        :direction="'vertical'" :spaceBetween="32" :modules="modules">
                        <swiper-slide v-for=" item  in  missionList.filter(item => item.type == group)">
                            <MissionCard :mission="item" :isDesc="showDesc" :isTarget="showTarget" :isTip="showTip"
                                @click="handleMission(item), openOption()" />
                        </swiper-slide>
                    </swiper>
                </swiper-slide>

                <!--! Inner Swiper -->
            </swiper>
            <!--? Outer Swiper -->
        </div>
        <div v-show="activeMissionOption" class="mission-option border">
            <button class="close-btn" @click="closeOption"> <svg-icon name="close" /> </button>
            <MissionOption :missionItem="mission.temp" />
        </div>
    </div>
</template>

<style scoped>
.container {
    overflow: hidden;
    padding-bottom: 0.5rem;
}

.mission {
    flex: 1;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    overflow: hidden;
}

.mission-option {
    /* margin-top: 2.5rem; */
    width: 360px;
    height: 50rem;
    backdrop-filter: blur(1rem);
    box-shadow: 0 0.5rem 1rem 1rem var(--surface-color);

    /* border: 1px solid black; */
}

/* * ----- ----- ----- ----- * */
/* * - Custom Swiper Style - * */
/* * ----- ----- ----- ----- * */
.swiper-h {
    width: 100%;
    height: 100%;
    /* padding: 1.5rem;
    padding-top: 0; */
    padding-bottom: 1.5rem;
}

.swiper-h::after {
    content: "";
    z-index: 1;
    position: absolute;
    top: 0;
    bottom: 0;
    right: -2rem;
    left: -2rem;
    pointer-events: none;
}

.swiper-v {
    height: 100%;
    padding: 1rem;
}

.swiper-slide {
    width: auto;
    height: auto;
}

@media (max-width:1080px) {
    .mission-option {
        position: fixed;
        z-index: 99999;
        top: 5rem;
        right: 1rem;
        height: calc(100% - 6rem);
        box-shadow: 0 0 2rem var(--on-primary-color);
    }
}

@media (max-width:540px) {
    .container {
        width: 100%;
    }

    .swiper-h {
        padding: 1.5rem;
        padding-top: 0;
    }
}
</style>
<style>
.swiper-pagination {
    height: 0.25rem;
}

.swiper-pagination-bullet {
    height: 100%;
    width: 1rem;
    border-radius: 1rem;
    background-color: var(--primary-color);
}
</style>