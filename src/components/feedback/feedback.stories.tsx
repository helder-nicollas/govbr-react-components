import { Meta, StoryObj } from '@storybook/react';
import { Feedback, IFeedbackProps } from '.';
import { inputMessageIconVariants, inputMessageVariants } from './variants';

export default {
    title: 'Components/Feedback',
    component: Feedback,
    args: {
        type: 'success',
        message: 'Mensagem...',
    },
    argTypes: {
        type: {
            control: {
                type: 'inline-radio',
            },
            options: Object.keys(inputMessageVariants.variants.type),
        },
        icon: {
            control: {
                type: 'inline-radio',
            },
            options: Object.keys(inputMessageIconVariants.variants.icon),
        },
    },
    tags: ['autodocs'],
} as Meta<IFeedbackProps>;

export const Default: StoryObj = {};
