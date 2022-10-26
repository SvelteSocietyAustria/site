<script lang="ts">
	import GitHubAvatar from '$lib/components/GitHubAvatar.svelte';
	import html2canvas from 'html2canvas';

	let title = 'Your Custom Component Library: Improving Workflows and DX in svelte';
	let githubAuthor = 'jjnp';
	let name = 'Jacob Palecek';

	async function dl() {
		const el = document.querySelector('#tumb');
		if (el) {
			const canvas = await html2canvas(el as any, {
				proxy: `/github/${githubAuthor}.jpg` // We have to have it locally if not we can't download :( the image with the picture.
			});
			canvas.style.display = 'none';
			document.body.appendChild(canvas);
			const image = canvas.toDataURL();
			const a = document.createElement('a');
			a.setAttribute('download', `${name} - ${title}.png`);
			a.setAttribute('href', image);
			a.click();
		}
	}
</script>

<div>
	<label>Title: </label>
	<input type="text" bind:value={title} />
</div>
<div>
	<label>Github Author: </label>
	<input type="text" bind:value={githubAuthor} />
</div>
<div>
	<label>Name: </label>
	<input type="text" bind:value={name} />
</div>

<button style="height: 3rem; width: 10rem;" on:click={dl}>Download</button>

<div class="frame" id="tumb">
	<div class="logo">
		<img
			width="500px"
			src="/logos/Logo-Dark-Tagline.svg"
			alt="Logo Svienna - Svelte Society Vienna"
		/>
	</div>
	<div class="gh-img">
		<GitHubAvatar size={300} {githubAuthor} />
	</div>
	<div class="gh-name">
		{name}
	</div>
	<div class="title">
		{title}
	</div>
</div>

<style>
	.frame {
		background: var(--color-black-light);
		margin-top: 1rem;
		border: 1px solid var(--color-black-light);
		width: 1280px;
		height: 720px;
	}

	.logo {
		float: right;
		margin-right: 6rem;
		margin-top: 6rem;
	}

	.gh-img {
		margin: 3rem;
	}
	.gh-name {
		margin: 3rem;
		font-size: 2.5rem;
		color: var(--color-red);
	}

	.title {
		margin: 3rem;
		font-size: 3.5rem;
	}
</style>
