import { createRouter, createWebHistory } from 'vue-router'

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
});
export default createRouter({
    history: createWebHistory('/atomission/'),
    routes,
})