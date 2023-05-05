<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { getGeneratedImageBaseUrl, getIndexString } from '$lib/util';
	import { fade } from 'svelte/transition';
	import clickOutside from '@svackages/click-outside-action';
	import { onDestroy, onMount } from 'svelte';

	export let pictureId: string;
	export let pictureCount: number;
	export let deployUrl: string;
	export let dateISO: TDateISO;
	const month = dateISO.split('T')[0] as string;

	const close = () => {
		if (backUrl) goto(backUrl);
	};
	$: backUrl = $page.url.pathname.split('/gallery')[0];
	$: pictureInt = parseInt(pictureId);
	$: isFirst = pictureInt === 1;
	$: isLast = pictureInt === pictureCount;
	$: prevImageUrl = `${backUrl}/gallery/${getIndexString(pictureInt - 1)}`;
	$: nextImageUrl = `${backUrl}/gallery/${getIndexString(pictureInt + 1)}`;

	const back = () => !isFirst && goto(prevImageUrl);
	const forward = () => !isLast && goto(nextImageUrl);
	let imageCover = 'cover';
	const toggleImageCover = () => (imageCover = imageCover === 'cover' ? 'none' : 'cover');

	const SIZES = [640, 1024, 1280, 1920];
	let dialog: HTMLDialogElement;

	onMount(() => {
		dialog.showModal();
	});



	const handleKeydown = (event: KeyboardEvent) => {
		const altPressed = event.altKey;
		if (event.key === 'ArrowLeft' && !altPressed) return back();
		if (event.key === 'ArrowRight' && !altPressed) return forward();
	};
</script>

<svelte:window on:keydown={handleKeydown} />

<dialog
	bind:this={dialog}
	on:close={close}
>
	<form
		method="dialog"
		use:clickOutside={close}
		in:fade
		aria-labelledby="gallery_label"
	>
		<h2
			id="gallery_label"
			class="sr-only"
		>
			A detail view of the gallery images. Use arrow keys to navigate to the previous or next image.
		</h2>
		<menu>
			<svelte:element
				this={isFirst ? 'div' : 'a'}
				href={prevImageUrl}
			>
				<span class="chevron -left" />
				previous
			</svelte:element>
			<svelte:element
				this={isLast ? 'div' : 'a'}
				href={nextImageUrl}
			>
				next
				<span class="chevron -right" />
			</svelte:element>
			<a
				class="end"
				href={backUrl}><span class="sr-only">Close dialog</span>❌</a
			>
		</menu>
		<button
			on:click={toggleImageCover}
			style="--image-cover: {imageCover}"
			type="button"
		>
			<p class="sr-only">Use the button to toggle the zoom level of the image</p>
			<picture>
				{#each SIZES as size}
					{@const src = getGeneratedImageBaseUrl(deployUrl, month, pictureId, size)}
					<source
						srcset="{src}&output=webp"
						media="(max-width={size}px)"
						type="image/webp"
					/>
					<source
						srcset={src}
						media="(max-width={size}px)"
						type="image/jpg"
					/>
				{/each}
				<img
					src={getGeneratedImageBaseUrl(deployUrl, month, pictureId, 1920)}
					alt="Detail image {pictureInt} from meetup {month}"
				/>
			</picture>
		</button>
	</form>
</dialog>

<style>
	dialog::backdrop {
		background: rgba(0, 0, 0, 0.3);
		backdrop-filter: blur(5px);
	}
	dialog {
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		height: 90dvh;
		width: 90vw;
		margin: 5dvh 5vw;
		background: none;
		border: none;
	}
	form {
		display: grid;
		height: 90dvh;
		grid-template-columns: 1fr;
		grid-template-rows: 22px calc(90dvh - 22px);
	}
	menu {
		display: flex;
		gap: 0.8rem;
	}
	.chevron {
		display: inline-block;
		height: 5px;
		width: 5px;
		border: 5px solid transparent;
		border-top: 5px solid var(--color-red);
		border-right: 5px solid var(--color-red);
	}
	.chevron.-left {
		rotate: -135deg;
	}
	.chevron.-right {
		rotate: 45deg;
	}
	.end {
		margin-left: auto;
	}
	button {
		background: none;
		border: none;
	}

	picture {
		display: flex;
		justify-content: center;
		height: 100%;
		width: 100%;
	}
	img {
		max-height: 100%;
		max-width: 100%;
		width: 100%;
		object-fit: var(--image-cover, 'cover');
	}
</style>
