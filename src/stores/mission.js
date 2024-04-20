import { defineStore } from "pinia";
import { ref } from "vue";

export const useMissionStore = defineStore('mission', () => {
    //? Mission's setting temp
    const temp = ref({
        id: "任務編號(ID) ",
        title: "任務名稱",
        type: "任務類型",
        branch: "任務所屬路線",
        fromTarget: "任務所屬目標",
        description: "任務描述",
        difficulty: "任務難度",
        creationDate: "建立日期",
        editDate: "修改日期",
        itemList: [
            {
                itemId: "項目 1",
                content: "任務項目",
                unit: "單位",
                requiredNum: "數量"
            },
            {
                itemId: "項目 2",
                content: "任務項目",
                unit: "單位",
                requiredNum: "數量"
            },
            {
                itemId: "項目 3",
                content: "任務項目",
                unit: "單位",
                requiredNum: "數量"
            },
            {
                itemId: "項目 4",
                content: "任務項目",
                unit: "單位",
                requiredNum: "數量"
            }
        ]
    })

    //? show mission's detail
    const showTarget = ref(true)
    const showTip = ref(true)
    const showDesc = ref(true)

    const data = ref([{
        id: "m0001",
        title: "First mission",
        type: "Daily",
        branch: "Main",
        forTarget: "First target",
        description: "This is the first mission,This is the first mission, ",
        level: 5,
        list: [
            {
                content: "Mission Item 1",
                done: 10,
                requestNum: 50,
                unit: "unit"
            }, {
                content: "Mission Item 2",
                done: 30,
                requestNum: 50,
                unit: "unit"
            }
        ],
        createDate: "2023-01-01",
        modifiedDate: "2023-01-31",
        tip: "This is a daily mission. "
    }, {
        id: "m0002",
        title: "Second mission",
        type: "Weekly",
        branch: "Main",
        forTarget: "First target",
        description: "This is the Second mission.This is the first mission.This is the first mission.",
        level: 3,
        list: [
            {
                content: "Mission Item 1",
                done: 15,
                requestNum: 30,
                unit: "unit"
            }, {
                content: "Mission Item 2",
                done: 35,
                requestNum: 30,
                unit: "unit"
            }, {
                content: "Mission Item 3",
                done: 55,
                requestNum: 30,
                unit: "unit"
            }
        ],
        createDate: "2023-02-01",
        modifiedDate: "2023-02-28",
        tip: ""
    }, {
        id: "m0003",
        title: "Third mission",
        type: "Stage",
        branch: "Main",
        forTarget: "First target",
        description: "This is the first mission",
        level: 1,
        list: [
            {
                content: "Mission Item 1",
                done: 5,
                requestNum: 10,
                unit: "unit"
            }, {
                content: "Mission Item 2",
                done: 15,
                requestNum: 10,
                unit: "unit"
            }, {
                content: "Mission Item 3",
                done: 25,
                requestNum: 10,
                unit: "unit"
            }, {
                content: "Mission Item 4",
                done: 35,
                requestNum: 10,
                unit: "unit"
            },
        ],
        createDate: "2023-03-01",
        modifiedDate: "2023-03-31",
        tip: "This is a daily mission. You must complete the mission, or else you will lose this mission score."
    }, {
        id: "m0004",
        title: "Forth mission",
        type: "Stage",
        branch: "Main",
        forTarget: "First target",
        description: "This is the first mission",
        level: 1,
        list: [
            {
                content: "Mission Item 1",
                done: 5,
                requestNum: 10,
                unit: "unit"
            }
        ],
        createDate: "2023-03-01",
        modifiedDate: "2023-03-31",
        tip: "This is a daily mission. You must complete the mission, or else you will lose this mission score."
    }, {
        id: "m0001",
        title: "First mission",
        type: "Daily",
        branch: "Main",
        forTarget: "First target",
        description: "This is the first mission,This is the first mission, ",
        level: 5,
        list: [
            {
                content: "Mission Item 1",
                done: 10,
                requestNum: 50,
                unit: "unit"
            }, {
                content: "Mission Item 2",
                done: 30,
                requestNum: 50,
                unit: "unit"
            }
        ],
        createDate: "2023-01-01",
        modifiedDate: "2023-01-31",
        tip: "This is a daily mission. "
    }, {
        id: "m0002",
        title: "Second mission",
        type: "Weekly",
        branch: "Main",
        forTarget: "First target",
        description: "This is the Second mission.This is the first mission.This is the first mission.",
        level: 3,
        list: [
            {
                content: "Mission Item 1",
                done: 15,
                requestNum: 30,
                unit: "unit"
            }, {
                content: "Mission Item 2",
                done: 35,
                requestNum: 30,
                unit: "unit"
            }, {
                content: "Mission Item 3",
                done: 55,
                requestNum: 30,
                unit: "unit"
            }
        ],
        createDate: "2023-02-01",
        modifiedDate: "2023-02-28",
        tip: ""
    }, {
        id: "m0003",
        title: "Third mission",
        type: "Stage",
        branch: "Main",
        forTarget: "First target",
        description: "This is the first mission",
        level: 1,
        list: [
            {
                content: "Mission Item 1",
                done: 5,
                requestNum: 10,
                unit: "unit"
            }, {
                content: "Mission Item 2",
                done: 15,
                requestNum: 10,
                unit: "unit"
            }, {
                content: "Mission Item 3",
                done: 25,
                requestNum: 10,
                unit: "unit"
            }, {
                content: "Mission Item 4",
                done: 35,
                requestNum: 10,
                unit: "unit"
            },
        ],
        createDate: "2023-03-01",
        modifiedDate: "2023-03-31",
        tip: "This is a daily mission. You must complete the mission, or else you will lose this mission score."
    }, {
        id: "m0004",
        title: "Forth mission",
        type: "Stage",
        branch: "Main",
        forTarget: "First target",
        description: "This is the first mission",
        level: 1,
        list: [
            {
                content: "Mission Item 1",
                done: 5,
                requestNum: 10,
                unit: "unit"
            }
        ],
        createDate: "2023-03-01",
        modifiedDate: "2023-03-31",
        tip: "This is a daily mission. You must complete the mission, or else you will lose this mission score."
    }])

    function sendItemToOption(item) {
        temp.value = item
    }

    function createMission(item) {
        data.value.push(item)
    }
    function updateMission(item) {
        const indexOfTargetMission = data.findIndex(mission => { mission.id = item.id })
        data.value[indexOfTargetMission] = item
    }
    function deleteMission(item) {
        const indexOfTargetMission = data.findIndex(mission => { mission.id = item.id })
        data.value.slice(indexOfTargetMission, 1)
    }
    function editMission(item) {
        temp.value = { ...item }
    }

    function completeMission(item) {
        const indexOfTargetMission = data.findIndex(mission => { mission.id = item.id })
        if (indexOfTargetMission) {
            updateMission(item)
        } else {
            createMission(item)
        }
    }


    //? API Methods
    async function fetchData(API) {
        await fetch(API, function (err, data) { return data })
    }


    return {
        data,
        temp,
        showTarget,
        showTip,
        showDesc,
        sendItemToOption,
        createMission,
        updateMission,
        deleteMission,
        editMission,
        completeMission
    }
})