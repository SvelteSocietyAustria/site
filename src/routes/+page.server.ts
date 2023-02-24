import type { TMeetup } from '$lib/components/TSvienna';
import type { PageServerLoad } from './$types';
import { meetups } from './meetups';

export const load: PageServerLoad<{ meetups: TMeetup[] }> = () => {
	return {
		meetups,
	};
};
