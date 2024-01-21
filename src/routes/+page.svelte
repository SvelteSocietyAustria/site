<script lang="ts">
	import type { TMeetup } from '$lib/components/TSvienna';
	import MeetupCollection from '$lib/components/MeetupCollection.svelte';
	import GitHubAvatar from '$lib/components/GitHubAvatar.svelte';
	import type { PageData } from './$types';
	import { onMount } from 'svelte';

	export let data: PageData;

	const today = new Date();

	let pastMeetups: TMeetup[] = [];
	let futureMeetups: TMeetup[] = [];

	$: scrolledPx = 0;

	onMount(() => {
		window.onscroll = () => { scrolledPx = window.scrollY; };

		const hideElements = document.querySelectorAll('.hide');
		let i = 0;
		for (const el of hideElements) {
			setTimeout(() => {
				el.classList.add('show');
			}, i * 400);
			i++;
		};
	});

	$: opacity = 1 - scrolledPx / 250;

	data.meetups.forEach((m) => {
		new Date(m.dateISO) < today
			? (pastMeetups = [...pastMeetups, m])
			: (futureMeetups = [...futureMeetups, m]);
	});
</script>

<section class="intro" style="opacity: {opacity}">
	<div class="wrapper">
		<h1 class="intro__title h2 hide">
			Svelte is simplifying web interface development.
		</h1>
		<div class="h5 intro__slogan hide">
			Our Meetups offer a chance to explore Svelte together in a friendly, welcoming environment, especially for newcomers.
		</div>
	</div>
</section>

<section class="next-event hide">
	<div class="wrapper">
		<div class="title">
			<h2 class="h6 uppercase">Upcoming Event</h2>
		</div>
		<MeetupCollection
			meetups={futureMeetups}
		/>
	</div>
</section>


<section class="sponsors hide">
	<div class="wrapper">
		<div class="title">
			<h2 class="h6 uppercase">Sponsors</h2>
		</div>

		<div class="sponsors__list">
			{#each data.sponsors as { name, website, logo }}
				<a
					href={website}
					rel="noopener noreferrer"
					target="_blank"
				>
					<img
						src={logo}
						alt="{name} Logo"
					/>
					{name}
				</a>
			{/each}
		</div>

		<div class="sponsors__message">
			<p>
				If you wish to host the event, or support us some other way, feel free to <a href="mailto:reitznerdomenik+svelteaustria@gmail.com">get in touch</a>
			</p>
		</div>
	</div>
</section>


<section class="past-events hide">
	<div class="wrapper">
		<div class="title">
			<h2 class="h6 uppercase">Past Events</h2>
		</div>
		<MeetupCollection
			meetups={pastMeetups}
			isPast
		/>
	</div>
</section>


<section class="founding-members hide">
	<div class="wrapper">
		<div class="title">
			<h2 class="h6 uppercase">Founding members</h2>
		</div>

		<div class="founding-members__list">
		{#each data.founders as { displayName, twitter, githubAuthor }}
			<div class="founder">
				<GitHubAvatar
					{githubAuthor}
					size={60}
				/>
				<div>
					<h3 class="h5">{displayName}</h3>
					<p>
						<a href={twitter} target="_blank" rel="noopener noreferrer">twitter</a>
						/
						<a href="https://github.com/{githubAuthor}" target="_blank" rel="noopener noreferrer">github</a>
					</p>
				</div>
			</div>
		{/each}
		</div>
	</div>
</section>


<style lang="scss">
	.intro {
		top: 0;
		position: fixed;
		text-align: center;
		margin: 0 auto;
		width: 100%;
		padding-top: 160px;
		padding-bottom: 60px;

		.wrapper {
			max-width: 550px;
			font-weight: normal;

			.h5 {
				margin-top: 1rem;
			}
		}
	}

	.title {
		margin: 1.5rem auto;
		text-align: center;
	}

	.next-event {
		position: relative;
		background: var(--color-black);
		top: 0;
		margin-top: 400px;
		z-index: 1;

		&::after {
			content: '';
			position: absolute;
			left: 0;
			top: -50px;
			height: 50px;
			width: 100%;
			background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%);
			z-index: 2;
		}
	}

	.sponsors {
		margin-top: 10rem;
		position: relative;
		background: var(--color-black);
		z-index: 2;

		&__list {
			display: flex;
			flex-wrap: wrap;
			gap: 1rem;

			a {
				padding: 2rem;
				flex: 1;
				display: flex;
				justify-content: center;
				align-items: center;
				flex-direction: column;
				color: var(--color-white);
				background: var(--gradient-red-dark);
				border-radius: 10px;
			}

			img {
				margin-bottom: 1rem;
				width: 100px;
				height: 60px;
				object-fit: contain;
			}
		}

		&__message {
			text-align: center;
			padding: 2rem 0 0 0;
			opacity: .3;
			font-size: .8rem;
		}
	}

	.past-events {
		margin-top: 10rem;
		position: relative;
		background: var(--color-black);
		z-index: 2;
	}

	.founding-members {
		margin-top: 10rem;
		margin-bottom: 10rem;
		position: relative;
		background: var(--color-black);
		z-index: 2;

		&__list {
			display: flex;
			flex-wrap: wrap;
			gap: 2rem;

			.founder {
				display: flex;
				align-items: center;
				justify-content: center;

				h3 {
					margin: 0;
				}

				p {
					margin: 0;
					font-size: .8rem;
				}
			}
		}

		.founder {
			display: flex;
			gap: 1rem;
		}
	}

	@media screen and (max-width: 800px) {
		.intro {
			padding-top: 100px;
			padding-bottom: 40px;
		}

		.next-event {
			margin-top: 300px;
		}

		.sponsors {
			margin-top: 5rem;
		}

		.past-events {
			margin-top: 5rem;
		}
	}
</style>
