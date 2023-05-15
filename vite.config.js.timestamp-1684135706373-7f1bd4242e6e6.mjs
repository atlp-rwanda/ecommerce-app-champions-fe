// vite.config.js
import { defineConfig } from 'file:///C:/Users/TGT/Desktop/sostene/ecommerce-app-champions-fe/node_modules/vite/dist/node/index.js';
import react from 'file:///C:/Users/TGT/Desktop/sostene/ecommerce-app-champions-fe/node_modules/@vitejs/plugin-react/dist/index.mjs';
import fs from 'fs/promises';
import { resolve } from 'path';
var __vite_injected_original_dirname =
	'C:\\Users\\TGT\\Desktop\\sostene\\ecommerce-app-champions-fe';
var vite_config_default = defineConfig({
	plugins: [react()],
	build: {
		rollupOptions: {
			input: {
				main: resolve(__vite_injected_original_dirname, 'index.html'),
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
export { vite_config_default as default };
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxUR1RcXFxcRGVza3RvcFxcXFxzb3N0ZW5lXFxcXGVjb21tZXJjZS1hcHAtY2hhbXBpb25zLWZlXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxUR1RcXFxcRGVza3RvcFxcXFxzb3N0ZW5lXFxcXGVjb21tZXJjZS1hcHAtY2hhbXBpb25zLWZlXFxcXHZpdGUuY29uZmlnLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Vc2Vycy9UR1QvRGVza3RvcC9zb3N0ZW5lL2Vjb21tZXJjZS1hcHAtY2hhbXBpb25zLWZlL3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSc7XG5pbXBvcnQgcmVhY3QgZnJvbSAnQHZpdGVqcy9wbHVnaW4tcmVhY3QnO1xuaW1wb3J0IGZzIGZyb20gJ2ZzL3Byb21pc2VzJztcbmltcG9ydCB7IHJlc29sdmUgfSBmcm9tICdwYXRoJztcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcblx0cGx1Z2luczogW3JlYWN0KCldLFxuXHRidWlsZDoge1xuXHRcdHJvbGx1cE9wdGlvbnM6IHtcblx0XHRcdGlucHV0OiB7XG5cdFx0XHRcdG1haW46IHJlc29sdmUoX19kaXJuYW1lLCAnaW5kZXguaHRtbCcpLFxuXHRcdFx0fSxcblx0XHRcdG91dHB1dDoge1xuXHRcdFx0XHRnbG9iYWxzOiB7XG5cdFx0XHRcdFx0cmVhY3Q6ICdSZWFjdCcsXG5cdFx0XHRcdH0sXG5cdFx0XHR9LFxuXHRcdH0sXG5cdH0sXG5cdGVzYnVpbGQ6IHtcblx0XHRsb2FkZXI6ICdqc3gnLFxuXHRcdGluY2x1ZGU6IC9cXC8uKlxcLmpzeD8kLyxcblx0XHRleGNsdWRlOiBbXSxcblx0fSxcblx0b3B0aW1pemVEZXBzOiB7XG5cdFx0ZXNidWlsZE9wdGlvbnM6IHtcblx0XHRcdHBsdWdpbnM6IFtcblx0XHRcdFx0e1xuXHRcdFx0XHRcdG5hbWU6ICdsb2FkLWpzLWZpbGVzLWFzLWpzeCcsXG5cdFx0XHRcdFx0c2V0dXAoYnVpbGQpIHtcblx0XHRcdFx0XHRcdGJ1aWxkLm9uTG9hZCh7IGZpbHRlcjogL3NyY1xcLy4qXFwuanMkLyB9LCBhc3luYyAoYXJncykgPT4gKHtcblx0XHRcdFx0XHRcdFx0bG9hZGVyOiAnanN4Jyxcblx0XHRcdFx0XHRcdFx0Y29udGVudHM6IGF3YWl0IGZzLnJlYWRGaWxlKGFyZ3MucGF0aCwgJ3V0ZjgnKSxcblx0XHRcdFx0XHRcdH0pKTtcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHR9LFxuXHRcdFx0XSxcblx0XHR9LFxuXHR9LFxuXHR0ZXN0OiB7XG5cdFx0Z2xvYmFsczogdHJ1ZSxcblx0XHRlbnZpcm9ubWVudDogJ2pzZG9tJyxcblx0XHRzZXR1cEZpbGVzOiAnLi90ZXN0cy9zZXR1cC5qcycsXG5cdFx0Y292ZXJhZ2U6IHtcblx0XHRcdHByb3ZpZGVyOiAnYzgnLFxuXHRcdFx0cmVwb3J0ZXI6IFsndGV4dCcsICdqc29uJywgJ2h0bWwnXSxcblx0XHR9LFxuXHR9LFxufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQW1XLFNBQVMsb0JBQW9CO0FBQ2hZLE9BQU8sV0FBVztBQUNsQixPQUFPLFFBQVE7QUFDZixTQUFTLGVBQWU7QUFIeEIsSUFBTSxtQ0FBbUM7QUFLekMsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDM0IsU0FBUyxDQUFDLE1BQU0sQ0FBQztBQUFBLEVBQ2pCLE9BQU87QUFBQSxJQUNOLGVBQWU7QUFBQSxNQUNkLE9BQU87QUFBQSxRQUNOLE1BQU0sUUFBUSxrQ0FBVyxZQUFZO0FBQUEsTUFDdEM7QUFBQSxNQUNBLFFBQVE7QUFBQSxRQUNQLFNBQVM7QUFBQSxVQUNSLE9BQU87QUFBQSxRQUNSO0FBQUEsTUFDRDtBQUFBLElBQ0Q7QUFBQSxFQUNEO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUixRQUFRO0FBQUEsSUFDUixTQUFTO0FBQUEsSUFDVCxTQUFTLENBQUM7QUFBQSxFQUNYO0FBQUEsRUFDQSxjQUFjO0FBQUEsSUFDYixnQkFBZ0I7QUFBQSxNQUNmLFNBQVM7QUFBQSxRQUNSO0FBQUEsVUFDQyxNQUFNO0FBQUEsVUFDTixNQUFNLE9BQU87QUFDWixrQkFBTSxPQUFPLEVBQUUsUUFBUSxlQUFlLEdBQUcsT0FBTyxVQUFVO0FBQUEsY0FDekQsUUFBUTtBQUFBLGNBQ1IsVUFBVSxNQUFNLEdBQUcsU0FBUyxLQUFLLE1BQU0sTUFBTTtBQUFBLFlBQzlDLEVBQUU7QUFBQSxVQUNIO0FBQUEsUUFDRDtBQUFBLE1BQ0Q7QUFBQSxJQUNEO0FBQUEsRUFDRDtBQUFBLEVBQ0EsTUFBTTtBQUFBLElBQ0wsU0FBUztBQUFBLElBQ1QsYUFBYTtBQUFBLElBQ2IsWUFBWTtBQUFBLElBQ1osVUFBVTtBQUFBLE1BQ1QsVUFBVTtBQUFBLE1BQ1YsVUFBVSxDQUFDLFFBQVEsUUFBUSxNQUFNO0FBQUEsSUFDbEM7QUFBQSxFQUNEO0FBQ0QsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
