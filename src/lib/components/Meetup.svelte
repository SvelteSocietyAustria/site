<script lang="ts">
	import type { TTalk, TMeetupBy } from '$lib/components/TSvienna';
	import By from '$lib/components/By.svelte';
	import Talk from '$lib/components/Talk.svelte';
	import { getMonth, meetupToSlug } from '$lib/util';

	export let dateISO: TDateISO;
	export let name: string;
	export let lumaLink: string;
	export let by: TMeetupBy;
	export let talks: TTalk[];
	export let isPast = false;
	export let isDetail = false;
</script>

<li
	class:isDetail
	data-day={new Date(dateISO).getDate()}
	data-month={getMonth(dateISO)}
>
	<section class:isPast>
		<header>
			<h3>{name}</h3>
			<p class="meetupInfo">
				<a
					href={lumaLink}
					target="_blank"
					rel="noopener noreferrer">📅 Event Page</a
				>
				<By {by} />
			</p>
		</header>
		<slot />
		{#each talks as { githubAuthor, name, youtubeReplayLink }}
			<Talk
				{githubAuthor}
				{name}
				{youtubeReplayLink}
				{isDetail}
			/>
		{:else}
			<div class="talk">
				<i> No talks to announce yet. </i>
			</div>
		{/each}
		{#if isPast}
			<a
				class="details"
				href="/meetups/{meetupToSlug(name)}">Details</a
			>
		{/if}
	</section>
	<div class="background" />
	<div class="background-glow" />
	{#if isDetail}
		<div class="back">
			<a href="/">←&nbsp;&nbsp;back</a>
		</div>
	{/if}
</li>

<style>
	.isDetail {
		display: block;
	}
	li {
		position: relative;
		display: flex;
		min-height: 350px;
	}

	li::before,
	li::after {
		position: absolute;
		left: -0.8rem;
		width: 3.5rem;
		display: flex;
		align-items: center;
		justify-content: center;
		z-index: 4;
	}
	li::before {
		content: attr(data-day);
		top: -0.8rem;
		background-color: var(--color-white);
		color: var(--color-black);
		height: 2.3rem;
		font-size: 1.5rem;
	}
	li::after {
		content: attr(data-month);
		top: 1.5rem;
		background-color: var(--color-red);
		height: 2rem;
		font-size: 1rem;
	}
	.background,
	.background-glow {
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		border-top-right-radius: 3rem;
		border-bottom-left-radius: 3rem;
		margin: 0.25rem;
		transition: all 0.3s;
	}
	.isDetail .background,
	.isDetail .background-glow {
		display: none;
	}
	.background {
		background-color: var(--color-black-light);
		z-index: 2;
	}
	.background-glow {
		background-color: #fff;
		scale: 0.95;
		box-shadow: 0px 0px 15px 12px #fff7;
		z-index: 1;
	}
	li:hover .background, li:focus-within .background {
		opacity: 0.92;
	}
	li:hover .background-glow, li:focus-within .background-glow {
		scale: 0.99;
	}
	section {
		z-index: 3;
		padding: 0 2rem;
		padding-bottom: 1rem;
		display: flex;
		flex-direction: column;
	}
	section.isPast {
		margin-bottom: 5rem;
	}
	header {
		margin-bottom: 0.5rem;
	}
	h3 {
		margin: 2rem 0 0.2rem 2rem;
		font-size: 1.3rem;
	}
	.meetupInfo {
		display: flex;
		justify-content: space-between;
		margin-left: 8px;
	}
	.details {
		position: absolute;
		bottom: 2rem;
		align-self: flex-end;
		border-radius: 1rem;
		padding: 0.5rem 1rem;
		background: #fff;
	}
	.back {
		text-align: right;
		margin-right: 2rem;
	}
</style>
