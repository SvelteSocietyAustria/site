<script lang="ts">
	import type { TMeetup } from '$lib/components/TSvienna';
	import TalkList from '$lib/components/TalkList.svelte';

	export let meetups: TMeetup[];

	const today = new Date();

	let pastMeetups: TMeetup[] = [];
	let futureMeetups: TMeetup[] = [];

	meetups.forEach((m) => {
		new Date(m.dateISO) < today
			? (pastMeetups = [...pastMeetups, m])
			: (futureMeetups = [...futureMeetups, m]);
	});
</script>

<h1>Planned Meetups</h1>
<TalkList meetups={futureMeetups} />

<h2>Passed Meetups</h2>
<TalkList meetups={pastMeetups} />

<style>
	h2 {
		margin-top: 2rem;
	}
</style>
