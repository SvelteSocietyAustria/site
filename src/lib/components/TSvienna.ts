export type TMeetup = {
	dateISO: TDateISO;
	name: string;
	lumaLink: string;
	by: TMeetupBy;
	pictureCount: number;
	talks: TTalk[];
};

export type TMeetupBy = 'svienna';

export type TTalk = {
	name: 'TBD' | string;
	githubAuthor?: string;
	youtubeReplayLink?: string; // Link to the Youtube video once uploaded
};
