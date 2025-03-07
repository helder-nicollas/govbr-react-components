import { Meta, StoryObj } from '@storybook/react';
import { Message } from './message';
import { iconVariants, messageVariants } from './variants';
import { fn } from '@storybook/test';

export default {
    title: 'Components/Message',
    component: Message,
    argTypes: {
        icon: {
            control: {
                type: 'inline-radio',
            },
            options: Object.keys(messageVariants.variants.type),
            description: 'Tipo do ícone.',
        },
        type: {
            control: {
                type: 'inline-radio',
            },
            options: Object.keys(iconVariants.variants.icon),
            description: 'Tipo da mensagem.',
        },
        messageBody: {
            description: 'Corpo da mensagem.',
        },
        messageTitle: {
            description: 'Título da mensagem',
        },
        onClose: {
            description: 'Função que será disparada ao fechar a mensagem',
        },
    },
    tags: ['autodocs'],
} as Meta<typeof Message>;

export const Default: StoryObj<typeof Message> = {
    args: {
        type: 'success',
        icon: 'success',
        messageBody:
            'Seus dados foram alterados conforme preenchimento do formulário.',
        messageTitle: 'Sucesso.',
        onClose: fn(),
    },
};
