<script lang="ts">
	import type { TMeetup } from '$lib/components/TSvienna';
	import MeetupFallback from './MeetupFallback.svelte';
	import Meetup from './Meetup.svelte';

	export let meetups: TMeetup[];
	export let isPast = false;
</script>

{#if meetups.length}
	<ul class:single={meetups.length == 1}>
		{#each meetups as { dateISO, name, lumaLink, by, talks }}
			<Meetup
				{dateISO}
				{name}
				{lumaLink}
				{by}
				{talks}
				{isPast}
			/>
		{/each}
	</ul>
{:else}
	<MeetupFallback />
{/if}

<style>
	ul {
		list-style: none;
		display: grid;
		margin: 2rem 0;
		--columns: 1;
		--gap: 2rem;
		gap: var(--gap);
		grid-template-columns: repeat(
			var(--columns),
			calc(100% / var(--columns) - var(--gap) / 2 * (var(--columns) - 1))
		);
	}

	ul.single {
		--columns: 1;
	}

	@media screen and (min-width: 800px) {
		ul {
			--columns: 2;
		}
	}
</style>
