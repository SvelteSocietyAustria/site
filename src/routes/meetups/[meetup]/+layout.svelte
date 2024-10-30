<script lang="ts">
	import Meetup from '$lib/components/Meetup.svelte';
	import MeetupGallery from './MeetupGallery.svelte';

	let { data, children } = $props();
	let { dateISO, name, eventLink, pictureCount, talks, deployUrl } = $derived(data);
</script>

<div class="wrapper">
	<ul>
		<Meetup
			{dateISO}
			{name}
			{eventLink}
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
	{@render children?.()}

</div>

<style>
	ul {
		list-style: none;
		margin: 2rem 0;
	}
</style>
