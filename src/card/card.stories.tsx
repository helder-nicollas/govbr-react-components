import { Meta, StoryObj } from '@storybook/react';
import { Card } from './card';
import { CardHeader } from './card-header';
import { CardFooter } from './card-footer';
import { CardContent } from './card-content';
import { Button } from '../button';

export default {
    title: 'Components/Card',
    argTypes: {
        disabled: {
            description: 'Adiciona o estado de desabilitado',
        },
    },
    component: Card,
    subcomponents: {
        CardHeader,
        CardFooter,
        CardContent,
    },
    tags: ['autodocs'],
} as Meta<typeof Card>;

export const Default: StoryObj<typeof Card> = {
    render: args => {
        return (
            <Card {...args} className="max-w-96">
                <CardHeader>
                    <h1 className="text-xl font-bold">Componente card</h1>
                </CardHeader>
                <CardContent>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit
                    Dolorem expedita, perferendis consequuntur aspernatur,
                    laboriosam consectetur pariatur, nemo unde voluptate aperiam
                    similique quis incidunt perspiciatis! Saepe odit earum
                    mollitia quis corrupti
                </CardContent>
                <CardFooter>
                    <Button variant="primary">Abrir</Button>
                </CardFooter>
            </Card>
        );
    },
};

export const Disabled: StoryObj<typeof Card> = {
    args: {
        disabled: true,
    },
    render: args => {
        return (
            <Card {...args}>
                <CardHeader>
                    <h1 className="text-xl font-bold">Componente card</h1>
                </CardHeader>
                <CardContent>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit
                    Dolorem expedita, perferendis consequuntur aspernatur,
                    laboriosam consectetur pariatur, nemo unde voluptate aperiam
                    similique quis incidunt perspiciatis! Saepe odit earum
                    mollitia quis corrupti
                </CardContent>
                <CardFooter>
                    <Button disabled>Abrir</Button>
                </CardFooter>
            </Card>
        );
    },
};
