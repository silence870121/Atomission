import { defineStore } from "pinia";
import { ref } from "vue";

export const useMissionStore = defineStore('mission', () => {
    //? Mission's setting temp
    const temp = ref({
        id: "任務編號(ID) ",
        title: "任務名稱",
        type: "任務類型",
        branch: "任務所屬路線",
        description: "任務描述",
        difficulty: "任務難度",
        creationDate: "建立日期",
        editDate: "修改日期",
        missionItems: [
            {
                itemId: "項目 1",
                content: "任務項目",
                unit: "單位",
                requiredNum: "要求數量"
            },
            {
                itemId: "項目 2",
                content: "任務項目",
                unit: "單位",
                requiredNum: "要求數量"
            },
            {
                itemId: "項目 3",
                content: "任務項目",
                unit: "單位",
                requiredNum: "要求數量"
            },
            {
                itemId: "項目 4",
                content: "任務項目",
                unit: "單位",
                requiredNum: "要求數量"
            }
        ]
    })
    const showTarget = ref(true)
    const showTip = ref(true)
    const showDesc = ref(true)

    function sendItemToOption(item) {
        temp.value = item
    }
    return {
        temp,
        showTarget,
        showTip,
        showDesc,
        sendItemToOption
    }
})