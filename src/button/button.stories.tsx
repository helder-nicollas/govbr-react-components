import { Meta, StoryObj } from '@storybook/react';
import { Button, ButtonProps } from './button';
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
        circle: false,
        size: 'medium',
        onClick: fn(),
    },
    argTypes: {
        as: {
            control: {
                type: 'select',
            },
            options: ['a', 'button', 'div', 'li'],
            description: 'Tag que irá receber a estilização d botão',
        },
        variant: {
            control: {
                type: 'inline-radio',
            },
            options: Object.keys(buttonVariants.variants.variant),
            description: 'Refere-se à variante a ser aplicada ao botão',
        },
        children: {
            description: 'Conteúdo do botão (texto, imagem, etc).',
        },
        loading: {
            description: 'Adiciona o estado de loading',
        },
        disabled: {
            description: 'Adiciona o estado de desabilitado',
        },
        circle: {
            description: 'Adiciona o tipo circular',
        },
        size: {
            description: 'Tamanho do botão',
            control: {
                type: 'inline-radio',
            },
            options: Object.keys(buttonVariants.variants.size),
        },
        onClick: {
            description: 'Função a ser executada com o click do botão',
        },
    },
    tags: ['autodocs'],
} as Meta<ButtonProps>;

export const Default: StoryObj = {
    render: args => (
        <Button as="a" {...args}>
            Botão
        </Button>
    ),
};
