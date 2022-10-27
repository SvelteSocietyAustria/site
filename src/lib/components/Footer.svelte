<script>
	import Discord from '$lib/icons/Discord.svelte';

	import Twitter from '$lib/icons/Twitter.svelte';
</script>

<footer>
	<span>&copy; Svelte Society Austria</span>
	<!-- discord, twitter -->
	<!-- https://twitter.com/svelteaustria -->
	<a href="/thumbnail">Thumbnail</a>
	<a href="https://sveltesociety.dev/about">code of conduct</a>
	<a
		class="icon"
		href="https://twitter.com/svelteaustria"
		target="_blank"
		rel="noopener noreferrer"
	>
		<span class="sr-only">Twitter Link</span>
		<Twitter width={22} height={22} />
	</a>
	<a class="icon" href="https://discord.gg/3XAVv99r" target="_blank" rel="noopener noreferrer">
		<span class="sr-only">Discord Link</span>
		<Discord width={22} height={22} />
	</a>
</footer>

<style>
	footer {
		position: fixed;
		bottom: 0;
		width: 100%;
		background: var(--color-black-light);
		padding: 0.5rem 1rem;
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
		z-index: 5;
	}
	footer * + *::before {
		content: '⁝';
		margin: 0 1rem;
		color: var(--color-white);
		opacity: 0.5;
	}
	.icon {
		display: flex;
	}
</style>
