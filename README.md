# Atomission

## 概述
[**Atomission**](#) 是一個自動化任務管理系統，用於協助使用者達成訂定的目標或計畫。在 Atomission 這套系統中，使用者可以自行設計並建立各種目標和任務系統，系統會依據使用者的設定自動為使用者安排任務。完成任務可以獲得相應的積分並藉此累積目標進度。

## 功能
#### Atomission 主要具有以下功能：

* [任務管理](#)：使用者可以瀏覽、新增、編輯或刪除任務。任務包含名稱與項目，所有項目完成才算完成任務
* [里程碑]()：使用者可以建立目標並設定里程碑，透過積分機制來累積目標進度。
* [積分機制]()：使用者可以透過完成任務來獲得積分，任務的難易度以及對於達成目標的容易程度皆會影響獲得的積分多寡。

#### 預計新增功能：
* [後台管理]()：系統將建立後台管理介面，讓使用者能夠更快速的處理大量的任務與目標。
* [任務分享]()：使用者可以將選定的任務分享或指派給其他使用者。
* [使用者群組]()：使用者可以建立群組，將任務發送給群組中的所有使用者。
* [任務模板]()：系統將提供預設的任務模板，讓使用者可以快速建立自己的任務系統。使用者也能夠將設計好的任務模板上傳至資料庫，分享給所有的使用者。
* [目標分支]：使用者可以在目標下建立次要目標

## 技術
Atomission 使用以下技術：

前端：系統使用 Vue 3.JS 框架構建前端界面，提供使用者友好的操作體驗。
- [Vue.JS](https://vuejs.org/) (3.2x)
- [Vite](https://vitejs.dev/) (4.2x)
- [Pinia](https://pinia.vuejs.org/) (2.1x)
- [vue-Router](https://router.vuejs.org/) (4.1x)
- Plugin
    - [Swiper](https://swiperjs.com/) (10.4x)
    - [vite-plugin-svg-icons](https://github.com/vbenjs/vite-plugin-svg-icons) (2.0x)
    - fast-glob (3.3x)

後端：系統使用 Node.js 搭建後端服務，通過 RESTful API 與前端進行介接。
- Node.js (佔位)

數據庫：系統使用 Firebase 實時數據庫作為主要數據存儲庫，並搭配 MySQL 關聯式數據庫作為補充數據庫。
- Firebase (雲端存儲)
- LocalStorage (本地存儲)
- MySQL (佔位)

## 環境要求
Atomission 運行需要以下環境：

* [Node.js](#環境要求) --- 或以上版本
* [Firebase](#環境要求) --- 帳號和數據庫訪問權限
* [MySQL](#環境要求) --- 或以上版本
* [Google Chrome](#環境要求) --- 或以上版本
* [Safari](#環境要求) --- 或以上版本
* [Microsoft Edge](#環境要求) --- 或以上版本



## Plugin Setup
- [vue-router](https://router.vuejs.org/) + [Pinia](https://pinia.vuejs.org/) + [Swiper](https://swiperjs.com/) + [vite-plugin-svg-icons](https://github.com/vbenjs/vite-plugin-svg-icons) + fast-glob + Firebase (planning)
## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur)
## 安裝和使用
使用 Atomission 系統需要進行以下步驟：

下載並安裝 Node.js 環境。

```bash
npm install
npm run dev
npm run build
```

線上運行：[Atomission.com](https://atomission.com)