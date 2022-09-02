import type { TMeetup } from '$lib/components/TSvienna';
import type { PageLoad } from './$types';

export const load: PageLoad = () => {
	const meetups: TMeetup[] = [
		{
			dateISO: '2022-07-04T16:00:00.000Z',
			name: '2022/07 Svienna - Svelte Society Vienna',
			lumaLink: 'https://lu.ma/2022-07-Svienna',
			by: 'svienna',
			talks: [
				{
					name: 'From zero to package by the end of the talk',
					githubAuthor: 'ivanhofer',
					youtubeReplayLink: 'https://youtu.be/1chhhyCHVBw'
				},
				{
					name: 'What if using GraphQL would be easy? Especially in SvelteKit!',
					githubAuthor: 'jycouet',
					youtubeReplayLink: 'https://youtu.be/Ggz5cvxDwFs'
				},
				{
					name: 'Svackage - Svelte package inception with turborepo',
					githubAuthor: 'dreitzner',
					youtubeReplayLink: 'https://youtu.be/CjtlKDDJAf0'
				}
			]
		}
		// {
		// 	dateISO: '2022-09-07T16:00:00.000Z',
		// 	name: '2022/09 Svienna - TEST',
		// 	lumaLink: 'https://lu.ma/2022-07-Svienna',
		// 	by: 'svienna',
		// 	talks: []
		// }
	];

	return { meetups };
}
