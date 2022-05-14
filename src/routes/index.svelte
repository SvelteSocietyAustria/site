<script lang="ts">
	const founders: { displayName: string; twitter: string; github: string }[] = [
		{
			displayName: 'Domenik Reitzner',
			twitter: 'https://twitter.com/reitznerdomenik',
			github: 'https://github.com/dreitzner'
		},
		{
			displayName: 'Jean-Yves Couët',
			twitter: 'https://twitter.com/jycouet',
			github: 'https://github.com/jycouet'
		}
	];
</script>

<h1>Welcome to Svelte Society Austria</h1>
<p>Founded 12th of May 2022</p>

<h2>Founding members</h2>

<ul>
	{#each founders as { displayName, twitter, github }}
		<li>
			<div class="founder">
				<img width="70" height="70" src={`${github}.png`} alt={`${displayName} profile picture`} />
				<div class="ml-4">
					<h3>{displayName}</h3>
					<p>
						<a href={twitter} target="_blanck" rel="noopener noreferrer">twitter</a> /
						<a href={github} target="_blanck" rel="noopener noreferrer">github</a>
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
	img {
		border-radius: 100%;
	}

	li {
		list-style-type: none;
		margin: 1rem 1rem 1rem 1rem;
		display: inline-block;
	}

	.founder {
		display: flex;
		align-items: center;
		margin-left: 1rem;
	}

	.ml-4 {
		margin-left: 1rem;
	}
</style>
