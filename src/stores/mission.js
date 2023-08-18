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

    const missionList = ref(["mission list data"])

    function sendItemToOption(item) {
        temp.value = item
    }

    function createMission(item) {
        missionList.value.push(item)
    }
    function updateMission(item) {
        const indexOfTargetMission = missionList.findIndex(mission => { mission.id = item.id })
        missionList.value[indexOfTargetMission] = item
    }
    function deleteMission(item) {
        const indexOfTargetMission = missionList.findIndex(mission => { mission.id = item.id })
        missionList.value.slice(indexOfTargetMission, 1)
    }
    function editMission(item) {
        temp.value = { ...item }
    }

    function completeMission(item) {
        const indexOfTargetMission = missionList.findIndex(mission => { mission.id = item.id })
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