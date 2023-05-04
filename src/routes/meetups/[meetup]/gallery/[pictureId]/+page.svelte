<script>
	import GalleryPicture from "./GalleryPicture.svelte";
    export let data;
    $:( {
        dateISO,
        pictureCount,
        deployUrl,
        pictureId
     } = data)
</script>

<pre><code>{JSON.stringify(data, null, 2)}</code></pre>
<GalleryPicture {dateISO} {deployUrl} {pictureId} {pictureCount} />
