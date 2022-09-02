<script lang="ts">
	import GitHubAvatar from '../lib/components/GitHubAvatar.svelte';

	const founders: { displayName: string; twitter: string; githubAuthor: string }[] = [
		{
			displayName: 'Domenik Reitzner',
			twitter: 'https://twitter.com/reitznerdomenik',
			githubAuthor: 'dreitzner'
		},
		{
			displayName: 'Ermin Čeliković',
			twitter: 'https://mobile.twitter.com/celikovic',
			githubAuthor: 'ermincelikovic'
		},
		{
			displayName: 'Ivan Hofer',
			twitter: 'https://twitter.com/ivanhofer_',
			githubAuthor: 'ivanhofer'
		},
		{
			displayName: 'Jan-Dennis Drenkhahn',
			twitter: 'https://twitter.com/crashoverried',
			githubAuthor: 'stillday'
		},
		{
			displayName: 'Jean-Yves Couët',
			twitter: 'https://twitter.com/jycouet',
			githubAuthor: 'jycouet'
		}
	];
</script>

<h1>Welcome to Svelte Society Austria</h1>
<p>Founded 12th of May 2022</p>

<h2>Founding members</h2>

<ul>
	{#each founders as { displayName, twitter, githubAuthor }}
		<li>
			<div class="founder">
				<GitHubAvatar {githubAuthor} size={70} />
				<div class="ml-4">
					<h3>{displayName}</h3>
					<p>
						<a href={twitter} target="_blanck" rel="noopener noreferrer">twitter</a> /
						<a href="https://github.com/{githubAuthor}" target="_blanck" rel="noopener noreferrer"
							>github</a
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
		<a class="flex" href="https://www.emakina.com/de-at">
			<img src="/logos/Logo-Emakina.svg" alt="Emakina CEE Logo" />
			Emakina CEE
		</a>
		<a class="flex" href="mailto:reitznerdomenik+svelteaustria@gmail.com"> Contact us </a>
	</div>
</section>

<style>
	h2 {
		margin-top: 3rem;
	}

	li {
		list-style-type: none;
		margin: 1rem 1rem 1rem 1rem;
		display: inline-block;
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
		margin-top: 8rem;
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
