import { Meta, StoryObj } from '@storybook/react';
import { IListProps, List } from '.';
import { Item } from '../item';

export default {
    title: 'Components/List',
    component: List,
    args: {
        horizontal: false,
    },
    tags: ['autodocs'],
} as Meta<IListProps>;

export const Default: StoryObj<IListProps> = {
    render: args => (
        <List {...args}>
            <Item>Maçã</Item>
            <Item>Pera</Item>
            <Item>Banana</Item>
        </List>
    ),
};
