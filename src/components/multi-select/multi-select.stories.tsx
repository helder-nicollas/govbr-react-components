import { Meta, StoryObj } from '@storybook/react';
import { IMultiSelectProps, MultiSelect } from '.';
import { fn } from '@storybook/test';
import { SelectTrigger } from '../select-trigger';

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
                <SelectTrigger>
                    <SelectTrigger.Field />
                </SelectTrigger>
                <MultiSelect.List>
                    <MultiSelect.SelectAll />
                    {array.map((item, index) => (
                        <MultiSelect.Item
                            index={index}
                            value={item.value}
                            key={item.value}
                            defaultSelected={['1', '2'].includes(item.value)}
                        >
                            {item.label}
                        </MultiSelect.Item>
                    ))}
                </MultiSelect.List>
            </MultiSelect>
        );
    },
};
