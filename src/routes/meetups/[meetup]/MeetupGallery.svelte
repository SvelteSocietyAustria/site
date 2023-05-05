<script lang="ts">
	import { afterNavigate } from '$app/navigation';
	import { page } from '$app/stores';
	import { getGeneratedImageBaseUrl, getIndexString } from '$lib/util';

	export let dateISO: TDateISO;
	export let pictureCount = 0;
	export let deployUrl: string;

	const month = dateISO.split('T')[0] as string;

	let lastClicked: HTMLElement | null;
	const remember = (event: MouseEvent) => (lastClicked = event.currentTarget as HTMLElement);

	afterNavigate(() => {
		lastClicked?.focus();
	});
</script>

{#if pictureCount}
	<h3>Gallery</h3>
	<section class="gallery">
		{#each new Array(pictureCount) as _, index}
			{@const number = getIndexString(index + 1)}
			{@const src = getGeneratedImageBaseUrl(deployUrl, month, number, 150)}
			<a
				href="{$page.url.pathname}/gallery/{number}"
				on:click={remember}
			>
				<picture>
					<source
						srcset="{src}&output=webp"
						type="image/webp"
					/>
					<img
						{src}
						alt="Gallery image {index} from meetup {month}"
					/>
				</picture>
			</a>
		{/each}
	</section>
{/if}

<style>
	.gallery {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
		margin-top: 0.5rem;
		margin-bottom: 3rem;
	}
	img {
		object-fit: cover;
		height: 100px;
		width: 150px;
	}
</style>
