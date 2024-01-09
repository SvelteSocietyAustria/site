import { deployUrl } from '$lib/util.server';
import { redirect } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';

export const load = (async ({ url }) => {
	if (url.pathname === '/meetups') redirect(302, '/');
	return {
		deployUrl,
	};
}) satisfies LayoutServerLoad;
