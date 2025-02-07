/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

import type { Config } from 'jest';

const config: Config = {
    transform: {
        '^.+\\.(t|j)sx?$': [
            '@swc/jest',
            {
                jsc: {
                    parser: {
                        syntax: 'typescript',
                        tsx: true,
                        decorators: true,
                    },
                    keepClassNames: true,
                    transform: {
                        legacyDecorator: true,
                        decoratorMetadata: true,
                        react: {
                            runtime: 'automatic',
                        },
                    },
                },
                module: {
                    type: 'es6',
                    noInterop: false,
                },
            },
        ],
    },
    transformIgnorePatterns: ['node_modules/(?!@govbr-ds)/'],
    setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
    clearMocks: true,
    moduleFileExtensions: [
        'js',
        'mjs',
        'cjs',
        'jsx',
        'ts',
        'tsx',
        'json',
        'node',
    ],
    testEnvironment: 'jsdom',
    moduleNameMapper: {
        '\\.(css|less|scss)$': 'identity-obj-proxy',
    },
};

export default config;
