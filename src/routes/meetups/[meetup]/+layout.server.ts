import type { TMeetup } from '$lib/components/TSvienna';
import { meetupToSlug } from '$lib/util';
import { deployUrl } from '$lib/util.server';
import { redirect } from '@sveltejs/kit';
import { meetups } from '../../meetups';

export const config = {
	isr: {
		expiration: 3600,
	}
}



export async function load({params}) {
    const item = meetups.find((m) => params.meetup === meetupToSlug(m.name));
    if (!item) redirect(303, '/');
    return {
        ...item as TMeetup,
        deployUrl,
    };
}