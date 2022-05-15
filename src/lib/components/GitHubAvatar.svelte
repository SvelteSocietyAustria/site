<script lang="ts">
    export let githubAuthor: string;
    export let size: number = 40;
</script>

<a href="https://github.com/{githubAuthor}" target="_blanck" rel="noopener noreferrer">
    <img
        class="rouned"
        width={size}
        height={size}
        src={`https://github.com/${githubAuthor}.png`}
        alt={`${githubAuthor} profile picture`}
    />
</a>

<style>
	.rouned {
		border-radius: 100%;
	}

    .rouned:hover {
        box-shadow: white 0 0 0 calc(1px)
    }
</style>
