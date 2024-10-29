<script lang="ts">
	import type { TTalk, TMeetupBy } from '$lib/components/TSvienna';
	import Talk from '$lib/components/Talk.svelte';
	import { getMonth, meetupToSlug } from '$lib/util';

	interface Props {
		dateISO: TDateISO;
		name: string;
		time?: string | undefined;
		eventLink: string;
		talks: TTalk[];
		isPast?: boolean;
		isDetail?: boolean;
		children?: import('svelte').Snippet;
	}

	let {
		dateISO,
		name,
		time,
		eventLink,
		talks,
		isPast = false,
		isDetail = false,
		children
	}: Props = $props();
</script>

<li
	class:isDetail
	data-day={new Date(dateISO).getDate()}
	data-month={getMonth(dateISO)}
>
	<section class:isPast>

		<header>
			<div class="calendar">
				<div class="calendar__day">{new Date(dateISO).getDate()}</div>
				<div class="calendar__month">{getMonth(dateISO)}</div>
			</div>

			<div class="title">
				{#if time}
					<p class="uppercase">{time}</p>
				{/if}
				<h3 class="h4">{name}</h3>
			</div>
		</header>

		<div class="details">
			{@render children?.()}
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
		</div>

		<footer>
			{#if isDetail}
				<a href="/">←&nbsp;&nbsp;Back</a>
			{/if}

			<a href={eventLink} target="_blank" rel="noopener noreferrer">
				<span>📅</span> Event Page
			</a>

			{#if isPast}
				<a href="/meetups/{meetupToSlug(name)}">Details</a>
			{/if}
		</footer>
	</section>
</li>

<style lang="scss">
	.isDetail {
		display: block;
	}

	li {
		border-radius: 10px;
		background: var(--color-black-light);
		position: relative;
		display: flex;
	}

	.calendar {
		width: 60px;
		border-radius: 10px;
		overflow: hidden;

		&__day {
			display: flex;
			justify-content: center;
			align-items: center;
			padding: .3rem;
			color: var(--color-black);
			background-color: var(--color-white);
		}

		&__month {
			display: flex;
			justify-content: center;
			align-items: center;
			padding: .3rem;
			color: var(--color-white);
			background-color: var(--color-red);
		}
	}

	header {
		padding: 1rem;
		margin-bottom: 0.5rem;
		display: flex;
		align-items: center;
		border-bottom: 1px solid #2a2a2a;
	}

	.title {
		padding-left: 1rem;
		display: flex;
		flex-direction: column;
		align-content: center;
	}

	section {
		z-index: 3;
		display: flex;
		flex-direction: column;
		width: 100%
	}

	footer {
		padding: 1rem;
		display: flex;
		justify-content: center;
		border-top: 1px solid #2a2a2a;
		background: rgb(21, 21, 21);
		border-radius: 0 0 10px 10px;

		&:has(:nth-child(2)) {
			justify-content: space-between;
		}

		a span {
			margin-right: 0.3rem;
		}
	}

	.details {
		padding: 1rem;
	}
</style>
