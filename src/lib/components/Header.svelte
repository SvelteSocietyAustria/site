<script lang="ts">
	import { page } from '$app/stores';
</script>

<header>
    <div class="flex items-center">
        <img src="/logos/Logo-Svelte.svg" alt="Svelte Society Austria Logo" />
        <div class="logoFont"><span class="sr-only">S</span>velte Socitey Austria</div>
    </div>
	<nav>
		<a href="/" aria-current={'/' === $page.url.pathname ? 'page' : undefined}>home</a>
		<a href="/meetups" aria-current={'/meetups' === $page.url.pathname ? 'page' : undefined}
			>meetups</a
		>
		<a href="/chapters" aria-current={'/chapters' === $page.url.pathname ? 'page' : undefined}
			>chapters</a
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
