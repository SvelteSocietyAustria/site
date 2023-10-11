<script lang="ts">
	import type { TMeetup } from '$lib/components/TSvienna';
	import MeetupCollection from '$lib/components/MeetupCollection.svelte';
	import type { PageData } from './$types';

	export let data: PageData;

	const today = new Date();

	let pastMeetups: TMeetup[] = [];
	let futureMeetups: TMeetup[] = [];

	data.meetups.forEach((m) => {
		new Date(m.dateISO) < today
			? (pastMeetups = [...pastMeetups, m])
			: (futureMeetups = [...futureMeetups, m]);
	});
</script>

<h2>Upcoming Meetups</h2>
<MeetupCollection meetups={futureMeetups} />

<h2>Past Meetups</h2>
<MeetupCollection
	meetups={pastMeetups}
	isPast
/>

<style>
	h1,
	h2 {
		margin-bottom: 1rem;
	}

	h2 {
		margin-top: 2rem;
	}
</style>
