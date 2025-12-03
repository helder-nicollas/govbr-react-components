import { Meta, StoryObj } from '@storybook/react';
import { Switch, SwitchInput, SwitchProps } from '.';
import { Label } from '../label';
import { switchVariants } from './variants';

export default {
    title: 'Components/Switch',
    component: Switch,
    argTypes: {
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
    },
    tags: ['autodocs'],
} as Meta<SwitchProps>;

export const Default: StoryObj<SwitchProps> = {
    args: {
        align: 'left',
        size: 'md',
        icon: false,
    },
    render: args => (
        <Switch {...args}>
            <SwitchInput name="switch-icon" id="switch-icon" />
            <Label htmlFor="switch-icon">Label</Label>
        </Switch>
    ),
};
