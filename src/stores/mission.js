import { defineStore } from "pinia";
import { useDataStore } from "@stores/data"
import { ref } from "vue";

export const useMissionStore = defineStore('mission', () => {
    const missionDataStore = useDataStore().db_missions

    //? CONSTANTS
    const DEFAULT_MISSION = {
        id: '',
        name: '',
        description: '',
        compass: '',
        type: 'Select Type',
        level: 'Normal',
        create_date: 'yyyy-mm-dd',
        edit_date: '',
        limit_date: '',
        isMarked: false,
        isCompleted: false,
        itemList: [
            {
                name: '任務細項',
                completed_num: 0,
                request_num: 1,
                unit: '單位'
            }
        ]
    }
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
    let missionForm = ref({
        id: "",
        name: "",
        description: "",
        compass: "---none---",
        type: "once",
        level: "normal",
        create_date: "yyyy-mm-dd",
        edit_date: "yyyy-mm-dd",
        limit_date: "yyyy-mm-dd",
        isMarked: false,
        isCompleted: false,
        itemList: [
            {
                name: "任務細項-1",
                completed_num: 0,
                request_num: 1,
                unit: "單位"
            },
            {
                name: "任務細項-2",
                completed_num: 0,
                request_num: 1,
                unit: "單位"
            }, {
                name: "任務細項-3",
                completed_num: 0,
                request_num: 1,
                unit: "單位"
            }, {
                name: "任務細項-4",
                completed_num: 0,
                request_num: 1,
                unit: "單位"
            },
        ]
    })

    function clearMissionForm() {
        missionForm.value = {}
    }

    function editMission(id) {
    }
    function saveMission(id) {

    }
    function createMission() {
        clearMissionForm()
    }

    function generateID() {
        const missionLength = useDataStore().db_profile.missionLength
        missionLength = missionLength++
        return `m${missionLength}`
    }


    return {
    }
})