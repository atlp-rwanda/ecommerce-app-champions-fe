import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'fs/promises';
import { resolve } from 'path';

export default defineConfig({
	plugins: [react()],
	build: {
		rollupOptions: {
			input: {
				main: resolve(__dirname, 'index.html'),
			},
			output: {
				globals: {
					react: 'React',
				},
			},
		},
	},
	esbuild: {
		loader: 'jsx',
		include: /\/.*\.jsx?$/,
		exclude: [],
	},
	optimizeDeps: {
		esbuildOptions: {
			plugins: [
				{
					name: 'load-js-files-as-jsx',
					setup(build) {
						build.onLoad({ filter: /src\/.*\.js$/ }, async (args) => ({
							loader: 'jsx',
							contents: await fs.readFile(args.path, 'utf8'),
						}));
					},
				},
			],
		},
	},
	test: {
		globals: true,
		environment: 'jsdom',
		setupFiles: './tests/setup.js',
		coverage: {
			provider: 'c8',
			reporter: ['text', 'json', 'html'],
		},
	},
});
