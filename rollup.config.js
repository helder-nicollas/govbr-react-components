import { dts } from 'rollup-plugin-dts';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import terser from '@rollup/plugin-terser';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import generatePackageJson from 'rollup-plugin-generate-package-json';
import packageJson from './package.json';
import fs from 'fs';

const EXCLUDE_FOLDERS = ['types', 'styles', 'stories'];
const DIST_PATH = './dist';

if (!fs.existsSync(DIST_PATH)) {
    fs.mkdirSync(DIST_PATH, { recursive: true });
}

const getComponentsFolder = path =>
    fs
        .readdirSync(path)
        .filter(file => fs.statSync(path + '/' + file).isDirectory())
        .filter(folder => !EXCLUDE_FOLDERS.includes(folder));

const plugins = [
    peerDepsExternal(),
    resolve(),
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
            main: './index.js',
            module: './index.mjs',
            types: './index.d.ts',
            exports: {
                '.': {
                    import: {
                        types: './index.d.mts',
                        default: './index.mjs',
                    },
                    require: {
                        types: './index.d.ts',
                        default: './index.js',
                    },
                },
            },
        },
    }),
];

const componentsBuild = getComponentsFolder('./src')
    .map(folder => {
        return [
            {
                input: `src/${folder}/index.ts`,
                output: {
                    file: `dist/${folder}/index.mjs`,
                    sourcemap: true,
                    exports: 'named',
                    format: 'esm',
                },
                plugins: subfolderPlugins(folder),
                external: ['react', 'react-dom'],
            },
            {
                input: `src/${folder}/index.ts`,
                output: {
                    file: `dist/${folder}/index.js`,
                    sourcemap: true,
                    exports: 'named',
                    format: 'cjs',
                },
                plugins,
                external: ['react', 'react-dom'],
            },
            {
                input: `src/${folder}/index.ts`,
                output: [{ file: `dist/${folder}/index.d.mts` }],
                plugins: [dts(), postcss()],
            },
            {
                input: `src/${folder}/index.ts`,
                output: [{ file: `dist/${folder}/index.d.ts` }],
                plugins: [dts(), postcss()],
            },
        ];
    })
    .flat();

const cssBuild = {
    input: 'src/styles/globals.scss',
    output: {
        file: 'dist/styles/globals.css',
        format: 'esm',
    },
    plugins: [
        postcss({
            extensions: ['.scss'],
            minimize: true,
            extract: true,
            sourceMap: true,
            use: ['sass'],
        }),
    ],
    external: ['@govbr-ds/core'],
};

const components = getComponentsFolder('./src');

const exportsObject = {
    './styles/globals.css': {
        default: './styles/globals.css',
    },
    ...components.reduce((acc, folder) => {
        acc[`./${folder}`] = {
            import: `./${folder}/index.mjs`,
            require: `./${folder}/index.js`,
            types: `./${folder}/index.d.ts`,
        };
        return acc;
    }, {}),
};

const updatedPackageJson = {
    ...packageJson,
    exports: exportsObject,
};

fs.copyFileSync('./package.json', `${DIST_PATH}/package.json`);
fs.writeFileSync(
    `${DIST_PATH}/package.json`,
    JSON.stringify(updatedPackageJson, null, 2),
);
fs.copyFileSync('./README.md', `${DIST_PATH}/README.md`);

export default [cssBuild, ...componentsBuild];
