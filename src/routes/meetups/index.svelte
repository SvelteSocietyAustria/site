<h1>Planned Meetups</h1>
<ul>
	<li data-day="04" data-month="July">
		<section>
			<p class="meetupInfo">
				<a href="https://lu.ma/2022-07-Svienna" target="_blank" rel="noopener noreferrer"
					>2022/07 Svienna - Svelte Society Vienna</a
				> by <a href="/chapters#svienna">Svienna</a>
			</p>
		</section>
	</li>
</ul>

<h2>Passed Meetups</h2>
<p>Nothing to see here... 👋</p>

<style>
	* + * {
		margin-top: 1rem;
	}
	ul {
		padding-left: 3.5rem;
		list-style: none;
        --border-radius: .5rem;
	}
	li {
		position: relative;
		height: 3.5rem;
		display: flex;
		align-items: center;
	}

	li::before,
	li::after {
		position: absolute;
		left: -3rem;
		width: 2.8rem;
		display: flex;
		align-items: center;
		justify-content: center;
        z-index: 1;
	}
	li::before {
		content: attr(data-day);
		top: 0;
		background-color: var(--color-white);
		color: var(--color-black);
		height: 2rem;
		font-size: 1.2rem;
		border-top-left-radius: var(--border-radius);
		border-top-right-radius: var(--border-radius);
	}
	li::after {
		content: attr(data-month);
		bottom: 0;
		background-color: var(--color-red);
		height: 1.5rem;
		font-size: 0.7rem;
		border-bottom-left-radius: var(--border-radius);
		border-bottom-right-radius: var(--border-radius);
	}

	section {
		height: calc(100% - 6px);
		padding-right: 0.8rem;
		padding-left: 1.6rem;
		display: flex;
		align-items: center;
		transform: translateX(-0.8rem);
		background-color: var(--color-black-light);
		border: 3px solid var(--color-white);
		border-left: none;
		border-top-right-radius: var(--border-radius);
		border-bottom-right-radius: var(--border-radius);
	}
</style>
