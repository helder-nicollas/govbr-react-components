import { Meta, StoryObj } from '@storybook/react';
import { Item, ItemProps } from '.';

export default {
    title: 'Components/Item',
    component: Item,
    args: {
        selected: false,
        active: false,
        children: 'Item',
        Element: 'button',
    },
    argTypes: {
        Element: {
            control: { type: 'select' },
            options: ['button', 'a', 'div'],
        },
    },
    tags: ['autodocs'],
} as Meta<ItemProps>;

export const Default: StoryObj<ItemProps> = {};
