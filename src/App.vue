<script setup>
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
}

.theme {
	position: fixed;
	top: 0;
	right: 0;
	margin: 1rem;
	z-index: 9;
}

h2 {
	font-size: 1.5rem;
	font-weight: bold;
	text-align: left;
}

.border {
	position: relative;
}

.border::after {
	content: "";
	position: absolute;
	left: 0;
	top: 0;
	bottom: 0;
	right: 0;
	padding: 1px;
	border-radius: 8px;
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

@media (max-width: 540px) {
	main {
		flex-direction: column;
	}

	.container {
		padding: 2rem 15px;
	}

}
</style>
