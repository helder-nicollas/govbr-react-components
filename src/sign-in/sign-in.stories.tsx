import { Meta, StoryObj } from '@storybook/react/*';
import { SignIn } from './sign-in';
import { signInVariants } from './variants';
import { fn } from '@storybook/test';

export default {
    title: 'Components/SignIn',
    component: SignIn,
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
            options: Object.keys(signInVariants.variants.variant),
            description: 'Refere-se à variante a ser aplicada ao botão.',
        },
        children: {
            description: 'Conteúdo do botão (texto, imagem, etc).',
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
            options: Object.keys(signInVariants.variants.size),
        },
        onClick: {
            description: 'Função a ser executada com o click do botão.',
        },
    },
    tags: ['autodocs'],
} as Meta<typeof SignIn>;

export const Default: StoryObj<typeof SignIn> = {
    args: {
        circle: false,
        disabled: false,
        size: 'medium',
        variant: 'primary',
        onClick: fn(),
    },
    render: args => (
        <SignIn {...args}>
            Entrar com&nbsp;<span className="font-bold">gov.br</span>
        </SignIn>
    ),
};
