<script lang="ts">
	import Meetup from '$lib/components/Meetup.svelte';
	import MeetupGallery from './MeetupGallery.svelte';

	export let data;
	$: ({ dateISO, name, lumaLink, by, pictureCount, talks, deployUrl } = data);
</script>

<ul>
	<Meetup
		{dateISO}
		{name}
		{lumaLink}
		{by}
		{talks}
	>
		<MeetupGallery
			{dateISO}
			{deployUrl}
			{pictureCount}
		/>
	</Meetup>
</ul>
<slot />

<style>
	ul {
		list-style: none;
		margin: 2rem 0;
	}
</style>
