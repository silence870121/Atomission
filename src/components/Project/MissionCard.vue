<script setup>

defineProps({
    mission: Object,

    id: String,
    title: String,
    type: String,
    branch: String,
    forTarget: String,
    description: String,
    level: Number,
    list: Array,
    tip: String,
    createDate: String,
    modifiedDate: String,


    isDesc: Boolean,
    isTarget: Boolean,
    isTip: Boolean,
})
</script>

<template>
    <div class="mission-card border">
        <h3 class="mission-title">{{ mission.title }}</h3>
        <p v-if="isDesc" class="mission-description">{{ mission.description }}</p>
        <p v-if="isTarget" class="mission-for-target">{{ mission.forTarget }}</p>
        <ul class="mission-list">
            <li v-for="item in mission.list">
                <p>
                    <span>-{{ item.content }}</span>
                    <span>[ <b>{{ item.done }}</b> <small>/ {{ item.requestNum }}</small> {{ item.unit }} ]</span>
                </p>
                <div class="mission-check">
                    <svg-icon v-show="item.done >= item.requestNum" name="complete" size="xs" />
                </div>
            </li>
        </ul>
        <div v-if="isTip && mission.tip" class="mission-tip"><svg-icon name="info" size="xs" />
            <p>{{ mission.tip }}</p>
        </div>
    </div>
</template>

<style scoped>
.mission-card {
    width: 360px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding: 0 1.5rem;
    cursor: pointer;
    user-select: none;
}

.mission-card h3 {
    width: 100%;
    font-size: 1.25rem;
    font-weight: bold;
    padding-top: 1rem;
    padding-bottom: 0.75rem;
    border-bottom: 1px solid;
    border-image: var(--border-center-row) 1;
}

.mission-description {
    padding: 1rem 0;
    line-height: 1.5;
}

.mission-for-target {
    border-radius: 1rem;
    color: var(--on-primary-color);
    background-color: var(--on-surface-color);
    font-size: 0.5rem;
    padding: 0.25rem 1rem;
}

.mission-level {
    display: flex;
    gap: 0.5rem;
    padding: 0.5rem 0;
}

.mission-level li div {
    border-radius: 1rem;
    width: 1rem;
    height: 0.25rem;
    background-color: var(--surface-variant-color);
}

.mission-level li .light {
    background-color: var(--primary-color);
}

.mission-list {
    width: 100%;
    padding: 1rem 0;
}

.mission-list b {
    font-weight: bold;
    color: var(--primary-color);
}

.mission-list small {
    font-size: 0.75rem;
}

.mission-list li {
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
    flex-wrap: nowrap;
    padding: 0.375rem 0;
    white-space: nowrap;
}

.mission-list li p {
    flex: 1;
    color: var(--on-surface-color);
    display: flex;
    justify-content: space-between;
}

.mission-check {
    width: 1.25rem;
    height: 1.25rem;
}

.mission-tip {
    width: 100%;
    display: flex;
    gap: 0.25rem;
    padding-top: 0.5rem;
    padding-bottom: 1.5rem;
    border-top: 1px solid var(--surface-variant-color);
    /* border-image: var(--border-center-row) 1; */
}

.mission-tip p {
    flex: 1;
    margin-top: -0.125rem;
    line-height: 1.25rem;
    text-align: left;
}

@media (max-width: 540px) {
    .mission-card {
        width: 100%;
    }
}
</style>