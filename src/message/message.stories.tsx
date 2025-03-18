import { Meta, StoryObj } from '@storybook/react';
import { Message } from './message';
import { messageVariants } from './variants';
import { fn } from '@storybook/test';

export default {
    title: 'Components/Message',
    component: Message,
    argTypes: {
        variant: {
            control: {
                type: 'inline-radio',
            },
            options: Object.keys(messageVariants.variants.variant),
            description: 'Tipo do ícone.',
        },
        ariaLabel: {
            description: 'Atributo de acessibilidade para o componente.',
        },
        messageBody: {
            description: 'Corpo da mensagem.',
        },
        messageTitle: {
            description: 'Título da mensagem.',
        },
        onClose: {
            description: 'Função que será disparada ao fechar a mensagem.',
        },
    },
    tags: ['autodocs'],
} as Meta<typeof Message>;

export const Default: StoryObj<typeof Message> = {
    args: {
        variant: 'success',
        messageBody:
            'Seus dados foram alterados conforme preenchimento do formulário.',
        messageTitle: 'Sucesso.',
        onClose: fn(),
    },
};
