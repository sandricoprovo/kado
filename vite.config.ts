import { defineConfig } from 'vitest/config';
import { sveltekit } from '@sveltejs/kit/vite';
import { svelteTesting } from '@testing-library/svelte/vite';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

export default defineConfig({
	plugins: [vitePreprocess(), sveltekit(), svelteTesting()],
	test: {
		globals: true,
		environment: 'node',
		setupFiles: ['./vitest-setup.ts'],
		include: ['src/**/*.test.{js,ts}'],
		deps: {
			optimizer: {
				include: ['@asamuzakjp/css-color'] // Include specific ESM dependencies
			}
		}
	},
	esbuild: {
		target: 'esnext'
	}
});
