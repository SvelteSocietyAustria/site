<script lang="ts">
	import type { TMeetupBy } from '$lib/components/TMeetup';
	export let by: TMeetupBy = 'svienna';
</script>

{#if by === 'svienna'}
	by <a href="/chapters#svienna">Svienna</a>
{:else}
	by ???
{/if}
