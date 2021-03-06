export type TMeetup = {
	dateISO: string;
	name: string;
	lumaLink: string;
	by: TMeetupBy;
	talks: TTalk[];
};

export type TMeetupBy = 'svienna';

export type TTalk = {
	name: 'TBD' | string;
	githubAuthor?: string;
	youtubeReplayLink?: string // Link to the Youtube video once uploaded
};
