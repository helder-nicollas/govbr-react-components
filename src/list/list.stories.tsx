import { Meta, StoryObj } from '@storybook/react';
import { ListProps, List } from './list';
import { Item } from '../item';

export default {
    title: 'Components/List',
    component: List,
    args: {
        horizontal: false,
    },
    tags: ['autodocs'],
} as Meta<ListProps>;

export const Default: StoryObj<ListProps> = {
    render: args => (
        <List {...args}>
            <Item>Maçã</Item>
            <Item>Pera</Item>
            <Item>Banana</Item>
        </List>
    ),
};
