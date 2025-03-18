import { Meta, StoryObj } from '@storybook/react';
import { Feedback } from './feedback';
import { feedbackVariants } from './variants';

export default {
    title: 'Components/Feedback',
    component: Feedback,
    argTypes: {
        variant: {
            control: {
                type: 'inline-radio',
            },
            options: Object.keys(feedbackVariants.variants.variant),
        },
    },
    tags: ['autodocs'],
} as Meta<typeof Feedback>;

export const Success: StoryObj<typeof Feedback> = {
    args: {
        variant: 'success',
        message: 'Mensagem para o usuário.',
    },
    render: args => <Feedback {...args} />,
};
export const Danger: StoryObj<typeof Feedback> = {
    args: {
        variant: 'danger',
        message: 'Mensagem para o usuário.',
    },
    render: args => <Feedback {...args} />,
};
export const Info: StoryObj<typeof Feedback> = {
    args: {
        variant: 'info',
        message: 'Mensagem para o usuário.',
    },
    render: args => <Feedback {...args} />,
};
export const Warning: StoryObj<typeof Feedback> = {
    args: {
        variant: 'warning',
        message: 'Mensagem para o usuário.',
    },
    render: args => <Feedback {...args} />,
};
