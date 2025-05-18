import { Meta, StoryObj } from '@storybook/react';
import { InputProps, Input } from '.';
import { inputVariants } from './variants';
import { InputField } from './Input-field';
import { InputButton } from './input-button';
import { InputGroup } from './input-group';
import { InputIcon } from './input-icon';
import { Label } from '../label';

/***
 * Renderiza um composto e flexível Input.
 * Ele é formado por quatro outros componentes:
 *
 * - InputField: Tag **input**
 * - InputButton: Botão do input
 * - InputGroup: Agrupamento do input para utilizar com ícones
 * - InputIcon: Ícone do input
 *
 *
 */
export default {
    title: 'Components/Input',
    component: Input,
    subcomponents: {
        InputField,
        InputButton,
        InputGroup,
        InputIcon,
    },
    id: 'Input',
    args: {
        variant: 'normal',
        size: 'medium',
        highlight: false,
    },
    argTypes: {
        variant: {
            description: 'Refere-se à variante que será aplicada no input.',
            control: {
                type: 'inline-radio',
            },
            options: Object.keys(inputVariants.variants.variant),
        },
        size: {
            description: 'Tamanho do input.',
            control: {
                type: 'inline-radio',
            },
            options: Object.keys(inputVariants.variants.size),
        },
        highlight: {
            description: 'Input com destaque.',
        },
        withButton: {
            description: 'Deve ser marcada ao utilizar botão no input.',
        },
    },
    tags: ['autodocs'],
} as Meta<InputProps>;

export const Default: StoryObj<InputProps> = {
    render: args => {
        return (
            <Input {...args}>
                <Label htmlFor="input">Nome de usuário:</Label>
                <Input.Field placeholder="Ex. joaogovbr" id="input" />
            </Input>
        );
    },
};

/***
 * Para utilizar o input com um botão, é necessário
 * o botão e o component <code>InputField</code> estejam dentro do componente input group.
 * Também é preciso que o componente <code>Input</code> esteja com a flag **withButton** marcada, conforme o exemplo abaixo:
 */
export const WithButton: StoryObj<InputProps> = {
    name: 'Input com botão',
    render: args => {
        return (
            <Input {...args} withButton>
                <Label htmlFor="input">Nome de usuário:</Label>
                <Input.Field placeholder="Ex. joaogovbr" id="input" />
                <Input.Button>
                    <i className="fas fa-eye" aria-hidden="true" />
                </Input.Button>
            </Input>
        );
    },
};

/***
 * Para utilizar o input com um ícone, é necessário
 * o ícone e o component <code>InputField</code> estejam dentro do componente input group.
 */
export const WithIcon: StoryObj<InputProps> = {
    name: 'Input com ícone',
    render: args => {
        return (
            <Input {...args}>
                <Label htmlFor="input">Nome de usuário:</Label>
                <Input.Group>
                    <Input.Icon>
                        <i className="fas fa-eye" aria-hidden="true" />
                    </Input.Icon>
                    <Input.Field placeholder="Ex. joaogovbr" id="input" />
                </Input.Group>
            </Input>
        );
    },
};
