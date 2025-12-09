import { Meta, StoryObj } from '@storybook/react';
import { MagicButton } from '.';
import { magicButtonVariants } from './variants';
import { fn } from '@storybook/test';

export default {
    title: 'Components/MagicButton',
    args: {
        size: 'md',
        onClick: fn(),
    },
    argTypes: {
        as: {
            control: {
                type: 'select',
            },
            options: ['a', 'button'],
            description: 'Tag que irá receber a estilização do botão.',
        },
        circle: {
            description: 'Adiciona o tipo circular.',
            control: {
                type: 'boolean',
            },
        },
        size: {
            description: 'Tamanho do botão.',
            options: Object.keys(magicButtonVariants.variants.size),
            control: {
                type: 'inline-radio',
            },
        },
        onClick: {
            description: 'Função a ser executada com o click do botão.',
        },
    },
    component: MagicButton,
    tags: ['autodocs'],
} as Meta<typeof MagicButton>;

export const Default: StoryObj<typeof MagicButton> = {
    render: args => {
        return <MagicButton {...args}>Botão</MagicButton>;
    },
};

export const Icon: StoryObj<typeof MagicButton> = {
    args: {
        circle: true,
    },
    render: args => {
        return (
            <MagicButton {...args}>
                <i className="fas fa-cart-plus" aria-hidden="true" />
            </MagicButton>
        );
    },
};
