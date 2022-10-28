import type { TMeetup } from '$lib/components/TSvienna';
export const meetups: TMeetup[] = [
    {
        dateISO: '2022-10-24T16:00:00.000Z',
        name: '2022/10 Svienna - Svelte Society Vienna',
        lumaLink: 'https://lu.ma/2022-10-Svienna',
        by: 'svienna',
        pictureCount: 14,
        talks: [
            {
                name: 'The easy way - an introduction to Sveltekit',
                githubAuthor: 'dreitzner'
            },
            {
                name: 'Your Custom Component Library: Improving Workflows and DX in svelte',
                githubAuthor: 'jjnp',
            },
            {
                name: 'Test it with playwright, you must!',
                githubAuthor: 'jycouet',
            }
        ]
    },
    {
        dateISO: '2022-07-04T16:00:00.000Z',
        name: '2022/07 Svienna - Svelte Society Vienna',
        lumaLink: 'https://lu.ma/2022-07-Svienna',
        by: 'svienna',
        pictureCount: 10,
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
    },
];
