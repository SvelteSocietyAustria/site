import type { TMeetup } from '$lib/components/TSvienna';
import { deployUrl } from '$lib/util.server';
import type { PageServerLoad } from './$types';
import { meetups } from './meetups';

import logoIteratec from '$lib/assets/Logo-iteratec.png';
import logoSentry from '$lib/assets/Logo-sentry.svg';
import logoVercel from '$lib/assets/Logo-vercel.svg';
import logoDynamicProcess from '$lib/assets/Logo-DynamicProcess.svg';
import logoAots from '$lib/assets/Logo-aots.svg';
import logoLeanCoders from '$lib/assets/Logo-LeanCoders.svg';

type TFounder = { displayName: string; twitter: string; githubAuthor: string };
type TSponsor = { name: string; website: string; logo: string };

const founders: TFounder[] = [
	{
		displayName: 'Domenik Reitzner',
		twitter: 'https://twitter.com/reitznerdomenik',
		githubAuthor: 'dreitzner',
	},
	{
		displayName: 'Jean-Yves Couët',
		twitter: 'https://twitter.com/jycouet',
		githubAuthor: 'jycouet',
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
];

const sponsors: TSponsor[] = [
	{
		name: 'Vercel',
		website: 'https://vercel.com/',
		logo: logoVercel,
	},
	{
		name: 'iteratec GmbH',
		website: 'https://www.iteratec.com/',
		logo: logoIteratec,
	},
	{
		name: 'aots',
		website: 'https://aots.io/',
		logo: logoAots,
	},
	{
		name: 'Lean Coders',
		website: 'https://lean-coders.at/',
		logo: logoLeanCoders,
	},
	{
		name: 'Dynamic Process',
		website: 'http://www.dynamicprocess.io/',
		logo: logoDynamicProcess,
	},
	{
		name: 'Sentry',
		website: 'https://sentry.io/',
		logo: logoSentry,
	},
];

export const config = {
	isr: {
		expiration: 3600,
	},
};

export const load: PageServerLoad<{ meetups: TMeetup[] }> = () => {
	return {
		meetups,
		deployUrl,
		founders,
		sponsors,
	};
};
