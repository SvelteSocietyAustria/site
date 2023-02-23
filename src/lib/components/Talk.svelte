<script lang="ts">
	import GitHubAvatar from "$lib/components/GitHubAvatar.svelte";
	import YouTube from "$lib/icons/YouTube.svelte";

	export let githubAuthor: string | undefined;
	export let name: string;
	export let youtubeReplayLink: string | undefined;
    export let isDetail = false;
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
    <a href={youtubeReplayLink} class="rewatch">
        <YouTube height={28} width={30} />
        <span>Watch the talk on YouTube</span>
    </a>
{/if}

<style>
    .talk, .rewatch {
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
    .rewatch {
        margin: 0 0 2rem 1.5rem;
    }
    .rewatch span {
        margin-left: 0.5rem;
    }
</style>
