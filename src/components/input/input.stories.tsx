import { Meta, StoryObj } from '@storybook/react';
import { IInputProps, Input } from '.';
import { inputVariants } from './variants';

export default {
    title: 'Components/Input',
    component: Input,
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
            <Input {...args}>
                <Input.Field placeholder="Usuário" />
            </Input>
        );
    },
};
export const WithButton: StoryObj<IInputProps> = {
    render: args => {
        return (
            <Input {...args} withButton>
                <Input.Field placeholder="Usuário" />
                <Input.Button>
                    <i className="fas fa-eye" aria-hidden="true" />
                </Input.Button>
            </Input>
        );
    },
};

export const WithIcon: StoryObj<IInputProps> = {
    render: args => {
        return (
            <Input {...args}>
                <Input.Group>
                    <Input.Icon>
                        <i className="fas fa-eye" aria-hidden="true" />
                    </Input.Icon>
                    <Input.Field placeholder="Usuário" />
                </Input.Group>
            </Input>
        );
    },
};
