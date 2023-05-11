<script lang="ts">
	import { page } from '$app/stores';
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';

	const getTitle = () => {
		const firstUrlSegment = $page.url.pathname.split('/')[1] || 'Home';
		return (
			'Svelte Society Austria - ' +
			firstUrlSegment.slice(0, 1).toUpperCase() +
			firstUrlSegment.slice(1)
		);
	};

	const description =
		'Svelte Society Austria - We are a volunteer local network of Svelte fans that strive to promote Svelte and its ecosystem in Austria';
</script>

<svelte:head>
	<!-- Open Graph -->
	<meta
		property="og:title"
		content={getTitle()}
	/>
	<meta
		name="description"
		content={description}
	/>
	<meta
		property="og:type"
		content="website"
	/>
	<meta
		property="og:image"
		content="https://austria.sveltesociety.dev/images/og.png"
	/>
	<meta
		property="og:url"
		content={$page.url.href}
	/>
	<meta
		property="og:image:width"
		content="1282"
	/>
	<meta
		property="og:image:height"
		content="722"
	/>
	<meta
		property="og:site_name"
		content={$page.url.origin}
	/>

	<!-- Open Graph : Twitter-->
	<meta
		name="twitter:card"
		content="summary_large_image"
	/>
	<meta
		name="twitter:title"
		content={getTitle()}
	/>
	<meta
		name="twitter:description"
		content={description}
	/>
	<meta
		name="twitter:image"
		content="https://austria.sveltesociety.dev/images/og.png"
	/>
	<meta
		property="twitter:url"
		content={$page.url.href}
	/>
	<meta
		property="twitter:domain"
		content={$page.url.origin}
	/>
</svelte:head>

<Header />

<main>
	<slot />
</main>

<Footer />

<style>
	main {
		padding: 2rem;
		margin-bottom: 3.5rem;
		max-width: 800px;
		margin: 2rem auto;
	}
</style>
