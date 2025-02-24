import { Meta, StoryObj } from '@storybook/react';
import { Select } from './components';
import { SelectTrigger } from './components/SelectTrigger';
import { SelectList } from './components/select-list';
import { SelectItem } from './components/select-item';
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
                <Select.Trigger>
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
