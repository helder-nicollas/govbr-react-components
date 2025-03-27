import { Meta, StoryObj } from '@storybook/react';
import { Radio, RadioProps } from '.';
import { radioVariants } from './variants';
import { fn } from '@storybook/test';
import { Label } from '../label';
import { RadioField, RadioFieldProps } from './radio-field';

export default {
    title: 'Components/Radio',
    component: Radio,
    subcomponents: {
        RadioField,
    },
    args: {
        variant: 'normal',
        disabled: false,
    },
    argTypes: {
        variant: {
            control: {
                type: 'inline-radio',
            },
            description: 'Variante a ser aplicada no radio.',
            options: Object.keys(radioVariants.variants.variant),
        },
        disabled: {
            description: 'Estado de desabilitado.',
        },
        onChange: {
            description: 'Função a ser disparada com o clique do radio.',
        },
        id: {
            description:
                'Id obrigatório que deve ser aplicado no RadioField e no Label que o acompanha.',
        },
    },
    tags: ['autodocs'],
} as Meta<RadioProps & RadioFieldProps>;

export const Default: StoryObj<RadioProps & RadioFieldProps> = {
    args: {
        onChange: fn(),
        id: 'radio',
        disabled: false,
    },
    render: ({ variant, id, disabled, ...args }) => {
        return (
            <Radio variant={variant} disabled={disabled}>
                <Radio.Field {...args} id={id} disabled={disabled} />
                <Label htmlFor={id}>Opção 01</Label>
            </Radio>
        );
    },
};

export const Group: StoryObj<RadioProps & RadioFieldProps> = {
    args: {
        onChange: fn(),
    },
    argTypes: {
        variant: {
            control: {
                disable: true,
            },
        },
        disabled: {
            control: {
                disable: true,
            },
        },
    },
    render: () => {
        return (
            <div>
                <Radio variant="valid">
                    <Radio.Field id="radio-01" name="radio" />
                    <Label htmlFor="radio-01">Válido</Label>
                </Radio>
                <Radio variant="invalid">
                    <Radio.Field id="radio-02" name="radio" />
                    <Label htmlFor="radio-02">Inválido</Label>
                </Radio>
                <Radio>
                    <Radio.Field id="radio-03" name="radio" />
                    <Label htmlFor="radio-03">Normal</Label>
                </Radio>
                <Radio disabled>
                    <Radio.Field id="radio-03" name="radio" disabled />
                    <Label htmlFor="radio-03">Desabilitado</Label>
                </Radio>
            </div>
        );
    },
};
