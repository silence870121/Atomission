<script setup>
import TargetCard from '@/components/Project/TargetCard.vue';
import Masonry from '@/components/Masonry.vue';
import Header from '@/components/Header.vue';
</script>
<template>
    <Router />
    <div class="container">
        <Header />
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
                <div class="home-masonry">
                    <Masonry />
                </div>
            </div>

        </div>
        <div class="home-side">
            <h2>Sub Container</h2>
            <div class="home-chart"></div>
        </div>
    </div>
</template>

<style scoped>
.home {
    height: 100vh;
    overflow: hidden;
}

.home-area {
    display: flex;
    flex-direction: row;
}
</style>