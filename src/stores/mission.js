import { defineStore } from "pinia";
import { useDataStore } from "@stores/data"
import { ref } from "vue";
import defaultData from "@/assets/default.json";
export const useMissionStore = defineStore('mission', () => {
    const dataStore = useDataStore()

    //? CONSTANTS
    const DEFAULT_MISSION = defaultData.mission

    //? Mission's edit database
    let missionEditor = ref({ ...defaultData.mission })
    let missionList = ref([])

    function getAllMission() {
        dataStore.getAllData('user').then((res) => {
            missionList.value = res
        })
    }
    function sortTask(mission) {
        mission.taskSort.sort((a, b) => {
            return mission.task[b].isActive - mission.task[a].isActive
        })
    }

    return {
        sortTask,
        DEFAULT_MISSION,
        missionEditor,
        missionList,
        getAllMission
    }
})