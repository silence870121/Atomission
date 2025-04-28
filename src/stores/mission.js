import { defineStore } from "pinia";
import { useDataStore } from "@stores/data"
import { ref } from "vue";
import defaultData from "@/assets/default.json";
export const useMissionStore = defineStore('mission', () => {
    const dataStore = useDataStore()

    //? CONSTANTS
    const DEFAULT_MISSION = defaultData.mission
    const OPTION = {
        type: {
            daily: '每日',
            weekly: '每週',
            dungeon: '副本',
            series: '系列',
            limit: '限時',
            once: '單次',
            loop: '循環'
        },
        level: {
            easy: '簡單',
            normal: '普通',
            hard: '困難',
            expert: '專家',
            master: '大師'
        }
    }
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
        OPTION,
        missionEditor,
        missionList,
        getAllMission
    }
})