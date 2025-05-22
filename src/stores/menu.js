import { defineStore } from "pinia";

export const useMenuStore = defineStore('menu', () => {

    const routes = [
        {
            path: "/",
            icon: "i-carbon:home",
            content: "home"
        }, {
            path: "/mission",
            icon: "i-carbon:document",
            content: "mission"
        }, {
            path: "/compass",
            icon: "i-carbon:compass",
            content: "Compass"
        }, {
            path: "/profiles",
            icon: "i-carbon:user-avatar-filled-alt",
            content: "profiles"
        }, {
            path: "/settings",
            icon: "i-carbon:settings",
            content: "setting"
        }
    ]
    const bookmark = [
        {
            compass: "compass-1",
            routes: [{
                path: "/mission:001",
                icon: "i-carbon:document",
                content: "mission"
            },
            {
                path: "/mission:002",
                icon: "i-carbon:document",
                content: "mission"
            }]
        },
        {
            compass: "compass-2",
            routes: [{
                path: "/mission:003",
                icon: "i-carbon:document",
                content: "mission"
            }]
        },
    ]
    const custom = [
        {
            path: "/test",
            icon: "i-carbon:terminal",
            content: "test"
        }, {
            path: "/404",
            icon: "i-carbon:warning-alt",
            content: "error"
        }
    ]
    return {
        routes,
        bookmark,
        custom
    }
})