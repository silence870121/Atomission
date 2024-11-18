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
        <div class="mission-marked">
            <i v-if="mission.isMarked" class="i-carbon:bookmark-filled"></i>
            <i v-else class="i-carbon:bookmark"></i>
        </div>
        <p v-show="store.showDesc" class="mission-description">{{ mission.description }}</p>
        <p v-show="store.showTarget" class="mission-tag">{{ mission.forTarget }}</p>
        <ul class="mission-list">
            <li v-for="item in mission.list ">
                <p>
                    <span>-{{ item.content }}</span>
                    <span><b>{{ item.done }}</b> <small>/ {{ item.requestNum }}</small> {{ item.unit }} </span>
                </p>
                <div class="mission-check">
                    <i v-show="item.done >= item.requestNum && item.done != 0" class="i-carbon:checkmark-outline" />
                </div>
            </li>
        </ul>
        <div class="mission-tip">
            <i v-show="store.showTip && mission.tip" class="i-carbon:warning-diamond" />
            <p v-show="store.showTip && mission.tip">
                {{ mission.tip }}
            </p>
        </div>
        <div class="mission-pattern">
            <svg-icon name="pattern" />
        </div>
    </div>
</template>

<style scoped>
.mission-card {
    width: 100%;
    min-width: 240px;
    max-width: 280px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    cursor: pointer;
    user-select: none;
    background: var(--surface);
    position: relative;
    line-height: 1.25;
}

.mission-pattern {
    position: absolute;
    z-index: -1;
    inset: 0;
    overflow: hidden;
    border-radius: var(--border-radius-md);
}

.mission-pattern svg {
    position: absolute;
    z-index: -1;
    top: -25%;
    right: 0;
    width: 25rem;
    height: 25rem;

}

.mission-title {
    width: 100%;
    font-size: 1.25rem;
    font-weight: 600;
    text-align: center;
    padding: 1rem;
    padding-top: 2rem;
    border-image: var(--line-row) 1;
    border-bottom: 1px solid;
    text-transform: capitalize;
}

.mission-marked {
    color: var(--label-secondary-color);
    font-size: 1.25rem;
    position: absolute;
    top: 1rem;
    left: 1rem;
    opacity: 0.5;
}

.mission-description {
    min-height: 2rem;
    padding: 1rem 1.5rem;
    padding-top: 0.5rem;
    text-indent: 0.5rem;
}

.mission-tag {
    color: var(--label-tertiary-color);
}

.mission-list {
    width: 100%;
    padding: 1rem;
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
    --size: 1rem;
    width: var(--size);
    height: var(--size);
    color: lightgreen;
}

.mission-tip {
    width: 100%;
    color: var(--label-secondary-color);
    color: lightcoral;
    padding: 1rem;
    padding-left: 0.5rem;
    padding-bottom: 2rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

.mission-tip i {
    font-size: 1.5rem;
}

.mission-tip p {
    flex: 1;
    text-transform: lowercase;
}

.mission-tip p::first-letter {
    text-transform: uppercase;
}
</style>