<script lang="ts">
	import { onMount } from "svelte";

    export let dateISO: string;
    export let pictureCount = 0;
    
    const folder = dateISO.split('T')[0] as string;
    const path = `./src/lib/assets/${folder}/*`;

    import img from '$lib/assets/2022-07-04/01.jpg?w=150;480;800;1280;1920&avif;webp&picture&imagetools';
    // console.log(img);

    const imageUrl = new URL(`$lib/assets/${folder}/01.jpg?w=150;480;800;1280;1920&avif;webp&picture&imagetools`, import.meta.url)
    
    
    

    let images: string[];
    onMount(async() => {
        const files = await import.meta.glob('$lib/assets/**/*.jpg', {eager: true})
        images = Object.keys(files).filter(path => path.includes(folder))

        /* @vite-ignore */
        // images = await import(new URL(`$lib/assets/${folder}/01.jpg?w=150;480;800;1280;1920&avif;webp&picture&imagetools`, import.meta.url).href)
        // console.log(images);
    })
</script>
{#if pictureCount}
<h3>Gallery</h3>

{#if images}
<picture>
    <!-- {#each Object.entries(img.sources) as [format, images]}
        <source srcset={images.map((i) => `${i.src} ${i.w}w`).join(', ')} type={'image/' + format} />
    {/each} -->
    <img src={images[0] + '?w=150'} alt="Test" />
</picture>
{/if}

{/if}