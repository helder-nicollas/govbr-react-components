import { Meta, StoryObj } from '@storybook/react';
import { Checkbox, CheckboxProps } from '.';
import { checkboxVariants } from './variants';
import { fn } from '@storybook/test';
import { Label } from '../label';
import { CheckboxField, CheckboxFieldProps } from './checkbox-field';

export default {
    title: 'Components/Checkbox',
    component: Checkbox,
    args: {
        variant: 'normal',
        disabled: false,
        withoutLabel: false,
        label: 'Checkbox 01',
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
} as Meta<CheckboxProps>;

export const Default: StoryObj<CheckboxProps & CheckboxFieldProps> = {
    args: {
        onChange: fn(),
    },
    render: ({ variant, withoutLabel, ...args }) => {
        return (
            <Checkbox withoutLabel={withoutLabel} variant={variant}>
                <CheckboxField
                    {...args}
                    withoutLabel={withoutLabel}
                    id="checkbox"
                />
                <Label htmlFor="checkbox">Checkbox 01</Label>
            </Checkbox>
        );
    },
};

export const WithoutLabel: StoryObj<CheckboxProps & CheckboxFieldProps> = {
    name: 'Sem Label',
    args: {
        withoutLabel: true,
        onChange: fn(),
    },
    render: ({ variant, withoutLabel, ...args }) => {
        return (
            <Checkbox withoutLabel={withoutLabel} variant={variant}>
                <CheckboxField
                    {...args}
                    withoutLabel={withoutLabel}
                    id="checkbox"
                />
            </Checkbox>
        );
    },
};
