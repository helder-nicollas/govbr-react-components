import { Meta, StoryObj } from '@storybook/react';
import { Feedback, FeedbackProps } from '.';
import { inputMessageIconVariants, inputMessageVariants } from './variants';

export default {
    title: 'Components/Feedback',
    component: Feedback,
    args: {
        variant: 'success',
        iconVariant: 'success',
        message: 'Mensagem para o usuário',
    },
    argTypes: {
        variant: {
            control: {
                type: 'inline-radio',
            },
            options: Object.keys(inputMessageVariants.variants.variant),
        },
        iconVariant: {
            control: {
                type: 'inline-radio',
            },
            options: Object.keys(inputMessageIconVariants.variants.iconVariant),
        },
    },
    tags: ['autodocs'],
} as Meta<FeedbackProps>;

export const Default: StoryObj = {};
