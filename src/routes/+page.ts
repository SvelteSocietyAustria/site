import type { PageLoad } from './$types';

export const load: PageLoad = () => {
	const founders: { displayName: string; twitter: string; githubAuthor: string }[] = [
		{
			displayName: 'Domenik Reitzner',
			twitter: 'https://twitter.com/reitznerdomenik',
			githubAuthor: 'dreitzner'
		},
		{
			displayName: 'Ermin Čeliković',
			twitter: 'https://mobile.twitter.com/celikovic',
			githubAuthor: 'ermincelikovic'
		},
		{
			displayName: 'Ivan Hofer',
			twitter: 'https://twitter.com/ivanhofer_',
			githubAuthor: 'ivanhofer'
		},
		{
			displayName: 'Jan-Dennis Drenkhahn',
			twitter: 'https://twitter.com/crashoverried',
			githubAuthor: 'stillday'
		},
		{
			displayName: 'Jean-Yves Couët',
			twitter: 'https://twitter.com/jycouet',
			githubAuthor: 'jycouet'
		}
	];

	return { founders };
}
