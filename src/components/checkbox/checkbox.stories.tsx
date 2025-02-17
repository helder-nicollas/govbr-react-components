import { Meta, StoryObj } from '@storybook/react';
import { Checkbox, ICheckboxProps } from '.';
import { checkboxVariants } from './variants';
import { fn } from '@storybook/test';

export default {
    title: 'Components/Checkbox',
    component: Checkbox,
    args: {
        variant: 'normal',
        disabled: false,
        withoutLabel: false,
    },
    argTypes: {
        variant: {
            control: {
                type: 'inline-radio',
            },
            options: Object.keys(checkboxVariants.variants.variant),
        },
    },
    tags: ['autodocs'],
} as Meta<ICheckboxProps>;

export const Default: StoryObj<ICheckboxProps> = {
    args: {
        onChange: fn(),
    },
    render: ({ onChange, checked, ...args }) => {
        return (
            <div className="flex gap-2">
                <Checkbox
                    {...args}
                    id="checkbox"
                    onChange={onChange}
                    checked={checked}
                    label="Checkbox 01"
                ></Checkbox>
            </div>
        );
    },
};
