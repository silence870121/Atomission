import { defineStore } from "pinia";
import { ref } from "vue";

// db placeholder
const db_profile = {
    name: "user-name",
    level: 1,
    exp: 0,
}
const db_missions = {
    "missionId": {}
}
const db_missionHistory = {
    "missionId": []
}
const db_compass = {
    "compassId": {}
}
const db_setting = {
    isDeveloped: false,
    isDarkMode: false,
    isLinear: true,
    language: "zh-TW",
    mission: {
        scores: {
            "score_loop": 5,
            "score_once": 5,
            "score_daily": 10,
            "score_limit_time": 15,
            "score_weekly": 20,
            "score_series": 30,
            "score_labyrinth": 50,
        },
        showTip: true,
        showDesc: true,
        unit: ['常用單位', 'UNIT']
    },
    compass: {
        aptness: {
            "harder": 0.5,
            "hard": 0.75,
            "normal": 1,
            "easy": 1.25,
            "easier": 1.5,
        },
        activeRequest: {
            daily: 1,
            total: 3
        },
        isCardMode: true,
    },
    landmarks: {
        base: 30,
        ratio: {
            "easy": 1,
            "normal": 5,
            "hard": 15,
            "expert": 30,
            "master": 50
        },
        scoreLimit: 250
    },
}

let missions = ref([])

missions.value = Object.entries(db_missions).map(([key, data]) => { return data })



export const useDataStore = defineStore('data', {
    state: () => ({
        //? 初始化狀態
        //? user data
        missions
    }),
    getter: {
    },
    action: {
        //? function
    },
})