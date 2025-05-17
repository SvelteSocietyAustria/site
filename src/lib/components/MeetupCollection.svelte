<script lang="ts">
	import type { TMeetup } from '$lib/components/TSvienna';
	import MeetupFallback from './MeetupFallback.svelte';
	import Meetup from './Meetup.svelte';

	interface Props {
		meetups: TMeetup[];
		isPast?: boolean;
	}

	let { meetups, isPast = false }: Props = $props();
</script>

{#if meetups.length}
	<ul class:single={meetups.length == 1}>
		{#each meetups as { dateISO, name, eventLink, talks, time, pictureCount }}
			<Meetup
				{dateISO}
				{name}
				{time}
				{eventLink}
				{talks}
				{isPast}
				{pictureCount}
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
