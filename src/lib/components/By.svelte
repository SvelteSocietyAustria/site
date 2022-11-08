<script lang="ts">
	import type { TMeetupBy } from '$lib/components/TSvienna';
	export let by: TMeetupBy = 'svienna';
</script>

<span>
	{#if by === 'svienna'}
		<i>by</i>&nbsp;&nbsp;<a href="/chapters#svienna">Svienna</a>
	{:else}
		<i>by</i> ???
	{/if}
</span>
