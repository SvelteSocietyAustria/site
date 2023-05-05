<script lang="ts">
	import GitHubAvatar from '../../lib/components/GitHubAvatar.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<h1>Welcome to Svelte Society Austria</h1>
<p>Founded 12th of May 2022</p>

<h2>Founding members</h2>

<ul>
	{#each data.founders as { displayName, twitter, githubAuthor }}
		<li>
			<div class="founder">
				<GitHubAvatar
					{githubAuthor}
					size={70}
				/>
				<div class="ml-4">
					<h3>{displayName}</h3>
					<p>
						<a
							href={twitter}
							target="_blank"
							rel="noopener noreferrer">twitter</a
						>
						/
						<a
							href="https://github.com/{githubAuthor}"
							target="_blank"
							rel="noopener noreferrer">github</a
						>
					</p>
				</div>
			</div>
		</li>
	{/each}
</ul>

<section class="sponsors">
	<h2>Sponsors</h2>
	<div class="flex -list">
		{#each data.sponsors as { name, website, logo }}
			<a
				class="flex"
				href={website}
				rel="noopener noreferrer"
				target="_blank"
			>
				<img
					src={logo}
					alt="{name} Logo"
				/>
				{name}
			</a>
		{/each}
		<a
			class="flex"
			href="mailto:reitznerdomenik+svelteaustria@gmail.com"
		>
			Contact us
		</a>
	</div>
</section>

<style>
	h2 {
		margin-top: 3rem;
		margin-bottom: 1rem;
	}

	ul {
		display: flex;
		flex-wrap: wrap;
	}

	li {
		flex: 0 0 50%;
		display: flex;
		justify-content: flex-start;
		padding: 1rem 1rem 1rem 0;
	}

	.founder {
		display: flex;
		align-items: center;
		justify-content: center;
		margin-left: 1rem;
	}

	.ml-4 {
		margin-left: 1rem;
	}

	.sponsors {
		margin-top: 4rem;
		margin-bottom: 4rem;
	}
	.sponsors img {
		max-width: 120px;
	}
	.sponsors a {
		flex-direction: column;
		align-items: center;
		justify-content: center;
		border: 3px solid var(--color-black-light);
		padding: 1rem;
		margin-right: 1rem;
		border-radius: 0.5rem;
		gap: 0.5rem;
	}
	.sponsors .-list {
		margin: 2rem 0;
	}
</style>
