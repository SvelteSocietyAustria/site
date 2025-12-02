import { sveltekit } from '@sveltejs/kit/vite';
import { kitRoutes } from 'vite-plugin-kit-routes';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit(), kitRoutes()],
};

export default config;
