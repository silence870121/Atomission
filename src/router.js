import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/index.vue'


const old_routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
    },
    {
        path: '/mission',
        name: 'missions',
        component: () => import('@/views/mission/index.vue'),
        children: [
            {
                path: '',
                name: 'missionHome',
                component: () => import('@/views/mission/index/index.vue'),
            },
            {
                path: 'edit',
                name: 'missionEdit',
                component: () => import('@/views/mission/edit/index.vue'),
            }
        ]
    },
    {
        path: '/targets',
        name: 'targets',
        component: () => import('@/views/compass/index.vue'),
    },
    {
        path: '/profile',
        name: 'profile',
        component: () => import('@/views/profiles/index.vue'),
    },
    {
        path: '/setting',
        name: 'setting',
        component: () => import('@/views/settings/index.vue'),
    }
    ,
    {
        path: '/test',
        name: 'test',
        component: () => import('@/views/test/index.vue'),
    }
    ,
    {
        path: '/404',
        name: '404',
        component: () => import('@/views/404/index.vue'),
        hidden: true
    },
    {
        path: '/:pathMatch(.*)*',
        redirect: '/404',
        hidden: true
    }
]

const pages = import.meta.glob(['@/views/page.js', '@/views/*/page.js'], {
    eager: true,
    import: 'default'
});

const pagesComps = import.meta.glob(['@/views/**/index.vue']);
const routes = Object.entries(pages).map(([path, config]) => {

    let pageJSPath = path
    // format path
    path = path.replace('/src/views', '').replace('/page.js', '') || '/'
    // format name
    const name = path.replace('/', '') || 'index'
    // get component path from page.js file path
    const compPath = pageJSPath.replace('page.js', 'index.vue')
    return {
        path,
        name,
        component: pagesComps[compPath],
        meta: config.meta,
        children: config.children,
    }
});
routes.push({
    path: '/:pathMatch(.*)*',
    redirect: '/404',
    hidden: true
});
export default createRouter({
    history: createWebHistory(),
    routes,
})