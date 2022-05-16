<script lang="ts">
import GitHubAvatar from "../lib/components/GitHubAvatar.svelte";


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
				<GitHubAvatar {githubAuthor} size={70}></GitHubAvatar>
				<div class="ml-4">
					<h3>{displayName}</h3>
					<p>
						<a href={twitter} target="_blanck" rel="noopener noreferrer">twitter</a> /
						<a href="https://github.com/{githubAuthor}" target="_blanck" rel="noopener noreferrer">github</a>
					</p>
				</div>
			</div>
		</li>
	{/each}
</ul>

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
</style>
