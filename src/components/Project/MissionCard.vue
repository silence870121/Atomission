<script setup>

import { useMissionStore } from '@stores/mission';
const store = useMissionStore()
store.showTip = true
defineProps({
    mission: {
        type: Object,
        default: {
            id: 'm000',
            title: "Mission",
            type: "Daily",
            branch: "Main",
            forTarget: "None",
            description: "",
            level: 0,
            list: [{
                content: "Mission Item",
                done: 0,
                requestNum: 99,
                unit: ""
            },
            {
                content: "Mission Item",
                done: 0,
                requestNum: 99,
                unit: ""
            },
            {
                content: "Mission Item",
                done: 0,
                requestNum: 99,
                unit: ""
            },
            {
                content: "Mission Item",
                done: 0,
                requestNum: 99,
                unit: ""
            },
            ],
            tip: "String",
            createDate: '0-0-0',
            modifiedDate: '0-0-0',
        }
    }
})
</script>

<template>
    <div class="mission-card border">
        <h3 class="mission-title">{{ mission.title }}</h3>
        <p v-show="store.showDesc" class="mission-description">{{ mission.description }}</p>
        <p v-show="store.showTarget" class="mission-for-target">{{ mission.forTarget }}</p>
        <ul class="mission-list">
            <li v-for="item in  mission.list ">
                <p>
                    <span>-{{ item.content }}</span>
                    <span>[ <b>{{ item.done }}</b> <small>/ {{ item.requestNum }}</small> {{ item.unit }} ]</span>
                </p>
                <div class="mission-check">
                    <svg-icon v-show="item.done >= item.requestNum && item.done != 0" name="complete" size="xs" />
                </div>
            </li>
            <li v-show="mission.list.length < 4" class="disabled">
                <p>
                    <span>-none</span>
                    <span>[ <b>0</b> <small>/0</small> ]</span>
                </p>
                <div class="mission-check"> </div>
            </li>
        </ul>
        <div class="mission-tip">
            <svg-icon name="info" size="xs" v-show="store.showTip && mission.tip" />
            <p v-show="store.showTip && mission.tip">
                {{ mission.tip }}
            </p>
        </div>
        <svg-icon class="mission-pattern" name="pattern" />
    </div>
</template>

<style scoped>
.mission-card {
    width: 360px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 1rem;
    padding: 0 1.5rem;
    cursor: pointer;
    user-select: none;
    background: var(--surface);
}

.mission-pattern {
    position: absolute;
    z-index: -1;
    top: 0;
    right: 0;
    width: 420px;
    height: 420px;
}

.mission-title {
    width: 100%;
    font-size: 1.25rem;
    font-weight: 600;
    padding-top: 2rem;
    padding-bottom: 1rem;
    border-image: var(--line-row) 1;
    border-bottom: 1px solid;
}

.mission-description {
    min-height: 2rem;
    padding: 1rem;
    padding-top: 0;
    line-height: 1.5;
}

.mission-for-target {
    color: var(--label-tertiary-color);
    padding-top: 1rem;
}

.mission-list {
    width: 100%;
}

.mission-list li {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.25rem;
}

.mission-list li p {
    flex: 1;
    padding: 0.5rem 0;
    display: flex;
    justify-content: space-between;
}

.mission-list li.disabled {
    color: var(--label-quaternary-color);
}

.mission-check {
    width: 1.25rem;
    height: 1.25rem;
}

.mission-tip {
    position: relative;
    width: 100%;
    /* min-height: 5rem; */
    color: var(--label-secondary-color);
    display: flex;
    padding-top: 1rem;
    padding-bottom: 2rem;
}

.mission-tip p {
    flex: 1;
    text-align: left;
    font-weight: 600;
    padding: 0;
    padding-left: 1rem;
    min-height: 2rem;
}

.mission-tip svg {
    position: absolute;
    top: 1rem;
    left: 0;
    transform: translateX(-25%);
}

@media (max-width: 540px) {
    .mission-card {
        max-width: 375px;
        width: 100%;
    }
}
</style>