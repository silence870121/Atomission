import { defineStore } from "pinia";
import { useDataStore } from "@stores/data"
import { ref } from "vue";

export const useCompassStore = defineStore('compass', () => {
    const compassDataStore = useDataStore().db_compass
    //? 初始化狀態
    let isCardMode = ref(true)
    const DEFAULT_COMPASS = {
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
    }
    let compassDataList = [{
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

    return {
        isCardMode,
        DEFAULT_COMPASS,
        compassDataList,
    }
})