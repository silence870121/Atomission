<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { useSettingStore } from "@/stores/setting";
const settingStore = useSettingStore()

/**
 * Settings Index
 */
let settingGroup = ref([
    {
        groupName: "group 1",
        settingId: "group1",
        list: [
            {
                label: "label 1",
                value: "value",
                inputType: "text",
                info: "info",
                notes: "Lorem ipsum dolor sit amet consectetur. Et id orci nulla sit habitasse tristique porttitor orci. "
            }, {
                label: "label 2",
                value: "value",
                inputType: "number",
                info: "info",
                notes: "Lorem ipsum dolor sit amet consectetur. Et id orci nulla sit habitasse tristique porttitor orci. "
            }, {
                label: "label 3",
                value: "value",
                inputType: "select",
                info: "info",
                notes: "Lorem ipsum dolor sit amet consectetur. Et id orci nulla sit habitasse tristique porttitor orci. "
            }, {
                label: "label 4",
                value: "value",
                inputType: "textarea",
                info: "info",
                notes: "Lorem ipsum dolor sit amet consectetur. Et id orci nulla sit habitasse tristique porttitor orci. "
            }
        ]
    }, {
        groupName: "group 2",
        settingId: "group2",
        list: [
            {
                label: "label 1",
                value: "value",
                inputType: "text",
                info: "info",
                notes: "Lorem ipsum dolor sit amet consectetur. Et id orci nulla sit habitasse tristique porttitor orci. "
            }, {
                label: "label 2",
                value: "value",
                inputType: "number",
                info: "info",
                notes: "Lorem ipsum dolor sit amet consectetur. Et id orci nulla sit habitasse tristique porttitor orci. "
            }, {
                label: "label 3",
                value: "value",
                inputType: "select",
                info: "info",
                notes: "Lorem ipsum dolor sit amet consectetur. Et id orci nulla sit habitasse tristique porttitor orci. "
            }, {
                label: "label 4",
                value: "value",
                inputType: "textarea",
                info: "info",
                notes: "Lorem ipsum dolor sit amet consectetur. Et id orci nulla sit habitasse tristique porttitor orci. "
            }
        ]
    }, {
        groupName: "group 3",
        settingId: "group3",
        list: [
            {
                label: "label 1",
                value: "value",
                inputType: "text",
                info: "info",
                notes: "Lorem ipsum dolor sit amet consectetur. Et id orci nulla sit habitasse tristique porttitor orci. "
            }, {
                label: "label 2",
                value: "value",
                inputType: "number",
                info: "info",
                notes: "Lorem ipsum dolor sit amet consectetur. Et id orci nulla sit habitasse tristique porttitor orci. "
            }, {
                label: "label 3",
                value: "value",
                inputType: "select",
                info: "info",
                notes: "Lorem ipsum dolor sit amet consectetur. Et id orci nulla sit habitasse tristique porttitor orci. "
            }, {
                label: "label 4",
                value: "value",
                inputType: "textarea",
                info: "info",
                notes: "Lorem ipsum dolor sit amet consectetur. Et id orci nulla sit habitasse tristique porttitor orci. "
            }
        ]
    }, {
        groupName: "group 4",
        settingId: "group4",
        list: [
            {
                label: "label 1",
                value: "value",
                inputType: "text",
                info: "info",
                notes: "Lorem ipsum dolor sit amet consectetur. Et id orci nulla sit habitasse tristique porttitor orci. "
            }, {
                label: "label 2",
                value: "value",
                inputType: "number",
                info: "info",
                notes: "Lorem ipsum dolor sit amet consectetur. Et id orci nulla sit habitasse tristique porttitor orci. "
            }, {
                label: "label 3",
                value: "value",
                inputType: "select",
                info: "info",
                notes: "Lorem ipsum dolor sit amet consectetur. Et id orci nulla sit habitasse tristique porttitor orci. "
            }, {
                label: "label 4",
                value: "value",
                inputType: "textarea",
                info: "info",
                notes: "Lorem ipsum dolor sit amet consectetur. Et id orci nulla sit habitasse tristique porttitor orci. "
            }
        ]
    }
])
const debounce = (callback, delay = 500) => {
    let timer;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            callback(...args);
        }, delay);
    };
}
function scrollInto(id) {
    const View = document.getElementById(id)
    View.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

const highLightIndex = debounce((id) => {
    const index = document.querySelectorAll('.index-group')
    index.forEach(i => {
        i.classList.remove("active")
        if (i.getAttribute("for") == id) {
            i.classList.add("active")
            return
        }
    })
}, 300)
const option = {
    root: null,
    rootMargin: "-128px 0px -100% 0px",
    threshold: 0,
}
function isViewing(entries, owner) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const id = entry.target.getAttribute("id")
            highLightIndex(id)
            return
        }
    });
}
const observer = new IntersectionObserver(isViewing, option);
onMounted(() => {
    document.querySelectorAll(".setting-group").forEach((el) => {
        observer.observe(el);
    })
})
onUnmounted(() => {
    observer.disconnect();
});

</script>

<template>
    <Router />
    <div id="setting" class="setting">
        <div class="setting-content">
            <form v-for="form in settingGroup" :id="form.settingId" class="setting-group">
                <h2> {{ form.groupName }}</h2>
                <dl v-for="item in form.list">
                    <dt> <label for="input"> {{ item.label }}</label> </dt>
                    <dd class="input">
                        <input type="text" name="input" id="input" placeholder="setting">
                        <span class="info"> <svg-icon name="info" size="s" />
                            {{ item.info }}
                        </span>
                    </dd>
                    <dd class="note">
                        <p> {{ item.notes }}</p>
                    </dd>
                </dl>
            </form>
        </div>
        <aside class="index">
            <div v-for="form in settingGroup" class="index-group" :for="form.settingId">
                <h3 :for="form.settingId" @click="scrollInto(form.settingId)"> {{ form.groupName }}</h3>
                <ul>
                    <li v-for="i in form.list">{{ i.label }}</li>
                </ul>
            </div>

        </aside>
    </div>

</template>

<style scoped>
.setting {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: start;
    gap: 4rem;
    margin-top: -3.5rem;
}

.setting-content {
    max-width: 960px;
    padding-left: 2rem;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: start;
}

.setting-group {
    width: 100%;
}

.setting-group h2 {
    font-size: 1.5rem;
    padding-top: 2rem;
    padding-bottom: 1rem;
    border-image: var(--line-row) 1;
    border-bottom: 1px solid;
    margin-top: 3.5rem;
    margin-bottom: 1.5rem;
}

.setting-group dl {
    border-radius: 0.25rem;
    background: var(--surface);
    padding: 2rem;
    margin-bottom: 1rem;
}

.setting-group dt {
    font-size: 1.5rem;
    margin-bottom: 1rem;
}

.setting-group .input {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin: 1rem 0;
}

.setting-group .info {
    display: flex;
    align-items: center;
    gap: 0.25rem;
}

.setting-group svg {
    width: 1rem;
    height: 1rem;
}

.setting-group .note {
    margin: 1rem 0;
    color: var(--label-secondary-color);
}

.index {
    position: sticky;
    top: 3.5rem;
    padding: 2rem;
    padding-right: 3rem;
    border-image: var(--line-column) 1;
    border-left: 1px solid;
    color: var(--label-secondary-color);
}

.index-group ul {
    padding-top: 0.5rem;
    padding-left: 0.25rem;
    padding-bottom: 2rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

/* ? index style */
.index-group h3 {
    cursor: pointer;
}

.index-group.active h3 {
    position: relative;
    transition: all 200ms linear;
    color: var(--label-primary-color);
}

.index-group.active h3::after {
    --size: 0.5rem;
    position: absolute;
    content: "";
    top: 50%;
    left: 0;
    transform: translateX(calc(-100% - 4px)) translateY(-50%);
    width: var(--size);
    height: var(--size);
    background: var(--active-from-color);
    clip-path: polygon(50% 0, 100% 50%, 50% 100%, 0 50%);
}
</style>