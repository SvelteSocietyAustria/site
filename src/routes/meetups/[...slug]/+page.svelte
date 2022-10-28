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

<Meetup {dateISO} {name} {lumaLink} {by} {talks} {pictureCount} isDetail/>

<style>
</style>
