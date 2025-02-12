import { Meta, StoryObj } from '@storybook/react';
import { Checkbox, ICheckboxProps } from '.';
import { checkboxVariants } from './variants';
import '@govbr-ds/core/dist/components/checkbox/checkbox.min.css';
import { fn } from '@storybook/test';
import { CheckboxFieldProps } from './checkbox-field';
import { Label } from '../label';

export default {
    title: 'Components/Checkbox',
    component: Checkbox,
    args: {
        variant: 'normal',
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
} as Meta<ICheckboxProps & CheckboxFieldProps>;

export const Default: StoryObj<ICheckboxProps & CheckboxFieldProps> = {
    args: {
        onChange: fn(),
    },
    render: ({ onChange, checked, ...args }) => {
        return (
            <div className="flex gap-2">
                <Checkbox {...args}>
                    <Checkbox.Field
                        id="checkbox"
                        onChange={onChange}
                        checked={checked}
                    />
                </Checkbox>
                <Label htmlFor="checkbox" className="cursor-pointer">
                    Checkbox 01
                </Label>
            </div>
        );
    },
};
