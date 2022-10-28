import { sveltekit } from '@sveltejs/kit/vite';
import { imagetools } from 'vite-imagetools'
import { fileURLToPath, URL } from 'url';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit(), imagetools()],
};

export default config;
