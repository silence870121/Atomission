<script setup>

</script>

<template>
    <div class="header">
        <div class="app-bar">
            <div class="theme">
                <ThemeBtn />
            </div>
            <div class="app-main">
                <div class="app-search border">
                    <input type="text">
                    <button>
                        <svg-icon name="setting" size="sm" />
                    </button>
                </div>
            </div>
            <button class="app-btn"><svg-icon name="setting" size="sm" /></button>
            <button class="app-btn"><svg-icon name="setting" size="sm" /></button>
            <button class="app-btn user">A</button>
        </div>
        <ul class="app-filter">

            <li>aaa</li>
            <li>bbb</li>
            <li>ccc</li>

        </ul>
    </div>
</template>

<style scoped>
.header {
    width: 100%;
    display: flex;
    flex-direction: column;
    border-image: var(--line-row) 1;
    border-bottom: 1px solid;
}

.app-bar {
    display: flex;
    flex-direction: row;
    padding: 0.5rem 2rem;
    gap: 1.5rem;
    align-items: center;
    justify-content: center;
}

.app-main {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
}

.app-search {
    width: 50%;
    max-width: 50rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.25rem;
    padding: 0.25rem;
    background: var(--action);
    border-radius: 2rem;
}

.app-search.border::after {
    border-radius: 2rem;
    background: var(--action);
}

.app-search input {
    flex: 1;
    padding: 0 1rem;
    height: 2rem;
    font-size: 1.25rem;
    color: var(--label-secondary-color);
    /* background-color: #000; */
}

.app-search button {
    display: flex;
    width: 2rem;
    height: 2rem;
    align-items: center;
    justify-content: center;
    padding: 0.25rem;
    position: relative;
}

.app-search button::after {
    content: "";
    position: absolute;
    z-index: -1;
    left: -1px;
    top: -1px;
    bottom: -1px;
    right: -1px;
    padding: 2px;
    border-radius: 2rem;
    background: var(--active);
    --m-o: content-box, padding-box;
    --m-i: linear-gradient(white, black);
    mask-image: var(--m-i), var(--m-i);
    -webkit-mask-image: var(--m-i), var(--m-i);
    mask-origin: var(--m-o);
    -webkit-mask-origin: var(--m-o);
    mask-clip: var(--m-o);
    -webkit-mask-clip: var(--m-o);
    mask-composite: exclude;
    -webkit-mask-composite: destination-out;
}

.app-btn {
    width: 2rem;
    height: 2rem;
    border-radius: 2rem;
    background: var(--wireframe-surface-variant-color);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.25rem;
    padding: 0.25rem;
}

.app-btn.user {
    background: var(--active);
    /* padding: 0; */
    padding-bottom: 0.625rem;
}

.app-filter {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1rem;
    padding: 1.5rem;
    padding-bottom: 0;
    margin-bottom: -1px;
    background: var(--nav-rim);
}

.app-filter li {
    padding: 0 1rem;
    padding-bottom: 0.75rem;
    position: relative;
    color: var(--label-secondary-color);
}



.app-filter li::after {
    z-index: -1;
    content: '';
    position: absolute;
    width: 5rem;
    height: 2rem;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    background: var(--glow-light);
    /* background: #000; */
    border-image: var(--glow-light) 1;
    border-bottom: 1px solid;
    opacity: 0;
    transition: all 200ms ease-in-out;
}

.app-filter li:hover {
    transition: all 200ms ease-in-out;
    color: var(--label-primary-color);
    z-index: 1;
}

.app-filter li:hover::after {
    opacity: 1;
}
</style>