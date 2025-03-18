import { Meta, StoryObj } from '@storybook/react';
import { List } from './list';
import { Item } from '../item';
import { Divider } from '../divider';

export default {
    title: 'Components/List',
    component: List,
    args: {
        horizontal: false,
    },
    argTypes: {
        horizontal: {
            description: '',
        },
    },
    tags: ['autodocs'],
} as Meta<typeof List>;

export const Default: StoryObj<typeof List> = {
    render: args => (
        <List {...args}>
            <Item>Maçã</Item>
            <Item>Pera</Item>
            <Item>Banana</Item>
        </List>
    ),
};

export const Horizontal: StoryObj<typeof List> = {
    name: 'Horizontal',
    render: args => (
        <List {...args}>
            <List.Header>
                <List.Title>Título da lista</List.Title>
            </List.Header>
            <Divider />
            <Item>Maçã</Item>
            <Item>Pera</Item>
            <Item>Banana</Item>
        </List>
    ),
};

export const WithHeader: StoryObj<typeof List> = {
    name: 'Lista com título',
    render: args => (
        <List {...args}>
            <List.Header>
                <List.Title>Título da lista</List.Title>
            </List.Header>
            <Divider />
            <Item>Maçã</Item>
            <Item>Pera</Item>
            <Item>Banana</Item>
        </List>
    ),
};
