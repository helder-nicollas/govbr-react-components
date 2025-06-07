import { Meta, StoryObj } from '@storybook/react';
import { Textarea, TextareaProps } from '.';
import { textareaVariants } from './variants';
import { TextareaField } from './textarea-field';

export default {
    title: 'Components/Textarea',
    component: Textarea,
    subcomponents: {
        TextareaField,
    },
    tags: ['autodocs'],
} as Meta<TextareaProps>;

export const Default: StoryObj<TextareaProps> = {
    args: {
        variant: 'normal',
        size: 'medium',
    },
    argTypes: {
        variant: {
            control: {
                type: 'inline-radio',
            },
            options: Object.keys(textareaVariants.variants.variant),
            description: 'Refere-se à variante a ser aplicada ao textarea',
        },
        size: {
            control: {
                type: 'inline-radio',
            },
            options: Object.keys(textareaVariants.variants.size),
            description: 'Tamanho do textarea',
        },
    },
    render: args => {
        return (
            <Textarea {...args}>
                <TextareaField placeholder="Digite aqui..." />
            </Textarea>
        );
    },
};
