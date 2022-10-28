<script lang="ts">
	import type { Action } from 'svelte/types/runtime/action';

	export let githubAuthor: string;
	export let size: number = 40;
	export let asObjectUrl = false;

	$: url = `https://avatars.githubusercontent.com/${githubAuthor}?v=${new Date().getTime()}`;

	const getObjectUrl = async () => {
		try {
			if (githubAuthor) {
				const res = await fetch(url, {
					mode: 'cors',
					redirect: 'follow'
				});
				const blob = await res.blob();
				return URL.createObjectURL(blob);
			}
		} catch (error) {
			console.log(error);
		}
		return '/github/unknown.png';
	};

	const actionImgSrc: Action<HTMLElement, any> = (node: any) => {
		// initial img
		refreshImg(node);
		return {
			// On update, refreshImg
			update() {
				refreshImg(node);
			},
			destroy() {}
		};
	};

	const refreshImg = (node: any) => {
		if (asObjectUrl) {
			(async () => {
				node.src = await getObjectUrl();
			})();
		} else {
			node.src = url;
		}
	};
</script>

<a href="https://github.com/{githubAuthor}" target="_blanck" rel="noopener noreferrer">
	<img
		class="rouned"
		width={size}
		height={size}
		use:actionImgSrc={githubAuthor}
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
