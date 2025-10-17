<script lang="ts">
	import MeetupCollection from '$lib/components/MeetupCollection.svelte';
	import { onMount } from 'svelte';
	import type { PageData } from './$types';

	interface Props {
		data: PageData;
	}

	let { data }: Props = $props();

	let scrolledPx = $state(0);

	onMount(() => {
		window.onscroll = () => {
			scrolledPx = window.scrollY;
		};

		const hideElements = document.querySelectorAll('.hide');
		let i = 0;
		for (const el of hideElements) {
			setTimeout(() => {
				el.classList.add('show');
			}, i * 400);
			i++;
		}
	});
</script>

<section class="past-events hide">
	<div class="wrapper">
		<div class="title">
			<h2 class="h6 uppercase">All past Events</h2>
		</div>
		<MeetupCollection
			meetups={data.pastMeetups}
			isPast
		/>
	</div>
</section>

<style>
	.title {
		margin: 1.5rem auto;
		text-align: center;
	}
</style>
