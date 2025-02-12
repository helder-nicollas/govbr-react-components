import { Meta, StoryObj } from '@storybook/react';
import { Button, ButtonProps } from './Button';
import { buttonVariants } from './variants';
import { fn } from '@storybook/test';

export default {
    title: 'Components/Button',
    component: Button,
    args: {
        variant: 'primary',
        children: 'Button',
        loading: false,
        disabled: false,
        onClick: fn(),
    },
    argTypes: {
        variant: {
            control: {
                type: 'inline-radio',
            },
            options: Object.keys(buttonVariants.variants.variant),
        },
    },
    tags: ['autodocs'],
} as Meta<ButtonProps>;

export const Default: StoryObj = {};
