import { Meta, StoryObj } from '@storybook/react';
import { Switch, SwitchProps } from '.';
import { switchVariants } from './variants';
import { fn } from '@storybook/test';
import { useState } from 'react';

export default {
    title: 'Components/Switch',
    component: Switch,
    args: {
        id: 'switch',
        align: 'left',
        label: 'Label',
        size: 'md',
        icon: false,
        onSwitch: fn(),
        checked: false,
    },
    argTypes: {
        id: {
            description: 'Id do switch. (obrigatório)',
        },
        align: {
            description: 'Alinhamento do label.',
            control: {
                type: 'inline-radio',
            },
            options: Object.keys(switchVariants.variants.align),
        },
        size: {
            description: 'Tamanho do switch.',
            control: {
                type: 'inline-radio',
            },
            options: Object.keys(switchVariants.variants.size),
        },
        disabled: {
            description: 'Adiciona o estado de desabilitado.',
            control: {
                type: 'boolean',
            },
        },
        icon: {
            description: 'Ícone do componente.',
        },
        checked: {
            control: false,
        },
    },
    tags: ['autodocs'],
} as Meta<SwitchProps>;

export const Default: StoryObj<SwitchProps> = {
    render: args => {
        const [checked, setChecked] = useState(false);
        return (
            <Switch
                {...args}
                checked={checked}
                onSwitch={() => setChecked(!checked)}
            />
        );
    },
};
