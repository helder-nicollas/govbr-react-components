import type { StorybookConfig } from '@storybook/nextjs';
import path from 'path';

const config: StorybookConfig = {
    stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],

    addons: [
        '@storybook/addon-onboarding',
        '@storybook/addon-essentials',
        '@storybook/addon-interactions',
        '@chromatic-com/storybook',
    ],

    staticDirs: [path.resolve('./public')],

    framework: {
        name: '@storybook/react-vite',
        options: {},
    },

    typescript: {
        reactDocgen: 'react-docgen-typescript',
    },
};
export default config;
