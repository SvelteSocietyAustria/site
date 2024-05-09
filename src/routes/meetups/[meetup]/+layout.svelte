<script lang="ts">
	import Meetup from '$lib/components/Meetup.svelte';
	import MeetupGallery from './MeetupGallery.svelte';

	export let data;
	$: ({ dateISO, name, eventLink, by, pictureCount, talks, deployUrl } = data);
</script>

<div class="wrapper">
	<ul>
		<Meetup
			{dateISO}
			{name}
			{eventLink}
			{by}
			{talks}
			isDetail
		>
			<MeetupGallery
				{dateISO}
				{deployUrl}
				{pictureCount}
			/>
		</Meetup>
	</ul>
	<slot />

</div>

<style>
	ul {
		list-style: none;
		margin: 2rem 0;
	}
</style>
