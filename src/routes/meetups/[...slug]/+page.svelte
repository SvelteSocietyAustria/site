<script lang="ts">
	import Meetup from '$lib/components/Meetup.svelte';
	import type { TMeetup } from '$lib/components/TSvienna';
	import type { PageData } from './$types';

	export let data: PageData;
    $:( {
        dateISO,
        name,
        lumaLink,
        by,
        pictureCount,
        talks,
     } = data as TMeetup)
</script>
<ul>
    <Meetup {dateISO} {name} {lumaLink} {by} {talks} {pictureCount} isDetail />
</ul>

<style>
    ul {
		list-style: none;
		margin: 2rem 0;
	}
</style>
