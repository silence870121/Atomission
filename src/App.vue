<script setup>
import Navigation from './components/Router.vue'
</script>
<template>
	<Navigation />
	<main>
		<router-view />
	</main>
</template>

<style scoped>
main {
	height: 100%;
	flex: 1;
	padding: 2rem;
	display: flex;
	justify-content: start;
	align-items: center;
	flex-direction: column;
}

h2 {
	font-size: 1.5rem;
	font-weight: bold;
	text-align: left;
}

@media (max-width: 375px) {
	main {
		padding: 2rem 15px;
	}
}
</style>
