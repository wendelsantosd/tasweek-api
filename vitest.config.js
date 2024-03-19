import tsconfigPaths from 'vitest-tsconfig-paths';
import { defineConfig } from 'vitest/config';

export default defineConfig({
	test: {
		globals: true,
		setupFiles: ['./vitest.setup.ts'],
	},
	plugins: [tsconfigPaths()]
});
