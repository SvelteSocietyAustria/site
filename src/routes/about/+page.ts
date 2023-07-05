import type { PageLoad } from './$types';
import logoEmakina from '$lib/assets/Logo-Emakina.svg'
import logoIteratec from '$lib/assets/Logo-iteratec.png'
import logoSentry from '$lib/assets/Logo-sentry.svg'
import logoVercel from '$lib/assets/Logo-vercel.svg'

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
			name: 'sentry',
			website: 'https://sentry.io/',
			logo: logoSentry,
		},
		{
			name: 'vercel',
			website: 'https://vercel.com/',
			logo: logoVercel,
		},
		{
			name: 'Emakina CEE',
			website: 'https://www.emakina.com/de-at',
			logo: logoEmakina,
		},
		{
			name: 'iteratec GmbH',
			website: 'https://www.iteratec.com/',
			logo: logoIteratec,
		},
	];

	return { founders, sponsors };
};
