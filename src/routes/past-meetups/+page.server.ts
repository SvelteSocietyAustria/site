import { getPastMeetups } from '../meetups';

export const config = {
	isr: {
		expiration: 3600,
	},
};

export const load = () => {
	const pastMeetups = getPastMeetups(Infinity);
	return {
		pastMeetups,
	};
};
