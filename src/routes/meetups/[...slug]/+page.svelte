<script lang="ts">
	import Meetup from '$lib/components/Meetup.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
    $:( {
        dateISO,
        name,
        lumaLink,
        by,
        talks,
     } = data)
</script>

<Meetup {dateISO} {name} {lumaLink} {by} {talks} isDetail/>

<style>
</style>
