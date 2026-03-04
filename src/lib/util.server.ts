import { VERCEL_URL, VERCEL_ENV } from '$env/static/private';

const prodURL = 'svelte.at';

export const deployUrl = (VERCEL_ENV === 'production' ? prodURL : VERCEL_URL) || prodURL;
