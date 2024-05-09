export type TMeetup = {
	dateISO: TDateISO;
	time?: string;
	name: string;
	eventLink: string;
	pictureCount: number;
	talks: TTalk[];
};

export type TMeetupBy = 'svienna';

export type TTalk = {
	name: 'TBD' | string;
	githubAuthor?: string;
	youtubeReplayLink?: string; // Link to the Youtube video once uploaded
};
