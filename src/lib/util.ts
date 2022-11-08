export const meetupToSlug = (name: string) => name.replace(/[^0-9a-z]/gi, '-').replace(/-+/g, '-');

const months = [
    'Jan.',
    'Feb.',
    'March',
    'April',
    'May',
    'June',
    'July',
    'Aug.',
    'Sept.',
    'Oct.',
    'Nov.',
    'Dec.'
];

export const getMonth = (dateISO: string) => {
    const d = new Date(dateISO);
    return months[d.getMonth()];
}

export const getIndexString = (index: number) => index < 10 ? `0${index}` : '' + index;

export const getGeneratedImageBaseUrl = (month: string, index: string, size: number) => `/generated/${month}/${index}-${size}`
