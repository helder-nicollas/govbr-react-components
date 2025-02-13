import { Meta, StoryObj } from '@storybook/react';
import { itemVariants } from './variants';
import { Item, ItemProps } from '.';

export default {
    title: 'Components/Item',
    component: Item,
    args: {
        state: 'normal',
        children: 'Item',
        Element: 'button',
    },
    argTypes: {
        state: {
            control: {
                type: 'inline-radio',
            },
            options: Object.keys(itemVariants.variants.state),
        },
        Element: {
            control: { type: 'select' },
            options: ['button', 'a', 'div'],
        },
    },
    tags: ['autodocs'],
} as Meta<ItemProps>;

export const Default: StoryObj<ItemProps> = {};
