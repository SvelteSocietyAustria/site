<script lang="ts">
	import GitHubAvatar from '$lib/components/GitHubAvatar.svelte';
	import YouTube from '$lib/icons/YouTube.svelte';

	interface Props {
		githubAuthor: string | undefined;
		name: string;
		youtubeReplayLink: string | undefined;
		isDetail?: boolean;
	}

	let {
		githubAuthor,
		name,
		youtubeReplayLink,
		isDetail = false
	}: Props = $props();
</script>

<div class="talk">
	<div class="bubble">
		<span class="sr-only">Speaker name: {githubAuthor || 'You?'}</span>
		{#if githubAuthor}
			<GitHubAvatar {githubAuthor} />
		{:else}
			You?
		{/if}
	</div>
	<span>
		{name}
	</span>
</div>

{#if youtubeReplayLink && isDetail}
	<a
		href={youtubeReplayLink}
		class="rewatch"
	>
		<YouTube
			height={28}
			width={30}
		/>
		<span>Watch the talk on YouTube</span>
	</a>
{/if}

<style>
	.talk,
	.rewatch {
		display: flex;
		align-items: center;
	}

	.talk + :global(.talk) {
		margin-top: 1rem;
	}

	.bubble {
		margin-right: 1rem;
	}

	.rewatch {
		margin: 0 0 2rem 3.5rem;
	}

	.rewatch span {
		margin-left: 0.5rem;
	}
</style>
