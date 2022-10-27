<script lang="ts">
	import { page } from '$app/stores';
	import GitHubAvatar from '$lib/components/GitHubAvatar.svelte';
	import html2canvas from 'html2canvas';

	let title = $page.url.searchParams.get('title') || 'Your awesome title, it will be great 🎉!';
	let githubAuthor = $page.url.searchParams.get('who') || 'jycouet';
	let name = '';

	async function dl() {
		const el = document.querySelector('#tumb');
		if (el) {
			let proxy = '';

			const existingGithubAuthorsForPicture = ['dreitzner', 'jjnp', 'jycouet'];
			if (existingGithubAuthorsForPicture.includes(githubAuthor)) {
				// We have to have it locally if not we can't download :( the image with the picture.
				// HELP: Maybe someone know how to get it in the final image with the github picture directly?
				proxy = `/github/${githubAuthor}.jpg`;
			}

			const canvas = await html2canvas(el as any, {
				proxy
			});
			canvas.style.display = 'none';
			document.body.appendChild(canvas);
			const image = canvas.toDataURL();
			const a = document.createElement('a');
			a.setAttribute('download', `${name || githubAuthor} - ${title}.png`);
			a.setAttribute('href', image);
			a.click();
		}
	}
</script>

<h1>How YOUR thumbnail will look like on Youtube?</h1>
<p>Just try the tumbnail generator.</p>
<br />
<br />
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
		<input name="githubAuthor" type="text" placeholder="*" bind:value={githubAuthor} />
	</div>
	<div>
		<div>
			<label for="name">Name </label>
		</div>
		<input name="name" type="text" bind:value={name} placeholder="optional" />
	</div>
</div>

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
		{name || githubAuthor}
	</div>
	<div class="title">
		{title}
	</div>
</div>
<br />
<button style="height: 3rem; width: 10rem;" on:click={dl}>Download</button>*
<br />
*<i>Side note: For your picture to be downloaded you need to have it locally.</i>

<style>
	.frame {
		background: var(--color-black-light);
		margin-top: 1rem;
		border: 1px solid var(--color-black-light);
		width: 1280px;
		height: 720px;
	}

	.group {
		width: 1280px;
		display: flex;
		flex-direction: row;
		gap: 1rem;
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
