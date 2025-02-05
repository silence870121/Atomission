import { defineStore } from "pinia";
import { ref, watchEffect } from "vue";

export const useIndexedStore = defineStore('indexedDatabase', () => {
    const storeID = 'indexedDatabase'

    let db = ref()
    //TODO initIDB

    const initIDB = new Promise((resolve, reject) => {
        const request = window.indexedDB.open('atomission', 1)
        request.onerror = (err) => { reject(err.target.result) }
        request.onsuccess = (res) => {
            db.value = res.result
            resolve(res.target.result)
        }
        request.onupgradeneeded = (res) => {
            db.value = res.result
            resolve(res.target.result)
        }
    })



    /**
     * 將資料新增到指定的物件存檔
     * @param {string} url objectStore name
     * @param {object} data data item
     */
    async function addStoreData(url, data) {
        const db = await initIDB;
        return await new Promise((resolve, reject) => {
            const transaction = db.value.transaction(url, 'readwrite');
            const objectStore = transaction.objectStore(url);
            let Req = objectStore.add(data);
            Req.onerror = (e) => { reject(e.target.result); };
            Req.onsuccess = (e) => { resolve(e.target.result); };
        });
    }

    /**
     * 取得物件存檔中的單筆指定資料
     * @param {string} url objectStore name
     * @param {string} id key of the data
     */
    async function getStoreData(url, id) {
        const db = await initIDB;
        return await new Promise((resolve, reject) => {
            const transaction = db.transaction(url);
            const objectStore = transaction.objectStore(url);
            let Req = objectStore.get(id);
            Req.onerror = (e) => { reject(e.target.result); };
            Req.onsuccess = (e) => { resolve(e.target.result); };
        });
    }


    //TODO getAllStoreData
    /**
     * 取得物件存檔中的所有資料
     * @param {string} url objectStore name  
     */
    async function getAllStoreData(url) {
        const db = await initIDB;
        return await new Promise((resolve, reject) => {
            const transaction = db.transaction(url);
            const objectStore = transaction.objectStore(url);
            let Req = objectStore.getAll();
            Req.onerror = (e) => { reject(e.target.result); };
            Req.onsuccess = (e) => { resolve(e.target.result); };
        });
    }


    /**
     * 更新物件存檔中的指定資料
     * @param {string} url objectStore name
     * @param {object} data updated data
     */
    async function updateStoreData(url, data) {
        const db = await initIDB;
        return await new Promise((resolve, reject) => {
            const transaction = db.value.transaction(url, 'readwrite')
            const objectStore = transaction.objectStore(url)
            let Req = objectStore.put(data)
            Req.onerror = (e) => { reject(e.target.result); };
            Req.onsuccess = (e) => { resolve(e.target.result); };
        });
    }
    /**
     * 刪除物件存檔中的指定資料
     * @param {*} url objectStore name
     * @param {*} id key of the data
     */
    async function removeStoreData(url, id) {
        const db = await initIDB;
        return await new Promise((resolve, reject) => {
            const transaction = db.value.transaction(url, 'readwrite')
            const objectStore = transaction.objectStore(url)
            let Req = objectStore.delete(id)
            Req.onerror = (e) => { reject(e.target.result); };
            Req.onsuccess = (e) => { resolve(e.target.result); };
        });
    }

    // TODO: TEST
    // *----------------*
    // *----- TEST -----*
    // *----------------*




    return {
        storeID,
        addStoreData,
        getStoreData,
        getAllStoreData,
        updateStoreData,
        removeStoreData,
    }
})