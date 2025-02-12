import { Meta, StoryObj } from '@storybook/react';
import { Textarea, TextareaProps } from '.';
import { textareaVariants } from './variants';

export default {
    title: 'Components/Textarea',
    component: Textarea,
    args: {
        variant: 'normal',
    },
    argTypes: {
        variant: {
            control: {
                type: 'inline-radio',
            },
            options: Object.keys(textareaVariants.variants.variant),
        },
        size: {
            control: {
                type: 'inline-radio',
            },
            options: Object.keys(textareaVariants.variants.size),
        },
    },
    tags: ['autodocs'],
} as Meta<TextareaProps>;

export const Default: StoryObj<TextareaProps> = {
    render: args => {
        return (
            <Textarea {...args}>
                <Textarea.Field placeholder="Digite aqui..." />
            </Textarea>
        );
    },
};
