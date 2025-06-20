import { Meta, StoryObj } from '@storybook/react';
import { UploadField } from './upload-field';
import { UploadList } from './upload-list';
import { Label } from '../label';
import { Upload } from './upload';

export default {
    title: 'Components/Upload',
    component: Upload,
    subcomponents: {
        UploadField,
        UploadList,
    },
    argTypes: {
        defaultFile: {
            control: { disable: true },
        },
        disabled: {
            description: 'Aplica o estado de desabilitado ao componente.',
            control: 'boolean',
        },
        multiple: {
            description:
                'Utilizado para informar se o componente aceita vários arquivos.',
            type: 'boolean',
        },
    },
    tags: ['autodocs'],
} as Meta<typeof Upload>;

export const Default: StoryObj<typeof Upload> = {
    args: {
        disabled: false,
        multiple: false,
    },

    render: args => {
        return (
            <Upload {...args}>
                <Label htmlFor="upload">Enviar aquivo</Label>
                <UploadField id="upload" />
                <UploadList />
            </Upload>
        );
    },
};

export const Multiple: StoryObj<typeof Upload> = {
    name: 'Múltiplo',
    args: {
        multiple: true,
        disabled: false,
    },
    render: args => {
        return (
            <Upload {...args}>
                <Label htmlFor="upload">Enviar aquivo</Label>
                <UploadField id="upload" />
                <UploadList />
            </Upload>
        );
    },
};
