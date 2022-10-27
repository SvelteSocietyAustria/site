<script lang="ts">
	export let githubAuthor: string;
	export let size: number = 40;
	export let asObjectUrl = false;

	const url = `https://avatars.githubusercontent.com/${githubAuthor}?v=${new Date().getTime()}`;
	let src = '';
	const getObjectUrl = async () => {
		try {
			const res = await fetch(url, {
				mode: 'cors',
				redirect: 'follow',
			});
			const blob = await res.blob()
			return URL.createObjectURL(blob);
		} catch (error) {
			console.log(error);
			return url;
		}
	}

	(async() => {
		src = asObjectUrl ? await getObjectUrl() : url
	})()
</script>

<a href="https://github.com/{githubAuthor}" target="_blanck" rel="noopener noreferrer">
	<img
		class="rouned"
		width={size}
		height={size}
		{src}
		alt={`${githubAuthor} profile picture`}
	/>
</a>

<style>
	.rouned {
		border-radius: 100%;
	}

	.rouned:hover {
		box-shadow: white 0 0 0 calc(1px);
	}
</style>
