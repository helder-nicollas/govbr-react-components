import { Meta, StoryObj } from '@storybook/react';
import { Select } from '.';
import { SelectTrigger } from '../select-trigger';
import { SelectList } from './select-list';
import { SelectItem } from './select-item';
import { fn } from '@storybook/test';

export default {
    title: 'Components/Select',
    component: Select,
    subcomponents: {
        SelectTrigger,
        SelectList,
        SelectItem,
    },
    id: 'Select',
    tags: ['autodocs'],
} as Meta;

export const Default: StoryObj<typeof Select> = {
    args: {
        onChangeValue: fn(),
    },
    argTypes: {
        onChangeValue: {
            description: 'Função a ser executada com a modificação do valor',
        },
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
            <Select {...args}>
                <SelectTrigger {...args}>
                    <SelectTrigger.Field />
                </SelectTrigger>
                <Select.List>
                    {array.map((item, index) => (
                        <Select.Item
                            index={index}
                            value={item.value}
                            key={item.value}
                        >
                            {item.label}
                        </Select.Item>
                    ))}
                </Select.List>
            </Select>
        );
    },
};
