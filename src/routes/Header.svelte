<script lang="ts">
	import { afterNavigate } from '$app/navigation';
	import { page } from '$app/stores';
	import { pageTitle } from '$lib/stores/pageTitle';

	afterNavigate((route: any) => {
		const prefix = 'Svelte Society Austria';
		const routeFound = routes.find((c) => c.href === route.to.url.pathname);
		if (routeFound) {
			$pageTitle = `${prefix} - ${routeFound.name}`;
		} else {
			$pageTitle = prefix;
		}
	});

	const routes: { name: string; href: string }[] = [
		{ name: 'Meetups', href: '/' },
		{ name: 'Propose a talk', href: '/propose-a-talk' },
	];
</script>

<svelte:head>
	<title>{$pageTitle}</title>
</svelte:head>

<header class="header">
	<div class="header__wrapper">
		<a href="/" class="header__logo">
			<img src="/logos/Logo-Svelte.svg" alt="Svelte Society Austria Logo" />
			<div class="header__logo-type">Svelte Society <br>Austria</div>
		</a>

		<nav>
			{#each routes as { name, href }}
				<a
					{href}
					aria-current={(
						href.length > 1 ? $page.url.pathname.startsWith(href) : href === $page.url.pathname
					)
						? 'page'
						: undefined}>{name}</a
				>
			{/each}
		</nav>
	</div>
</header>

<div class="header-spacer"></div>

<style lang="scss">

	.header-spacer {
		height: 160px;
	}

	.header {
		position: fixed;
		top: 1rem;
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
		overflow: hidden;
		z-index: 5;

		&__wrapper {
			position: relative;
			//padding: .75rem;
			width: 550px;
			display: flex;
			justify-content: space-between;
			margin: 0 auto;
			border-radius: 10px;
			background: rgba(22, 22, 22, 0.65);
			backdrop-filter: blur(12px);
			-webkit-backdrop-filter: blur(8px);
			box-shadow:
				0px 0px 5px rgba(0, 0, 0, 0.05),
				0px 0px 20px rgba(0, 0, 0, 0.03);
		}

		&__logo {
			display: flex;
			align-items: center;
			min-width: 175px;
			padding: .75rem;

			img {
				height: 2.5em;
				width: auto;
			}

			&-type {
				color: var(--color-white);
				line-height: 1.1em;
				padding-left: .6rem;
				font-size: 1rem;
			}
		}

		nav {
			display: flex;
			font-size: 1rem;

			a {
				position: relative;
				overflow: hidden;
				display: inline-flex;
				justify-content: center;
				align-items: center;
				padding: .75rem;
				font-size: 1rem;
				padding: 0.5rem 1rem;
				transition: 150ms all;
				color: rgba(255, 255, 255, 0.4);
				transition: 600ms all;

				&:hover,
				&:focus {
					color: var(--color-red);
				}

				&:after {
					transition: 600ms all;
					transform: translateY(5px);
					opacity: 0;
					content: '';
					position: absolute;
					left: 50%;
					bottom: -12px;
					margin-left: -20px;
					width: 40px;
					height: 16px;
					background-color: var(--color-red);
					border-radius: 10px;

					@media screen and (max-width: 425px) {
						width: 20px;
						margin-left: -10px;
					}

					// red glow
					box-shadow:
						0 0 5px 3px rgba(238, 48, 45, .5),
						0 0 15px 15px rgba(238, 48, 45, .3);
				}
			}
			
			[aria-current] {
				color: var(--color-red);

				&:after {
					transform: translateY(0);
					opacity: 1;
				}
			}
		}
	}

	@media screen and (max-width: 575px) {
		.header {
			top: .5rem;

			&__wrapper {
				width: calc(100% - 1rem);
			}

			&__logo {
				min-width: 0;
				flex: 1;
			}

			nav {
				gap: 0;

				a {
					padding: .5rem .75rem;
					display: flex;
					justify-content: center;
					align-items: center;
				}
			}
		}
	}

	@media screen and (max-width: 425px) {
		.header {
			&__logo {
				img {
					height: 2em;
				}

				&-type {
					font-size: .8rem;
				}
			}

			nav {
				a {
					font-size: .8rem;
				}
			}
		}
	}
</style>
