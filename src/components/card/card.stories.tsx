import { Meta, StoryObj } from '@storybook/react';
import { Card, CardProps } from '.';
import { CardHeader } from './card-header';
import { CardFooter } from './card-footer';
import { CardContent } from './card-content';
import { Button } from '../button';
import '@govbr-ds/core/dist/components/card/card.min.css';

export default {
    title: 'Components/Card',
    component: Card,
    subcomponents: {
        CardHeader,
        CardFooter,
        CardContent,
    },
    tags: ['autodocs'],
} as Meta;

export const Default: StoryObj<CardProps> = {
    render: args => {
        return (
            <Card {...args} className="max-w-96">
                <Card.Header>
                    <h1 className="text-xl font-bold">Componente card</h1>
                </Card.Header>
                <Card.Content>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Dolorem expedita, perferendis consequuntur aspernatur,
                    laboriosam consectetur pariatur, nemo unde voluptate aperiam
                    similique quis incidunt perspiciatis! Saepe odit earum
                    mollitia quis corrupti.
                </Card.Content>
                <Card.Footer>
                    <Button>Abrir</Button>
                </Card.Footer>
            </Card>
        );
    },
};

export const Disabled: StoryObj<CardProps> = {
    render: args => {
        return (
            <Card {...args}>
                <Card.Header>
                    <h1 className="text-xl font-bold">Componente card</h1>
                </Card.Header>
                <Card.Content>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Dolorem expedita, perferendis consequuntur aspernatur,
                    laboriosam consectetur pariatur, nemo unde voluptate aperiam
                    similique quis incidunt perspiciatis! Saepe odit earum
                    mollitia quis corrupti.
                </Card.Content>
                <Card.Footer>
                    <Button disabled>Abrir</Button>
                </Card.Footer>
            </Card>
        );
    },
};
