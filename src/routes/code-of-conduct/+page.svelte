<section class="code-of-conduct">
	<div class="wrapper">
		<h1 class="main-title h2">Code of Conduct</h1>

		<div class="content">
			<div class="chapter ">
				<h2 class="chapter-title h4">Our Commitment</h2>
				<p>
					We want our meetup to be a fun, friendly, and welcoming place for everyone. By participating in this event, you agree to help us create an environment where people feel safe, respected, and included.
				</p>
			</div>

			<div class="chapter ">
				<h2 class="chapter-title h4">Harassment-Free Experience</h2>
				<p>
					We are committed to providing a harassment-free experience for all attendees - regardless of gender, gender identity or expression, sexual orientation, disability, physical appearance, body size, race, nationality, age, or religion.
				</p>
			</div>

			<div class="chapter ">
				<h2 class="chapter-title h4">Respectful Interaction</h2>
				<p>
					Please interact with others with kindness and respect. Be mindful of your words, your behavior, and the space you create around you. Good vibes only!
				</p>
			</div>

			<div class="chapter ">
				<h2 class="chapter-title h4">Zero Tolerance Policy</h2>
				<p>
					Harassment of any kind is not tolerated. If someone asks you to stop, stop immediately!
				</p>
			</div>

			<div class="chapter ">
				<h2 class="chapter-title h4">Reporting & Support</h2>
				<p>
					If you experience or witness any behavior that makes you uncomfortable, you can confidentially reach out to one of the organizers - we're here to help, listen, and take action.
				</p>
			</div>

			<div class="chapter ">
				<h2 class="chapter-title h4">Enforcement</h2>
				<p>
					Participants who disregard this code may be asked to leave the event.
				</p>
			</div>
		</div>
	</div>
</section>

<style lang="scss">
	.code-of-conduct {
		background: var(--color-black);
		min-height: 100vh;
		padding: 0px 0 80px 0;
		position: relative;

		.wrapper {
			max-width: 700px;
			margin: 0 auto;
			padding: 0 2rem;
		}
	}

	.main-title {
		text-align: center;
		margin-bottom: 3rem;
		color: var(--color-white);
		font-weight: 700;
	}

	.content {
		display: flex;
		flex-direction: column;
		gap: 3rem;
	}

	.chapter {
		.chapter-title {
			color: var(--color-white);
			margin: 0 0 1.5rem 0;
			font-weight: 600;
			border-bottom: 2px solid var(--color-red);
			padding-bottom: 0.5rem;
			display: inline-block;
		}

		p {
			color: var(--color-white);
			opacity: 0.9;
			line-height: 1.7;
			margin: 0;
			font-size: 1.1rem;
		}
	}
</style>