import type { TMeetup } from '$lib/components/TSvienna';

export async function get() {
	const meetups: TMeetup[] = [
		{
			dateISO: '2022-07-04T16:00:00.000Z',
			name: '2022/07 Svienna - Svelte Society Vienna',
			lumaLink: 'https://lu.ma/2022-07-Svienna',
			by: 'svienna',
			talks: [
				{ name: 'TBD' },
				{ name: 'What if using GraphQL would be easy? Especially in SvelteKit!', githubAuthor: 'jycouet' },
				{ name: 'TBD' },
			]
		},
		{
			dateISO: '2022-09-07T16:00:00.000Z',
			name: '2022/09 Svienna - TEST',
			lumaLink: 'https://lu.ma/2022-07-Svienna',
			by: 'svienna',
			talks: []
		}
	];

	return { body: { meetups } };
}
