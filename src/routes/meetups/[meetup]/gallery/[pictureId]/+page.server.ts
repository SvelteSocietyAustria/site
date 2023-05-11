import { redirect } from '@sveltejs/kit';

export const load = async ({ params: { pictureId }, url, parent }) => {
	const meetupUrl = url.pathname.split('/gallery')[0] as string;
	const pictureInt = parseInt(pictureId)
	if (Number.isNaN(pictureInt)) throw redirect(303, meetupUrl)
	const { pictureCount } = await parent();
	if (pictureInt < 0 || pictureInt > pictureCount) throw redirect(303, meetupUrl)
	return {
		pictureId,
	};
};
