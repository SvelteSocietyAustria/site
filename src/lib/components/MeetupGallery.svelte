<script lang="ts">
	import { page } from "$app/stores";
	import { getGeneratedImageBaseUrl, getIndexString } from "$lib/util";
	import GalleryPicture from "./GalleryPicture.svelte";

    export let dateISO: TDateISO;
    export let pictureCount = 0;

    const month = dateISO.split('T')[0] as string;
    let picture: string | undefined;

    $: {
        const split = $page.url.pathname.split('/')
        picture = split[4]
    }
    let lastClicked: HTMLElement | null;
    const remember = (event: MouseEvent) => (lastClicked = event.currentTarget as HTMLElement)
    const restoreFocus = () => {console.log('### restore');lastClicked?.focus()}

    $: console.log(lastClicked)
</script>
{#if pictureCount}
    <h3>Gallery</h3>
    <section class="gallery">
        {#each new Array(pictureCount) as _, index}
        {@const number = getIndexString(index+1)}
        {@const src = getGeneratedImageBaseUrl($page.data.baseUrl, month, number, 150)}
            <a href="{$page.url.pathname}/gallery/{number}" on:click={remember}>
                <picture>
                    <source srcset="{src}&output=webp" type="image/webp">
                    <img src="{src}" alt="Gallery image {index} from meetup {month}" />
                </picture>
            </a>
        {/each}
    </section>
    {#if picture}
        <GalleryPicture {month} {picture} {pictureCount} on:close={restoreFocus} />
    {/if}
{/if}

<style>
.gallery {
    display: flex;
    flex-wrap: wrap;
    gap: .5rem;
    margin-top: 0.5rem;
    margin-bottom: 3rem;
}
img {
    object-fit: cover;
    height: 100px;
    width: 150px;
}
</style>