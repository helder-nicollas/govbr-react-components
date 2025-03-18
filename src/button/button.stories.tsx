import { Meta, StoryObj } from '@storybook/react';
import { Button, ButtonProps } from './button';
import { buttonVariants } from './variants';
import { fn } from '@storybook/test';

export default {
    title: 'Components/Button',
    component: Button,
    args: {
        variant: 'transparent',
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
            description: 'Tag que irá receber a estilização do botão.',
        },
        variant: {
            control: {
                type: 'inline-radio',
            },
            options: Object.keys(buttonVariants.variants.variant),
            description: 'Refere-se à variante a ser aplicada ao botão.',
        },
        children: {
            description: 'Conteúdo do botão (texto, imagem, etc).',
        },
        loading: {
            description: 'Adiciona o estado de loading.',
        },
        disabled: {
            description: 'Adiciona o estado de desabilitado.',
        },
        circle: {
            description: 'Adiciona o tipo circular.',
        },
        size: {
            description: 'Tamanho do botão.',
            control: {
                type: 'inline-radio',
            },
            options: Object.keys(buttonVariants.variants.size),
        },
        onClick: {
            description: 'Função a ser executada com o click do botão.',
        },
    },
    tags: ['autodocs'],
} as Meta<ButtonProps>;

export const Default: StoryObj<typeof Button> = {
    name: 'Default (Transparent)',
    render: args => <Button {...args}>Botão</Button>,
};

export const Primary: StoryObj<typeof Button> = {
    args: {
        variant: 'primary',
    },
    render: args => <Button {...args}>Botão</Button>,
};

export const Outline: StoryObj<typeof Button> = {
    args: {
        variant: 'outline',
    },
    render: args => <Button {...args}>Botão</Button>,
};

export const Circle: StoryObj<typeof Button> = {
    args: {
        variant: 'primary',
        circle: true,
    },
    render: args => <Button {...args}>B</Button>,
};

export const Loading: StoryObj<typeof Button> = {
    args: {
        variant: 'primary',
        loading: true,
    },
    render: args => <Button {...args}>Botão</Button>,
};
