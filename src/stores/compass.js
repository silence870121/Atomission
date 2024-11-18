import { defineStore } from "pinia";


export const useCompassStore = defineStore('compass', {
    state: () => ({
        //? 初始化狀態
        isCardMode: true,
        defaultTarget: {
            id: "compassID",
            name: "compassName",
            stage: "compassStage",
            landmark: 1000,
            score: 999,
            aptness: "",
            create_date: "yyyy-mm-dd",
            edit_date: "",
            isActive: true,
            halveScore: false,
            isMarked: false,
            children: [],
        },
        compassDataList: [{
            id: "c0001",
            name: "My First Compass",
            stage: "beginning",
            landmark: 1000,
            score: 999,
            aptness: "",
            create_date: "2024-01-01",
            edit_date: "",
            isActive: true,
            halveScore: false,
            isMarked: false,
            children: []
        }]
    }),
    getter: {

    },
    actions: {

    },

})