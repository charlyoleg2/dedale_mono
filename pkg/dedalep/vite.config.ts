//import adapter from '@sveltejs/adapter-auto';
import adapter from '@sveltejs/adapter-static';

import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex } from 'mdsvex';
import { defineConfig } from 'vitest/config';
import { sveltekit } from '@sveltejs/kit/vite';

const basePath = process.env.BASE_PATH;
const dev = process.argv.includes('dev') || basePath === undefined;

export default defineConfig({
	plugins: [
		sveltekit({
			extensions: ['.svelte', '.svx', '.md'],
			// Consult https://svelte.dev/docs/kit/integrations
			// for more information about preprocessors
			preprocess: [vitePreprocess(), mdsvex({ extensions: ['.svx', '.md'] })],

			// adapter-auto only supports some environments, see https://svelte.dev/docs/kit/adapter-auto for a list.
			// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
			// See https://svelte.dev/docs/kit/adapters for more information about adapters.
			adapter: adapter({
				pages: 'build',
				assets: 'build',
				fallback: undefined,
				precompress: false,
				strict: true
			}),
			paths: { base: dev ? '' : `/${basePath}`, relative: false }
		})
	],
	test: { include: ['src/**/*.{test,spec}.{js,ts}'] }
});
