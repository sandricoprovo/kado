import { defineConfig } from 'vitest/config';

export default defineConfig({
	test: {
		environment: 'node',
		globals: true,
		deps: {
			inline: [/^@asamuzakjp\/css-color/]
		}
	},
	esbuild: {
		target: 'esnext'
	}
});
