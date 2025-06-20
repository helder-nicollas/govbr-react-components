import { Meta, StoryObj } from '@storybook/react';
import { Select } from '.';
import { SelectTrigger, SelectTriggerField } from '../select-trigger';
import { SelectList } from './select-list';
import { SelectItem } from './select-item';
import { fn } from '@storybook/test';
import { Label } from '../label';

export default {
    title: 'Components/Select',
    component: Select,
    decorators: s => <div className="h-80">{s()}</div>,
    subcomponents: {
        SelectTrigger,
        SelectList,
        SelectItem,
    },
    argTypes: {
        onChangeValue: {
            description: 'Função a ser executada com a modificação do valor.',
        },
        reset: {
            description:
                'Deve ser utilizado quando houver a necessidade de resetar as opções do select. Geralmente, é passado o array de opções',
        },
        id: {
            description:
                'Identificador único que será utilizado para os items do select',
        },
    },
    id: 'Select',
    tags: ['autodocs'],
} as Meta<typeof Select>;

export const Default: StoryObj<typeof Select> = {
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
            <Select {...args} id={id}>
                <Label htmlFor={String(id)}>Fruta:</Label>
                <SelectTrigger {...args}>
                    <SelectTriggerField
                        placeholder="Selecione uma fruta"
                        id={String(id)}
                    />
                </SelectTrigger>
                <SelectList>
                    {array.map((item, index) => (
                        <SelectItem
                            index={index}
                            value={item.value}
                            key={item.value}
                        >
                            {item.label}
                        </SelectItem>
                    ))}
                </SelectList>
            </Select>
        );
    },
};
