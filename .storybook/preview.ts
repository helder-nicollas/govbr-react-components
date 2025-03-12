import { themes } from '@storybook/theming';
import type { Preview } from '@storybook/react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../src/styles/globals.css';

const preview: Preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
        docs: {
            theme: themes.light,
        },
    },
    tags: ['autodocs', 'autodocs'],
};

export default preview;
