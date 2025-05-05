import { Meta, StoryObj } from '@storybook/react';
import { Upload } from '.';
import { UploadField } from './upload-field';
import { UploadList } from './upload-list';
import { Label } from '../label';

export default {
    title: 'Components/Upload',
    component: Upload,
    subcomponents: {
        UploadField,
        UploadList,
    },
    tags: ['autodocs'],
} as Meta<typeof Upload>;

export const Default: StoryObj<typeof Upload> = {
    render: args => {
        return (
            <Upload {...args}>
                <Label htmlFor="upload">Enviar aquivo</Label>
                <Upload.Field id="upload" />
                <Upload.List />
            </Upload>
        );
    },
};
