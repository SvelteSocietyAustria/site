import { CF_PAGES_URL, VERCEL_URL } from '$env/static/private';

export const deployUrl = CF_PAGES_URL || VERCEL_URL || 'austria.sveltesociety.dev';
