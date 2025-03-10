import { Meta, StoryObj } from '@storybook/react';
import { Item, ItemProps } from '.';

/***
 * O componente Item renderiza o componente br-item do *dsgov*.
 * Com o objetivo de trazer uma maior flexibilidade ao componente,
 * o componente conta com uma prop ELement, onde é possível renderizar o componente com as
 * tags button, a e até mesmo com o Link do NextJs.
 */
export default {
    title: 'Components/Item',
    component: Item,
    tags: ['autodocs'],
} as Meta<ItemProps>;

export const Default: StoryObj<ItemProps> = {
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
};
