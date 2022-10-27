<script lang="ts">
	import { afterNavigate } from '$app/navigation';
	import { page } from '$app/stores';
	import { pageTitle } from '../stores/pageTitle';

	afterNavigate((route: any) => {
		const prefix = 'Svelte Society Austria';
		const routeFound = routes.find((c) => c.href === route.to.url.pathname);
		if (routeFound) {
			$pageTitle = `${prefix} - ${routeFound.name}`;
		} else {
			$pageTitle = prefix;
		}
	});

	const routes: { name: string; href: string }[] = [
		{ name: 'Home', href: '/' },
		{ name: 'Meetups', href: '/meetups' },
		{ name: 'Chapters', href: '/chapters' }
	];
</script>

<svelte:head>
	<title>{$pageTitle}</title>
</svelte:head>

<header>
	<div class="flex items-center">
		<img src="/logos/Logo-Svelte.svg" alt="Svelte Society Austria Logo" />
		<div class="logoFont"><span class="sr-only">S</span>velte Socitey Austria</div>
	</div>
	<nav>
		{#each routes as { name, href }}
			<a {href} aria-current={href === $page.url.pathname ? 'page' : undefined}>{name}</a>
		{/each}
	</nav>
</header>

<style>
	header {
		background: var(--color-black-light);
		padding: 0.5rem 1rem 0;
		display: flex;
		flex-direction: column;
		align-items: center;
		border-bottom: 1px solid var(--color-red);
	}
	.logoFont {
		font-size: 1.5rem;
	}
	nav {
		display: flex;
		margin-top: 1rem;
	}
	a {
		padding: 0.5rem 1rem;
	}
	[aria-current] {
		color: var(--color-white);
		background-color: var(--color-red);
	}
</style>
