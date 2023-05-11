import type { PageLoad } from './$types';

type TFounder = { displayName: string; twitter: string; githubAuthor: string };

type TSponsor = { name: string; website: string; logo: string };

export const load: PageLoad = () => {
	const founders: TFounder[] = [
		{
			displayName: 'Domenik Reitzner',
			twitter: 'https://twitter.com/reitznerdomenik',
			githubAuthor: 'dreitzner',
		},
		{
			displayName: 'Ermin Celikovic',
			twitter: 'https://twitter.com/celikovic',
			githubAuthor: 'ermincelikovic',
		},
		{
			displayName: 'Ivan Hofer',
			twitter: 'https://twitter.com/ivanhofer_',
			githubAuthor: 'ivanhofer',
		},
		{
			displayName: 'Jan-Dennis Drenkhahn',
			twitter: 'https://twitter.com/crashoverried',
			githubAuthor: 'stillday',
		},
		{
			displayName: 'Jean-Yves Couët',
			twitter: 'https://twitter.com/jycouet',
			githubAuthor: 'jycouet',
		},
	];

	const sponsors: TSponsor[] = [
		{
			name: 'Emakina CEE',
			website: 'https://www.emakina.com/de-at',
			logo: '/logos/Logo-Emakina.svg',
		},
		{
			name: 'iteratec GmbH',
			website: 'https://www.iteratec.com/',
			logo: '/logos/Logo-iteratec.png',
		},
	];

	return { founders, sponsors };
};
