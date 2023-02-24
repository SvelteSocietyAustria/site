import { deployUrl } from '$lib/util.server';
import type { LayoutServerLoad } from './$types';


export const load: LayoutServerLoad = () => {
	return {
		deployUrl,
	};
};
