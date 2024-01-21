<script lang="ts">
	import { onMount } from "svelte";

	onMount(() => {
		const hideElements = document.querySelectorAll('.hide');
		let i = 0;
		for (const el of hideElements) {
			setTimeout(() => {
				el.classList.add('show');
			}, i * 400);
			i++;
		};
	});
</script>

<section class="wrapper intro">
	<h1 class="h2 hide">Propose a talk</h1>
	<p class="h5 hide">We like all kinds of talks – whether it's about a framework you worked on, your first project with a new library, experimenting with new features, or a unique side project. Talks at Svelte Society can be up to 30 minutes, and newcomers are always welcome.</p>
	<p class="hide">
		<a class="button" target="_blank" href="https://forms.gle/8SR9Gn8mXNMxMzZy6">I want to give a talk</a>
	</p>
</section>

<section class="wrapper prepare hide">
		<h2>Prepare your talk</h2>
		<p>Take the time to practice your talk. Improvising live on stage is nice, but have a well prepared backup.</p>
		<h3>Here's what you need to know:</h3>
		<ul>
			<li>You can select one of the three talk length options. Make sure not to exceed this limit</li>
			<li>Your talk must be in English</li>
			<li>Your slides should be in the format 16:9</li>
			<li>Your screen will be recorded so your screen will be mirrored</li>
			<li>We have a good internet connection for demos, but make sure you have a backup</li>
			<li>(Ideally) your talk will be recorded and uploaded to the internet</li>
			<li>After every talk there's a Q &amp; A session. If you don't want one, please let us know</li>
		</ul>
		<h3>Important</h3>
		<ul>
			<li>You can mention your company, products or events, but your talk should not be advertisement</li>
			<li>We want to learn something interesting and new. Be original!</li>
			<li>We like to see live demos, but keep the code short and readable</li>
			<li>Your talk must must not be discriminate, shame or in any other way make people of different races, nationalities or sexual orientation feel unpleasant.</li>
		</ul>
		<h3>Preparing for screen recording:</h3>
		<p>To be able to record your talk, you are required to do a screen recording of your talk from your laptop&nbsp;(with audio) either in .mp4 or .mov formats ONLY (no html formats, .flv, .ogv etc...).</p>
		<ul>
			<li>Make sure to test the screen recording plugin/software at home before the meet up to make sure everything is working properly (video, audio, no glitches etc.).</li>
		</ul>
		<p>Get your software:</p>
		<ul>
			<li>If you use Mac, we can use QuickTime to record the screen.</li>
			<li>On Windows or Linux, third party software is required. Kindly install and use&nbsp; <a target="_blank" rel="noopener" href="https://obsproject.com/">OBS</a>
			</li>
		</ul>
		<p>&nbsp;</p>
</section>

<style lang="scss">
	section {
		margin-top: 1rem;
		margin-bottom: 4rem;
	}

	.intro {
		text-align: center;
		max-width: 650px;

		.button {
			margin-top: 1.5rem
		}
	}

	.button {
		display: inline-block;
		padding: 0.5rem 1rem;
		background: var(--color-red);
		color: var(--color-white);
		border-radius: 4px;
		text-decoration: none;
		transition: 200ms all;

		&:hover {
			background: var(--color-black-light);
		}
	}

	.prepare {
		margin-top: 10rem;

		h3 {
			margin-top: 1.5rem;
		}

		ul {
			list-style: disc outside;
			margin-left: 2em;
			margin-top: 1em;
		}

		li {
			margin-bottom: 0.3em;
		}
	}

	h2 {
		margin-top: 2rem;
	}

	p {
		margin-top: 1rem;
	}
</style>
