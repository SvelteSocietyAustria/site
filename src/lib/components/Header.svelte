<script lang="ts">
	import { page } from '$app/stores';
</script>

<header>
	<img src="/logos/Logo-Dark-Tagline.svg" alt="Logo Svelte Society Vienna" />
	<nav>
		<a href="/" aria-current={'/' === $page.url.pathname ? 'page' : undefined}>home</a>
		<a href="/svienna" aria-current={'/svienna' === $page.url.pathname ? 'page' : undefined}
			>svienna - svelte society vienna</a
		>
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
