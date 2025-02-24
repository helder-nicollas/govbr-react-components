import { Meta, StoryObj } from '@storybook/react';
import { Select } from '.';
import { SelectTrigger, SelectTriggerProps } from '../select-trigger';
import { selectTriggerVariants } from '../select-trigger/variants';
import { Button } from '../button';
import { useState } from 'react';

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

        const array01 = [
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
            {
                label: 'Mamão',
                value: '4',
            },
        ];

        const [state, setState] = useState<
            {
                label: string;
                value: string;
            }[]
        >(array);

        const modifyArray = () => {
            if (array.length === 4) {
                setState(array);
            } else {
                setState(array01);
            }
        };

        return (
            <>
                <Button onClick={modifyArray}>Clique aqui</Button>
                <Select reset={state}>
                    <SelectTrigger {...args}>
                        <SelectTrigger.Field />
                    </SelectTrigger>
                    <Select.List>
                        {state.map((item, index) => (
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
            </>
        );
    },
};
