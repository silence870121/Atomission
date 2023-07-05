<script setup>
import TargetCard from '@/components/Project/TargetCard.vue';
</script>

<template>
    <div class="home">
        <div class="home-main">
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
            </div>
        </div>
        <div class="home-sub">
            <h2>Sub Container</h2>
            <div class="home-chart"></div>
            <div class="home-chart"></div>
        </div>
    </div>
</template>

<style scoped>
.home {
    display: flex;
    gap: 2rem;
}

.home-main,
.home-sub {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.home-sub {
    background-color: rgba(0, 0, 0, 0.25);
    padding: 1rem 0;
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

.home-area-target>>>.target-svg {
    width: 3rem;
    height: 3rem;
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
}
</style>