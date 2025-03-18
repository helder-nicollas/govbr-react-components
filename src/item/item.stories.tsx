import { Meta, StoryObj } from '@storybook/react';
import { Item, ItemProps } from '.';

/***
 * O componente Item renderiza o componente br-item do *dsgov*.
 * Com o objetivo de trazer uma maior flexibilidade ao componente,
 * ele conta com uma prop **as**, onde é possível renderizar o componente com
 * outras tags, **a** e até mesmo com o **Link** do NextJs.
 */
export default {
    title: 'Components/Item',
    component: Item,
    argTypes: {
        selected: {
            description: 'Adiciona o estado de selecionado.',
        },
        active: {
            description: 'Adiciona o estado de ativo.',
        },
        as: {
            control: { type: 'select' },
            options: ['button', 'a', 'div', 'li'],
            description: 'Tag que irá receber os estilos do Item.',
        },
    },
    tags: ['autodocs'],
} as Meta<ItemProps>;

export const Default: StoryObj<ItemProps> = {
    args: {
        selected: false,
        active: false,
        children: 'Item',
    },
};
