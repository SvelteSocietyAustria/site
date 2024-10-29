<script>
	import GalleryPicture from './GalleryPicture.svelte';
	let { data } = $props();
	let { dateISO, pictureCount, deployUrl, pictureId } = $derived(data);
</script>

<GalleryPicture
	{dateISO}
	{deployUrl}
	{pictureId}
	{pictureCount}
/>
