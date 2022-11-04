<script type="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { getGeneratedImageBaseUrl, getIndexString } from '$lib/util';
	import { fade } from 'svelte/transition';
	import clickOutside from '@svackages/click-outside-action';
	import { createEventDispatcher, onDestroy, onMount } from 'svelte';

	export let month: string;
	export let picture: string;
	export let pictureCount: number;
	
	const dispatch = createEventDispatcher();

	const close = () => {
		if (backUrl) goto(backUrl);
		dispatch('close')
	};
	$: backUrl = $page.url.pathname.split('/gallery')[0];
	$: pictureInt = parseInt(picture);

	const SIZES = [640, 1024, 1280, 1920];

	let container: HTMLElement;

	const getFirstElement = () => container.querySelector('a');
	const setFocusFirst = () => getFirstElement()?.focus();

	onMount(() => {
		setFocusFirst();
	});

	onDestroy(() => {
		dispatch('close')
	});

	const handleKeydown = (event: KeyboardEvent) => {
		if (event.key === 'Escape') return close();
		if (event.key !== 'Tab') return;
		const first = getFirstElement();
		const last = [...container.querySelectorAll('a')].pop();
		if ((event.shiftKey && document.activeElement === first) || document.activeElement === last) {
			event.shiftKey ? last?.focus() : first?.focus();
			event.preventDefault();
		}
	};
</script>

<svelte:window on:keydown={handleKeydown} />

<div class="wrapper" transition:fade>
	<div class="container" use:clickOutside={() => close()} bind:this={container}>
		<menu>
			<svelte:element
				this={pictureInt === 1 ? 'div' : 'a'}
				href={`${backUrl}/gallery/${getIndexString(pictureInt - 1)}`}
			>
				<span class="chevron -left" />
				previous
			</svelte:element>
			<svelte:element
				this={pictureInt === pictureCount ? 'div' : 'a'}
				href={`${backUrl}/gallery/${getIndexString(pictureInt + 1)}`}
			>
				next
				<span class="chevron -right" />
			</svelte:element>
			<a class="end" href={backUrl}><span class="sr-only">Close dialog</span>❌</a>
		</menu>
		<picture>
			{#each SIZES as size}
				{@const src = getGeneratedImageBaseUrl(month, picture, size)}
				<source srcset="{src}.webp" media="(max-width={size}px)" type="image/webp" />
				<source srcset="{src}.jpg" media="(max-width={size}px)" type="image/jpg" />
			{/each}
			<img
				src="{getGeneratedImageBaseUrl(month, picture, 1920)}.jpg"
				alt="Detail image {pictureInt} from meetup {month}"
			/>
		</picture>
	</div>
</div>

<style>
	.wrapper {
		display: flex;
		position: fixed;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		align-items: center;
		justify-content: center;
		background: rgba(0, 0, 0, 0.3);
		backdrop-filter: blur(5px);
		z-index: 10;
	}
	.container {
		height: 80vh;
		width: 80vw;
		display: flex;
		flex-direction: column;
	}
	menu {
		display: flex;
		gap: 0.8rem;
	}
	.chevron {
		display: inline-block;
		height: 5px;
		width: 5px;
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

	picture {
		display: flex;
	}
	img {
		max-height: 100%;
		max-width: 100%;
	}
</style>
