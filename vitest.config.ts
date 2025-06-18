import { defineConfig } from 'vitest/config';
import { config } from 'dotenv';

export default defineConfig({
    test: {
        environment: 'node',
        env: {
            ...config().parsed,
        },
        globals: true,
        include: ['tests/**/*.test.ts'],
        setupFiles: ['tests/setup.ts'],
    },
    resolve: {
        alias: [
            {
                find: '@nekolab/hanime',
                replacement: '../src/index.ts',
            },
        ],
    },
});
