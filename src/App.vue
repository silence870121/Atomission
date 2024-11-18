<script setup>
import { onMounted } from 'vue';
import { useThemeStore } from '@stores/theme';
const theme = useThemeStore()
onMounted(() => {
	theme.renderThemeStyle()
})
</script>
<template>
	<Header />
	<main>
		<router-view />
	</main>
</template>

<style>
main {
	flex: 1;
	width: 100%;
	display: flex;
	flex-direction: row;
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
	--padding: 1px;
	content: "";
	position: absolute;
	z-index: -1;
	inset: calc(var(--padding) * -1);
	padding: calc(var(--padding) * 1.1);
	border-radius: calc(var(--border-radius-md) + var(--padding));
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
</style>
