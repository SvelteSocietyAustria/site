import type { TMeetup } from '$lib/components/TSvienna';
import { meetupToSlug } from '$lib/util';
import { deployUrl } from '$lib/util.server';
import { redirect } from '@sveltejs/kit';
import { meetups } from '../../meetups';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
    const item = meetups.find((m) => params.slug.startsWith(meetupToSlug(m.name)))
    if (!item) redirect(303, '/');
    return {
        ...item as TMeetup,
        deployUrl,
    };
}