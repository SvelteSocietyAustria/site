<script lang="ts">
	import Meetup from '$lib/components/Meetup.svelte';
	import MeetupGallery from './MeetupGallery.svelte';

	let { data, children } = $props();
	let { dateISO, name, eventLink, pictureCount, talks, deployUrl } = $derived(data);
	let isPast = $derived.by(() => {
		const eventDate = new Date(dateISO);
		const now = new Date();
		// Set both dates to midnight to compare only the date part
		eventDate.setHours(0, 0, 0, 0);
		now.setHours(0, 0, 0, 0);
		return now > eventDate;
	});
</script>

<div class="wrapper">
	<ul>
		<Meetup
			{dateISO}
			{name}
			{eventLink}
			{talks}
			isDetail
			{isPast}
		>
			<MeetupGallery
				{dateISO}
				{deployUrl}
				{pictureCount}
			/>
		</Meetup>
	</ul>
	{@render children?.()}
</div>

<style>
	ul {
		list-style: none;
		margin: 2rem 0;
	}
</style>
