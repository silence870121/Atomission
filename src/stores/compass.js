import { defineStore } from "pinia";
import { useDataStore } from "@stores/data"
import { ref } from "vue";
import defaultData from "@/assets/default.json";


export const useCompassStore = defineStore('compass', () => {
    const compassDataStore = useDataStore().db_compass
    //? 初始化狀態
    let isCardMode = ref(true)
    const DEFAULT_COMPASS = defaultData.compass

    //? Mission's edit database
    let compassEditor = ref({ ...defaultData.compass })
    let compassList = ref([])
    return {
        isCardMode,
        DEFAULT_COMPASS,
        compassEditor,
        compassList,
    }
})