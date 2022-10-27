<script lang="ts">
	import type { TMeetup } from '$lib/components/TSvienna';
	import MeetupFallback from './MeetupFallback.svelte';
	import Meetup from './Meetup.svelte';

	export let meetups: TMeetup[];
	export let isPast = false;
</script>

{#if meetups.length}
	<ul>
		{#each meetups as { dateISO, name, lumaLink, by, talks }}
			<Meetup {dateISO} {name} {lumaLink} {by} {talks} {isPast} />
		{/each}
	</ul>
{:else}
	<MeetupFallback />
{/if}

<style>
	ul {
		/* TODO: grid here */
		list-style: none;
		display: grid;
		gap: 2rem;
		margin: 2rem 0;
		--columns: 1;
		grid-template-columns: repeat(var(--columns), calc(100% / var(--columns) - 1rem * (var(--columns) - 1)));
	}
	
	@media screen and (min-width: 800px) {
		ul {
			--columns: 2;
		}
	}
	@media screen and (min-width: 1200px) {
		ul {
			--columns: 3;
		}
	}
</style>
