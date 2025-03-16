import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
    plugins: [react()],
    server: {
        port: 3000,
    },
    css: {
        postcss: './postcss.config.mjs',
        preprocessorOptions: {
            scss: {
                quietDeps: true,
            },
        },
    },
    resolve: {
        alias: {
            '~@govbr-ds/core': path.resolve(
                __dirname,
                'node_modules/@govbr-ds/core',
            ),
        },
    },
});
