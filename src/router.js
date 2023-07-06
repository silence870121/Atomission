import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'

export default createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: Home,
        },
        {
            path: '/missions',
            component: () => import('@/views/Missions.vue'),
        },
        {
            path: '/targets',
            component: () => import('@/views/Targets.vue'),
        },
        {
            path: '/profile',
            component: () => import('@/views/Profile.vue'),
        },
        {
            path: '/setting',
            component: () => import('@/views/Setting.vue'),
        }
        ,
        {
            path: '/:pathMatch(.*)*',
            component: () => import('@/views/Notfound.vue'),
        }
    ],
})