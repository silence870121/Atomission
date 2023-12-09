<script setup>
import { ref } from 'vue';
import TargetCard from '@/components/Project/TargetCard.vue';
// import MissionCard from '@/components/Project/MissionCard.vue';

import Header from '@/components/Header.vue';

//? Swiper vue 
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Mousewheel, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

//? import Missions
import MissionCard from '@/components/Project/MissionCard.vue';
import { storeToRefs } from 'pinia';
import { useMissionStore } from '../stores/mission';

//? Swiper configs
const modules = [Mousewheel, Pagination]

//? Mission configs
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

</script>
<template>
    <Router />
    <div class="container">
        <Header />
        <div class="home">
            <section class="home-section">
                <h2 class="home-title">
                    Target
                    <router-link to="/targets" @click="toLocal('Target')">more ></router-link>
                </h2>
                <ul class="home-content">
                    <li class="enabled">
                        <TargetCard :title="'First Target'" :progress=100 />
                    </li>
                    <li class="enabled">
                        <TargetCard :title="'First Target'" :progress=100 />
                    </li>
                    <li class="">
                        <TargetCard :title="'First Target'" :progress=100 />
                    </li>
                    <li class="">
                        <TargetCard :title="'First Target'" :progress=100 />
                    </li>
                </ul>
            </section>
            <section class="home-section">
                <h2 class="home-title">
                    Mission
                    <router-link to="/missions" @click="toLocal('Mission')">more ></router-link>
                </h2>
                <div class="home-content">
                    <swiper class="mySwiper home-swiper" slidesPerView="auto" :spaceBetween="32" :centeredSlides="false"
                        :pagination="{
                            dynamicBullets: true,
                        }" :grabCursor="true" :modules="modules">
                        <swiper-slide v-for=" item  in  missionList ">
                            <MissionCard :mission="item" :isDesc="showDesc" :isTarget="showTarget" :isTip="showTip" />
                        </swiper-slide>
                    </swiper>

                </div>
            </section>

        </div>
        <aside class="home-aside border">
            <h2>Sub Container</h2>
            <div class="home-chart"></div>
        </aside>
    </div>
</template>

<style scoped>
.container {
    height: 100vh;
    overflow: hidden;
}

.home {
    position: relative;
    width: 100%;
}

.home-section {
    display: flex;
    flex-direction: column;
    padding: 4rem 1rem;
}

.home-content {
    display: flex;
    padding-top: 1rem;
    gap: 1rem;
}

.home-content li {
    opacity: 0.25;
}

.home-content li.enabled {
    opacity: 1;
}

.home-aside {
    position: absolute;
    right: 3rem;
    background: var(--surface);
    width: 16rem;
    height: 9rem;
    margin-top: 10rem;
    padding: 1rem;
    border-radius: 0.5rem;
}

/* * ----- ----- ----- ----- * */
/* * - Custom Swiper Style - * */
/* * ----- ----- ----- ----- * */
.home-swiper {
    padding: 1rem;
    padding-bottom: 1.5rem;
    margin: -1rem;
}

.swiper-slide {
    width: auto;
    height: auto;
}
</style>

<style  >
.swiper-pagination {
    height: 0.25rem;
}

.swiper-pagination-bullet {
    height: 100%;
    width: 1rem;
    border-radius: 1rem;
    background-color: var(--label-secondary-color);
}
</style>