const PAGE_PARENT = 'mission'

const pages = import.meta.glob('./*/page.js', { eager: true, import: 'default' });
const pagesComps = import.meta.glob('./*/index.vue');
const children = Object.entries(pages).map(([path, meta]) => {
    let pageJSPath = path
    // format path
    path = path.replace('./', '').replace('index', '').replace('/page.js', '')

    // format name
    let name = pageJSPath.replace('.', PAGE_PARENT).replace('index', '').replace('/page.js', '')
    name = name.split('/').filter(Boolean).join('-')

    // get component path from page.js file path
    const compPath = pageJSPath.replace('page.js', 'index.vue')
    return {
        path,
        name,
        component: pagesComps[compPath],
        meta,
    }
});
export default {
    meta: {
        title: 'Mission',
        menuOrder: 1,
    },
    children
}

