import { defineStore } from "pinia";


export const useSettingStore = defineStore('setting', {
    state: () => ({
        //? 初始化狀態
        isDarkMode: false,
    }),
    getter: {
        //? Computed
    },
    actions: {
        //? Function
    },

})