<script>
	/**
	 * @typedef {Object} Props
	 * @property {import('svelte').Snippet} [children]
	 */

	/** @type {Props} */
	let { children } = $props();
</script>

<section>
	{@render children?.()}
</section>

<style>
	section {
		max-width: 1680px;
		margin: 0 auto;
		padding: 0.8rem;
	}
</style>
