import { defineStore } from "pinia";
import { ref } from "vue";

let store = ref({})

/**
 * 
 * @param {String} id 
 */
function getLocalStorage(id) {
    let data = window.localStorage.getItem(id)
    store.value = JSON.parse(data);
}
function setLocalStorage(params) {
    let data = JSON.stringify(params)
    store.value = window.localStorage.setItem("Atomissions", data)
}

export const useLocalStorageStore = defineStore('localStorage', {

    state: () => ({
        // init 
    }),
    getter: {
        // computed
    },
    action: {
        // function
    },
})