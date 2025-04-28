import { defineStore } from "pinia";
import { ref, watchEffect } from "vue";

export const useIndexedStore = defineStore('indexedDatabase', () => {
    const storeID = 'indexedDatabase'

    // TODO: init indexedDB
    // *--------------------------*
    // *----- init indexedDB -----*
    // *--------------------------*
    const initIDB = new Promise((resolve, reject) => {
        const request = window.indexedDB.open('atomission', 4)
        request.onerror = (err) => { reject(err.target.result) }
        request.onsuccess = (res) => {
            console.log('indexedDB is ready');
            resolve(res.target.result)
        }
        request.onupgradeneeded = (res) => {
            console.log('indexedDB is upgrading');
            initObjectStore(res)
            resolve(res.target.result)
        }
    })
    function initObjectStore(res) {
        const db = res.target.result
        dbDirectory.forEach(store => {
            if (!db.objectStoreNames.contains(store.name)) { db.createObjectStore(store.name, { keyPath: store.keyPath }) }
            checkObjectStore(res.target, store)
        })
    }
    function checkObjectStore(db, store) {
        if (!store.index) return;
        const objectStore = db.transaction.objectStore(store.name)
        store.index.forEach(index => {
            if (objectStore.indexNames.contains(index.name)) return;
            objectStore.createIndex(index.name, index.name, { unique: index.unique })
        })
    }
    const dbDirectory = [
        {
            name: 'user', keyPath: 'user_id',
            index: [
                { name: 'username', unique: true },
                { name: 'email', unique: true },
            ]
        },
        { name: 'profile', keyPath: 'user_id', },
        { name: 'setting', keyPath: 'user_id', },
        {
            name: 'mission', keyPath: 'mission_id',
            index: [
                { name: 'compass', unique: false },
                { name: 'type', unique: false },
                { name: 'test', unique: false },
            ]
        },
        { name: 'missionHistory', keyPath: 'mission_id', },
        {
            name: 'compass', keyPath: 'compass_id',
            index: [
                { name: 'stage', unique: false },
                { name: 'aptness', unique: false },
            ]
        },
    ]
    // *------------------------------*
    // *----- indexedDB function -----*
    // *------------------------------*
    /**
     * 將資料新增到指定的物件存檔
     * @param {string} url objectStore name
     * @param {object} data data item
     */
    async function addStoreData(url, data) {
        const db = await initIDB;
        return await new Promise((resolve, reject) => {
            const transaction = db.transaction(url, 'readwrite');
            const objectStore = transaction.objectStore(url);
            let Req = objectStore.add(data);
            Req.onerror = (e) => { reject(e.target.error); };
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
            Req.onerror = (e) => { reject(e.target.error); };
            Req.onsuccess = (e) => { resolve(e.target.result); };
        });
    }
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
            Req.onerror = (e) => { reject(e.target.error); };
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
            const transaction = db.transaction(url, 'readwrite')
            const objectStore = transaction.objectStore(url)
            let Req = objectStore.put(data)
            Req.onerror = (e) => { reject(e.target.error); };
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
            const transaction = db.transaction(url, 'readwrite')
            const objectStore = transaction.objectStore(url)
            let Req = objectStore.delete(id)
            Req.onerror = (e) => { reject(e.target.error); };
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