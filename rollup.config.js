import { dts } from 'rollup-plugin-dts';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import terser from '@rollup/plugin-terser';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import copy from 'rollup-plugin-copy';
import packageJson from './package.json';

export default [
    {
        input: 'src/index.ts',
        output: [
            {
                file: packageJson.main,
                format: 'cjs',
                sourcemap: true,
            },
            {
                file: packageJson.module,
                format: 'esm',
                sourcemap: true,
            },
        ],
        plugins: [
            peerDepsExternal(),
            resolve(),
            commonjs(),
            typescript({ tsconfig: './tsconfig.json' }),
            terser(),
            postcss(),
            copy({
                targets: [
                    {
                        src: 'src/styles/**/*.css',
                        dest: 'dist/styles',
                    },
                ],
            }),
        ],
        external: ['react', 'react-dom'],
    },
    {
        input: './dist/types/src/index.d.ts',
        output: [{ file: packageJson.types }],
        plugins: [dts()],
    },
];
