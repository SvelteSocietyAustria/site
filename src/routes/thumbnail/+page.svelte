<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import GitHubAvatar from '$lib/components/GitHubAvatar.svelte';
	import html2canvas from 'html2canvas';

	let githubAuthor = $state($page.url.searchParams.get('who') || '');
	let title = $state($page.url.searchParams.get('title') || 'Your awesome title, it will be great 🎉!');
	let name = $state($page.url.searchParams.get('name') || '');

	$effect(() => {
		if (githubAuthor) {
			$page.url.searchParams.set('who', githubAuthor);
		} else {
			$page.url.searchParams.delete('who');
		}
		if (title) {
			$page.url.searchParams.set('title', title);
		} else {
			$page.url.searchParams.delete('title');
		}
		if (name) {
			$page.url.searchParams.set('name', name);
		} else {
			$page.url.searchParams.delete('name');
		}
		goto($page.url.href, { replaceState: true, keepFocus: true });
	})

	async function download() {
		const el = document.querySelector('#tumb');
		if (!el) return;

		// Capture the div as it is
		const capturedCanvas = await html2canvas(el as HTMLElement);

		// Create a new canvas with desired dimensions
		const finalCanvas = document.createElement('canvas');
		finalCanvas.width = 1920;
		finalCanvas.height = 1080;

		// Draw the captured image onto the new canvas, scaling it in the process
		const ctx = finalCanvas.getContext('2d');
		ctx?.drawImage(capturedCanvas, 0, 0, 1920, 1080);

		// Convert to data URL and create download link
		const image = finalCanvas.toDataURL();
		const a = document.createElement('a');
		a.setAttribute('download', `${name || githubAuthor} - ${title}.png`);
		a.setAttribute('href', image);
		a.click();
	}
</script>

<div class="wrapper">
	<div class="intro">
		<h1 class="h2">How YOUR thumbnail will look like on Youtube?</h1>
		<p class="h5">Just try the tumbnail generator and find out</p>
	</div>

	<div class="group">
		<div style="flex-grow: 1;">
			<div>
				<label for="title">Title </label>
			</div>
			<input
				style="width: 100%"
				name="title"
				type="text"
				placeholder="*"
				required
				bind:value={title}
			/>
		</div>
		<div>
			<div>
				<label for="githubAuthor">Github Author </label>
			</div>
			<input
				name="githubAuthor"
				type="text"
				placeholder="*"
				bind:value={githubAuthor}
			/>
		</div>
		<div>
			<div>
				<label for="name">Name </label>
			</div>
			<input
				name="name"
				type="text"
				bind:value={name}
				placeholder="optional"
			/>
		</div>
	</div>

	<div
		class="frame"
		id="tumb"
	>
		<div class="gh-img">
			<GitHubAvatar
				size={300}
				{githubAuthor}
				asObjectUrl
			/>
		</div>
		<div class="logo">
			<img
				width="500px"
				src="/logos/Logo-Dark-Tagline.svg"
				alt="Logo Svienna - Svelte Society Vienna"
			/>
		</div>
		<div class="gh-name">
			{name || githubAuthor || '*'}
		</div>
		<div class="title">
			{title}
		</div>
	</div>
	<br />
	<button
		class="button"
		onclick={download}
	>
		Download
	</button>
</div>

<style lang="scss">
	.intro {
		text-align: center;
		margin-bottom: 4rem;
	}

	.group {
		width: 100%;
		display: flex;
		flex-direction: row;
		gap: 1rem;
	}

	input {
		padding: 0.5rem;
	}

	label {
		display: block;
		margin-bottom: 0.3rem;
	}

	.frame {
		background: var(--color-black-light);
		margin-top: 1rem;
		border: 1px solid var(--color-black-light);
		width: 100%;
		aspect-ratio: 1920 / 1080;
		overflow: hidden;

		padding: 2vw 3vw;

		display: flex;
		flex-wrap: wrap;
	}

	.logo {
		flex: 0 0 50%;
		display: flex;
		justify-content: flex-end;
		align-items: center;

		img {
			max-width: 70%;
		}
	}

	:global(.gh-img) {
		flex: 0 0 50%;
		display: flex;
		justify-content: flex-start;
		align-items: center;

		:global(a) {
			display: flex;
			max-width: 50%;

			:global(img) {
				max-width: 80%;
				height: auto;
			}
		}
	}

	.gh-name {
		flex: 0 0 100%;
		margin-top: 1rem;
		font-size: min(3vw, 20px);
		color: var(--color-red);
	}

	.title {
		flex: 0 0 100%;
		font-size: min(4vw, 30px);
		margin: 1vw 0;
	}

	.wrapper {
		margin-bottom: 5rem;
	}

	.button {
		display: inline-block;
		padding: 0.5rem 1rem;
		background: var(--color-red);
		color: var(--color-white);
		border-radius: 4px;
		text-decoration: none;
		transition: 200ms all;
		outline: none;
		border: none;

		&:hover {
			background: var(--color-black-light);
		}
	}
</style>
