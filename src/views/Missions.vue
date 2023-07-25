<script setup>
import { ref } from 'vue';
//? import Swiper vue 
import { Swiper, SwiperSlide } from 'swiper/vue';
//? import Swiper Modules  
import { Mousewheel, Pagination } from 'swiper/modules';
//? import Swiper Styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
//? import Missions Components
import MissionCard from '@/components/Project/MissionCard.vue';
import MissionOption from '@/components/Project/MissionOption.vue';

let activeMissionOption = ref(false)
let showDesc = ref(false)
let showTarget = ref(false)
let showTip = ref(false)

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
    }
])
const onSwiper = (swiper) => {
    console.log(swiper);
};
const onSlideChange = () => {
    console.log('slide change');
};
const modules = [Mousewheel, Pagination]

function handleMission(item) {
    console.log(item.id);
}

</script>

<template>
    <Router />
    <div class="container">
        <div class="mission">
            <h2> Mission </h2>
            <swiper :effect="'coverflow'" spaceBetween="0" :grabCursor="true" :centeredSlides="false"
                :breakpoints="{ 720: { slidesPerView: 2 }, 1080: { slidesPerView: 3 }, 1440: { slidesPerView: 4 }, 1800: { slidesPerView: 4 }, }"
                :slidesPerView="1" :coverflowEffect="{
                    rotate: 0,
                    stretch: 0,
                    depth: 0,
                    modifier: 1,
                    slideShadows: false,
                }" :pagination="{ dynamicBullets: true, }" :modules="modules" class="mySwiper swiper-h mission-view">
                <swiper-slide>
                    <swiper class="mySwiper2 swiper-v mission-group" :mousewheel="true" :slidesPerView="'auto'"
                        :direction="'vertical'" :spaceBetween="32" :modules="modules">
                        <swiper-slide v-for=" item  in  missionList ">
                            <MissionCard :mission="item" :isDesc="showDesc" :isTarget="showTarget" :isTip="showTip"
                                @click="handleMission(item)" />
                        </swiper-slide>
                    </swiper>
                </swiper-slide>
                <swiper-slide>
                    <swiper class="mySwiper2 swiper-v mission-group" :mousewheel="true" :slidesPerView="'auto'"
                        :direction="'vertical'" :spaceBetween="32" :modules="modules">
                        <swiper-slide v-for=" item  in  missionList.filter(item => item.type == 'Daily') ">
                            <MissionCard :mission="item" isDesc isTarget isTip />
                        </swiper-slide>
                    </swiper>
                </swiper-slide>
                <swiper-slide>
                    <swiper class="mySwiper2 swiper-v mission-group" :mousewheel="true" :slidesPerView="'auto'"
                        :direction="'vertical'" :spaceBetween="32" :modules="modules">
                        <swiper-slide v-for=" item  in  missionList ">
                            <MissionCard :mission="item" isDesc isTarget isTip />
                        </swiper-slide>
                    </swiper>
                </swiper-slide>
                <swiper-slide>
                    <swiper class="mySwiper2 swiper-v mission-group" :mousewheel="true" :slidesPerView="'auto'"
                        :direction="'vertical'" :spaceBetween="32" :modules="modules">
                        <swiper-slide v-for=" item  in  missionList ">
                            <MissionCard :mission="item" isDesc isTarget isTip />
                        </swiper-slide>
                    </swiper>
                </swiper-slide>
                <swiper-slide>
                    <swiper class="mySwiper2 swiper-v mission-group" :mousewheel="true" :slidesPerView="'auto'"
                        :direction="'vertical'" :spaceBetween="16" :modules="modules">
                        <swiper-slide v-for=" item  in  missionList ">
                            <MissionCard :mission="item" isDesc isTarget isTip />
                        </swiper-slide>
                    </swiper>
                </swiper-slide>


            </swiper>
        </div>

    </div>
</template>

<style scoped>
.container {
    width: calc(100vw - 10rem);
    overflow: hidden;
}

.mission {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

/* * ----- ----- ----- ----- * */
/* * - Custom Swiper Style - * */
/* * ----- ----- ----- ----- * */
.swiper-h {
    width: 100%;
    height: 100%;
    padding: 0 1.5rem 1.5rem 1.5rem;
}

.swiper-h::after {
    content: "";
    z-index: 1;
    position: absolute;
    top: 0;
    bottom: 0;
    right: -2rem;
    left: -2rem;
    box-shadow: inset 0 0 5rem var(--surface-color);
    pointer-events: none;
}

.swiper-v {
    height: 100%;
    padding: 1rem;
}

.swiper-slide {
    height: auto;
}

@media (max-width:540px) {
    .container {
        width: 100vw;
        height: calc(100vh - 5rem);
        overflow: hidden;
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