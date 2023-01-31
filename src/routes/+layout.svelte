<script lang="ts">
	import { page } from '$app/stores';
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';

	const getTitle = () => {
		const firstUrlSegment = $page.url.pathname.split('/')[1] || 'Home';
		return firstUrlSegment.slice(0, 1).toUpperCase() + firstUrlSegment.slice(1);
	};
</script>

<svelte:head>
	<meta property="og:title" content="Svelte Society Austria - {getTitle()}" />
	<meta property="og:url" content={$page.url.href} />
</svelte:head>

<Header />

<main>
	<slot />
</main>

<Footer />

<style>
	main {
		padding: 1rem;
		margin-bottom: 3.5rem;
	}
</style>
