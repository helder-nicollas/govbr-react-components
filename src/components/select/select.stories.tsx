import { Meta, StoryObj } from '@storybook/react';
import { Select } from '.';
import { SelectTrigger, SelectTriggerProps } from '../select-trigger';
import { selectTriggerVariants } from '../select-trigger/variants';

export default {
    title: 'Components/Select',
    component: Select,
    id: 'Select',
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
            options: Object.keys(selectTriggerVariants.variants.variant),
        },
        size: {
            control: {
                type: 'inline-radio',
            },
            options: Object.keys(selectTriggerVariants.variants.size),
        },
    },
    tags: ['autodocs'],
} as Meta<SelectTriggerProps>;

export const Default: StoryObj<SelectTriggerProps> = {
    render: args => {
        const array = [
            {
                label: 'Maçã',
                value: '1',
            },
            {
                label: 'Pera',
                value: '2',
            },
            {
                label: 'Banana',
                value: '3',
            },
        ];

        return (
            <Select>
                <SelectTrigger {...args}>
                    <SelectTrigger.Field />
                </SelectTrigger>
                <Select.List>
                    {array.map(item => (
                        <Select.Item value={item.value} key={item.value}>
                            {item.label}
                        </Select.Item>
                    ))}
                </Select.List>
            </Select>
        );
    },
};
