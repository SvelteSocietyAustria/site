<script lang="ts">
	import By from '$lib/components/By.svelte';
	import type { TMeetup } from '$lib/components/TSvienna';
	import GitHubAvatar from '$lib/components/GitHubAvatar.svelte';

	export let meetups: TMeetup[];

	function getMonth(dateISO: string) {
		const months = [
			'Jan.',
			'Feb.',
			'March',
			'April',
			'May',
			'June',
			'July',
			'Aug.',
			'Sept.',
			'Oct.',
			'Nov.',
			'Dec.'
		];
		const d = new Date(dateISO);
		return months[d.getMonth()];
	}
</script>

<h1>Planned Meetups</h1>
<ul>
	{#each meetups as { dateISO, name, lumaLink, by, talks }}
		<li data-day={new Date(dateISO).getDate()} data-month={getMonth(dateISO)}>
			<section>
				<p class="meetupInfo">
					<a href={lumaLink} target="_blank" rel="noopener noreferrer">{name}</a>
					<By {by} />
				</p>
			</section>
		</li>

		{#each talks as { githubAuthor, name }}
			<div class="talk">
				<img
					width="20"
					height="20"
					src="/logos/Logo-Vienna.svg"
					alt="Svelte Society Austria Logo"
				/>
				<span>
					{name}
				</span>
				<span><i>by</i></span>
				{#if githubAuthor}
					<GitHubAvatar {githubAuthor} />
				{:else}
					You?
				{/if}
			</div>
		{:else}
			<div class="talk">
				<i> No talks to announce yet. </i>
			</div>
		{/each}
	{/each}
</ul>

<h2>Passed Meetups</h2>
<p>Nothing to see here... 👋</p>

<style>
	.talk {
		margin-top: 1rem;
		display: flex;
		align-items: center;
	}
	.talk > * {
		margin-right: 1rem;
	}

	h2 {
		margin-top: 2rem;
	}

	ul {
		margin-top: 2rem;
		padding-left: 3.5rem;
		list-style: none;
		--border-radius: 0.5rem;
	}
	li {
		margin-top: 2rem;
		position: relative;
		height: 3.5rem;
		display: flex;
		align-items: center;
	}

	li::before,
	li::after {
		position: absolute;
		left: -3rem;
		width: 2.8rem;
		display: flex;
		align-items: center;
		justify-content: center;
		z-index: 1;
	}
	li::before {
		content: attr(data-day);
		top: 0;
		background-color: var(--color-white);
		color: var(--color-black);
		height: 2rem;
		font-size: 1.2rem;
		border-top-left-radius: var(--border-radius);
		border-top-right-radius: var(--border-radius);
	}
	li::after {
		content: attr(data-month);
		bottom: 0;
		background-color: var(--color-red);
		height: 1.5rem;
		font-size: 0.7rem;
		border-bottom-left-radius: var(--border-radius);
		border-bottom-right-radius: var(--border-radius);
	}

	section {
		height: calc(100% - 6px);
		padding-right: 0.8rem;
		padding-left: 1.6rem;
		display: flex;
		align-items: center;
		transform: translateX(-0.8rem);
		background-color: var(--color-black-light);
		border: 3px solid var(--color-white);
		border-left: none;
		border-top-right-radius: var(--border-radius);
		border-bottom-right-radius: var(--border-radius);
	}
</style>
