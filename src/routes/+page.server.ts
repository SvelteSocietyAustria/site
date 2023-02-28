import type { TMeetup } from '$lib/components/TSvienna';
import { deployUrl } from '$lib/util.server';
import type { PageServerLoad } from './$types';
import { meetups } from './meetups';

export const load: PageServerLoad<{ meetups: TMeetup[] }> = () => {
	return {
		meetups,
		deployUrl,
	};
};
