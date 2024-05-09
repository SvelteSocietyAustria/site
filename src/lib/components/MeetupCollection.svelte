<script lang="ts">
	import type { TMeetup } from '$lib/components/TSvienna';
	import MeetupFallback from './MeetupFallback.svelte';
	import Meetup from './Meetup.svelte';

	export let meetups: TMeetup[];
	export let isPast = false;
</script>

{#if meetups.length}
	<ul class:single={meetups.length == 1}>
		{#each meetups as { dateISO, name, eventLink, by, talks, time }}
			<Meetup
				{dateISO}
				{name}
				{time}
				{eventLink}
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
		display: flex;
		flex-direction: column;
		gap: 2rem;
	}

	ul.single {
		--columns: 1;
	}
</style>
