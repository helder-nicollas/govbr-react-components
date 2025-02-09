import { Meta, StoryObj } from '@storybook/react';
import { IInputProps, inputVariants } from './InputRoot';
import { Input } from '.';

export default {
    title: 'Components/Input',
    component: Input.Root,
    id: 'Input',
    args: {
        variant: 'normal',
        size: 'medium',
        highlight: false,
    },
    argTypes: {
        variant: {
            control: {
                type: 'inline-radio',
            },
            options: Object.keys(inputVariants.variants.variant),
        },
        size: {
            control: {
                type: 'inline-radio',
            },
            options: Object.keys(inputVariants.variants.size),
        },
    },
    tags: ['autodocs'],
} as Meta<IInputProps>;

export const Default: StoryObj<IInputProps> = {
    render: args => {
        return (
            <Input.Root {...args}>
                <Input.Field placeholder="Usuário" />
            </Input.Root>
        );
    },
};
export const WithButton: StoryObj<IInputProps> = {
    render: args => {
        return (
            <Input.Root {...args} withButton>
                <Input.Field placeholder="Usuário" />
                <Input.Button>
                    <i className="fas fa-eye" aria-hidden="true" />
                </Input.Button>
            </Input.Root>
        );
    },
};

export const WithIcon: StoryObj<IInputProps> = {
    render: args => {
        return (
            <Input.Root {...args}>
                <Input.Group>
                    <Input.Icon>
                        <i className="fas fa-eye" aria-hidden="true" />
                    </Input.Icon>
                    <Input.Field placeholder="Usuário" />
                </Input.Group>
            </Input.Root>
        );
    },
};
