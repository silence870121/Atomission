<script setup>
import TargetCard from '@/components/Project/TargetCard.vue';
import HomeMasonry from '@/components/HomeMasonry.vue';
import Masonry from '@/components/Masonry.vue';
</script>
<template>
    <Router />
    <div class="container">
        <div class="home">

            <div class="home-area">
                <h2 class="home-area-title">
                    App bar
                </h2>
            </div>
            <div class="home-area">
                <h2 class="home-area-title">
                    Target
                    <router-link to="/targets" @click="toLocal('Target')">more ></router-link>
                </h2>
                <div class="home-area-target">
                    <TargetCard :title="'First Target'" :progress=100 />
                    <TargetCard :title="'First Target'" :progress=100 />
                    <TargetCard :title="'First Target'" :progress=100 />
                    <TargetCard :title="'First Target'" :progress=100 />
                </div>
            </div>
            <div class="home-area">
                <h2 class="home-area-title">
                    Mission
                    <router-link to="/missions" @click="toLocal('Mission')">more ></router-link>
                </h2>
                <div class="waterfall">
                    <!-- <HomeMasonry /> -->
                    <Masonry />
                </div>
            </div>

        </div>
        <div class="home-side">

            <h2>Sub Container</h2>
            <div class="home-chart"></div>
            <div class="home-chart"></div>

        </div>
    </div>
</template>

<style scoped>
.home {
    flex: 1;
}

.home,
.home-side {
    display: flex;
    justify-content: space-between;
    gap: 2rem;
    flex-direction: column;
}

.home-area-title {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
    font-weight: 600;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;

}

.home-area-title a {
    font-size: 1rem;
}

/* * ----- ---- ----- * */
/* * Home Target Area * */
/* * ----- ---- ----- * */
.home-area-target {
    width: 100%;
    display: flex;
    gap: 0.5rem;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
}

.home-area-target>* {
    flex: 1;
    /* min-width: 15rem; */
}

.home-area-target>>>.target-svg {
    width: 3rem;
    height: 3rem;
}


.waterfall {
    /* height: 200vh; */
    border: 1px solid var(--border-color);
}

/* * ----- ----- ----- ----- * */
/* * Home Sub Container Area * */
/* * ----- ----- ----- ----- * */

.home-chart {
    width: 192px;
    height: 160px;
    background-color: #fff;
    border-radius: var(--border-radius-md);
}

@media (max-width: 768px) {
    .home-sub {
        display: none;
    }

    .home-side {
        display: none;
    }
}
</style>