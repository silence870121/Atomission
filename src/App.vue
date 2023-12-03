<script setup>
import { onMounted } from 'vue';
import { useThemeStore } from '@/stores/theme';
const theme = useThemeStore()
onMounted(() => {
	theme.renderThemeStyle()
})
</script>
<template>
	<main>
		<router-view />
	</main>
	<div class="theme">
		<ThemeBtn />
	</div>
</template>

<style>
main {
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: row;
}

.container {
	flex: 1;
	padding: 2rem;
	gap: 2rem;
	display: flex;
	flex-direction: row;
	align-items: flex-start;
	justify-content: space-between;
}

.theme {
	position: fixed;
	top: 0;
	right: 0;
	margin: 0 1rem;
	height: 44px;
	display: flex;
	align-items: center;
	z-index: 9999;
}

h2 {
	font-size: 1.5rem;
	font-weight: bold;
	text-align: left;
}

.border {
	position: relative;
	border-radius: var(--border-radius-md);
}

.border::after {
	content: "";
	position: absolute;
	z-index: -1;
	left: -1px;
	top: -1px;
	bottom: -1px;
	right: -1px;
	padding: 1px;
	border-radius: var(--border-radius-md);
	background: var(--border);
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

.close-btn {
	position: absolute;
	top: 0;
	right: 0;
	padding: 0;
	margin: 0.5rem;
}

@media (max-width: 540px) {
	main {
		flex-direction: column;
	}

	.container {
		margin: 0;
		margin-top: 44px;
		padding: 2rem 15px;
		flex-direction: column;
	}

}
</style>
