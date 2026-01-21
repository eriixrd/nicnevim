<script lang="ts">
	import "../app.css";
	const favicon = "/favicon/favicon.svg";
</script>

<svelte:head>
	<title>Program pro sběratele zdarma!</title>
	<link rel="icon" href={favicon} />
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link
		rel="preconnect"
		href="https://fonts.gstatic.com"
		crossorigin="anonymous"
	/>
	<link
		href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Paytone+One&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<main class="bg-[#000000] font-inter">
	<slot />
</main>

<style>
	:global(html),
	:global(body) {
		background-color: #000000 !important;
		margin: 0;
		padding: 0;
	}
	:global(*) {
		font-family: "Inter", sans-serif !important;
	}
</style>
