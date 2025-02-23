import { Meta, StoryObj } from '@storybook/react';
import { IMultiSelectProps, MultiSelect } from '.';
import { fn } from '@storybook/test';

export default {
    title: 'Components/MultiSelect',
    component: MultiSelect,
    tags: ['autodocs'],
} as Meta;

export const Default: StoryObj<IMultiSelectProps> = {
    args: {
        onChangeValue: fn(),
    },
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
            <MultiSelect {...args}>
                <MultiSelect.Trigger>
                    <MultiSelect.Trigger.Field />
                    <MultiSelect.Trigger.Button />
                </MultiSelect.Trigger>
                <MultiSelect.List>
                    <MultiSelect.AllItems />
                    {array.map(item => (
                        <MultiSelect.Item value={item.value} key={item.value}>
                            {item.label}
                        </MultiSelect.Item>
                    ))}
                </MultiSelect.List>
            </MultiSelect>
        );
    },
};
