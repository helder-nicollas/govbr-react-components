import { dts } from 'rollup-plugin-dts';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import terser from '@rollup/plugin-terser';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import copy from 'rollup-plugin-copy';
import generatePackageJson from 'rollup-plugin-generate-package-json';
import packageJson from './package.json';
import fs from 'fs';
import replace from '@rollup/plugin-replace';
import json from '@rollup/plugin-json';

const EXCLUDE_FOLDERS = ['types', 'styles', 'stories'];

const getComponentsFolder = path =>
    fs
        .readdirSync(path)
        .filter(file => fs.statSync(path + '/' + file).isDirectory())
        .filter(folder => !EXCLUDE_FOLDERS.includes(folder));

const getFiles = path =>
    fs
        .readdirSync(path)
        .filter(file => fs.statSync(path + '/' + file).isFile());

const plugins = [
    peerDepsExternal(),
    resolve(),
    replace({
        // eslint-disable-next-line no-undef
        __IS_DEV__: process.env.NODE_ENV === 'development',
    }),
    commonjs(),
    postcss(),
    typescript({
        allowJs: true,
        compilerOptions: {
            declaration: false,
            emitDeclarationOnly: false,
        },
    }),
    terser(),
];

const subfolderPlugins = folderName => [
    ...plugins,
    generatePackageJson({
        baseContents: {
            name: `${packageJson.name}/${folderName}`,
            private: true,
            main: '../cjs/index.js', // --> points to cjs format entry point of whole library
            module: './index.js', // --> points to esm format entry point of individual component
            types: './index.d.ts', // --> points to types definition file of individual component
        },
    }),
];

const componentsBuild = getComponentsFolder('./src')
    .map(folder => {
        return [
            {
                input: `src/${folder}/index.ts`,
                output: {
                    file: `dist/${folder}/index.js`,
                    sourcemap: true,
                    exports: 'named',
                    format: 'esm',
                },
                plugins: subfolderPlugins(folder),
                external: ['react', 'react-dom'],
            },
            {
                input: `src/${folder}/index.ts`,
                output: [{ file: `dist/${folder}/index.d.ts` }],
                plugins: [dts()],
            },
        ];
    })
    .flat();

const cssBuild = getFiles('./src/styles').map(file => {
    return {
        input: `src/styles/${file}`,
        plugins: [
            terser(),
            postcss({
                extract: `dist/styles/${file}`,
                minimize: true,
            }),
            copy({
                targets: [
                    {
                        src: `src/styles/${file}`,
                        dest: 'dist/styles',
                    },
                ],
            }),
        ],
    };
});

const packageCopy = {
    input: `package.json`,
    plugins: [
        json(),
        copy({
            targets: [
                {
                    src: 'package.json',
                    dest: 'dist',
                },
                {
                    src: 'README.md',
                    dest: 'dist',
                },
            ],
        }),
    ],
};

export default [...componentsBuild, ...cssBuild, packageCopy];
