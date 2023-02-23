import { redirect } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';

export const load = (async ({ url }) => {
    if (url.href === '/meetups') throw redirect(302, '/')
    return {};
}) satisfies LayoutServerLoad;