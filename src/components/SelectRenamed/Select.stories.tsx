import { Meta, StoryObj } from '@storybook/react';
import { Select } from './components';
import {
    ISelectTriggerProps,
    selecTriggerVariants,
} from './components/SelectTrigger';

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
            options: Object.keys(selecTriggerVariants.variants.variant),
        },
        size: {
            control: {
                type: 'inline-radio',
            },
            options: Object.keys(selecTriggerVariants.variants.size),
        },
    },
    tags: ['autodocs'],
} as Meta<ISelectTriggerProps>;

export const Default: StoryObj<ISelectTriggerProps> = {
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
                <Select.Trigger {...args}>
                    <Select.Trigger.Field />
                    <Select.Trigger.Button />
                </Select.Trigger>
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
