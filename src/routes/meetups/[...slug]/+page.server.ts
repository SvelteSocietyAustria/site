import type { TMeetup } from '$lib/components/TSvienna';
import { meetupToSlug } from '$lib/util';
import { redirect } from '@sveltejs/kit';
import { meetups } from '../meetups';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad<TMeetup | undefined> = async ({ params }) => {
    const item = meetups.find((m: TMeetup) => params.slug.startsWith(meetupToSlug(m.name)))
    if (!item) redirect(303, '/meetups');
    return item;
}