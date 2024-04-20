import { defineStore } from "pinia";


export const useSettingStore = defineStore('setting', {
    state: () => ({
        //? 初始化狀態
        isDarkMode: true,
    }),
    getter: {
        //? Computed
    },
    actions: {
        //? Function
    },

})