import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'

export default createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
        },
        {
            path: '/missions',
            name: 'missions',
            component: () => import('@/views/Missions.vue'),
        },
        {
            path: '/targets',
            name: 'targets',
            component: () => import('@/views/Targets.vue'),
        },
        {
            path: '/profile',
            name: 'profile',
            component: () => import('@/views/Profile.vue'),
        },
        {
            path: '/setting',
            name: 'setting',
            component: () => import('@/views/Setting.vue'),
        }
        ,
        {
            path: '/test',
            name: 'test',
            component: () => import('@/views/Test.vue'),
        }
        ,
        {
            path: '/404',
            name: '404',
            component: () => import('@/views/Error.vue'),
            hidden: true
        },
        {
            path: '/:pathMatch(.*)*',
            redirect: '/404',
            hidden: true
        }
    ],
})