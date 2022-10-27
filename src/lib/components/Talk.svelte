<script type="ts">
	import GitHubAvatar from "$lib/components/GitHubAvatar.svelte";

	export let githubAuthor: string | undefined;
	export let name: string;
	export let youtubeReplayLink: string | undefined;
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
	<!-- {#if youtubeReplayLink}
		<a href={youtubeReplayLink} class="rewatch">
			<span class="sr-only">watch the</span>
			[Video]
		</a>
	{/if} -->
	<span>
		{name}
	</span>
</div>

<style>
    .talk {
        display: flex;
        align-items: center;
    }
    .talk + :global(.talk) {
        margin-top: 2rem;
    }
    .bubble {
        margin-left: calc(-2rem - 15px);
        margin-right: 2rem;
    }
</style>
