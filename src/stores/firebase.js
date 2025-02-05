import { defineStore } from "pinia";

export const useFirebaseStore = defineStore('firebase', () => {
    const storeID = 'firebase'
    return {
        storeID
    }
})