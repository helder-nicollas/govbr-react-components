import { Meta, StoryObj } from '@storybook/react';
import {
    MultiSelect,
    MultiSelectAllItems,
    MultiSelectItem,
    MultiSelectList,
} from '.';
import { fn } from '@storybook/test';
import { SelectTrigger, SelectTriggerField } from '../select-trigger';

export default {
    title: 'Components/MultiSelect',
    decorators: s => <div className="h-80">{s()}</div>,
    component: MultiSelect,
    subcomponents: {
        MultiSelectAllItems,
        MultiSelectItem,
        MultiSelectList,
    },
    argTypes: {
        onChangeValue: {
            description: 'Função a ser executada com a modificação do valor.',
        },
        id: {
            description:
                'Identificador único que será utilizado para os items do multi-select',
        },
    },
    tags: ['autodocs'],
} as Meta<typeof MultiSelect>;

export const Default: StoryObj<typeof MultiSelect> = {
    args: {
        onChangeValue: fn(),
    },
    render: ({ id, ...args }) => {
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
            <MultiSelect {...args} id={id}>
                <SelectTrigger>
                    <SelectTriggerField />
                </SelectTrigger>
                <MultiSelectList>
                    <MultiSelectAllItems />
                    {array.map((item, index) => (
                        <MultiSelectItem
                            index={index}
                            value={item.value}
                            key={item.value}
                            defaultSelected={['1', '2'].includes(item.value)}
                        >
                            {item.label}
                        </MultiSelectItem>
                    ))}
                </MultiSelectList>
            </MultiSelect>
        );
    },
};
