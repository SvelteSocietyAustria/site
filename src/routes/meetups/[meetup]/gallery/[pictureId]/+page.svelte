<script>
	import GalleryPicture from './GalleryPicture.svelte';
	export let data;
	$: ({ dateISO, pictureCount, deployUrl, pictureId } = data);
</script>

<GalleryPicture
	{dateISO}
	{deployUrl}
	{pictureId}
	{pictureCount}
/>
