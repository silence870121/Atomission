import { defineStore } from "pinia";
import { onMounted, ref, watchEffect } from "vue";
import { useFirebaseStore } from '@stores/firebase';
import { useIndexedStore } from '@stores/indexed';

export const useDataStore = defineStore('data', () => {
    const isLoggedIn = false

    // const firebaseStore = useFirebaseStore()
    // const indexedStore = useIndexedStore()

    const dataStore = isLoggedIn ? useFirebaseStore() : useIndexedStore()
    console.log('Use', dataStore.storeID);



    const db_user = {
        db_profile: {},
        db_setting: {
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
    }

    const db_missions = {}
    const db_missionHistory = {}
    const db_compass = {}

    let missionList = ref([])
    // dataStore.getAllStoreData('mission')

    return {
        db_user,
        db_missions,
        db_missionHistory,
        db_compass,
    }
})