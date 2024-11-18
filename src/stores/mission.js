import { defineStore } from "pinia";
import { ref } from "vue";

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

//? CONSTANTS
const DEFAULT = {
    id: "Mission ID",
    name: "Mission Name",
    description: "This's description.",
    compass: "Select Compass",
    type: "Select Type",
    level: "Select Level",
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
}
const SELECT = {
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

export const useMissionStore = defineStore('mission', {
    state: () => ({
        // init 
        temp,
        DEFAULT,
        SELECT
    }),
    getter: {
        // computed
    },
    action: {
        // function
    },
})