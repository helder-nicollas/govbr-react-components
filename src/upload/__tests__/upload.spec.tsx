import { render } from '@testing-library/react';
import { Upload } from '../upload';
import { Label } from '../../label';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { UploadField } from '../upload-field';
import { UploadList } from '../upload-list';

describe('Upload Component', () => {
    it('should call onChange function on upload one file', async () => {
        const onChange = jest.fn();
        render(
            <Upload onChange={onChange}>
                <Label htmlFor="upload">Enviar aquivo</Label>
                <UploadField id="upload" />
                <UploadList />
            </Upload>,
        );

        const file = new File(['conteúdo'], 'arquivo.txt', {
            type: 'text/plain',
        });

        const input = screen.getByTestId('upload');
        await userEvent.upload(input, file);

        expect(onChange).toHaveBeenCalledWith([file]);
    });
    it('should call onChange function on upload multiple files', async () => {
        const onChange = jest.fn();
        render(
            <Upload onChange={onChange} multiple>
                <Label htmlFor="upload">Enviar aquivo</Label>
                <UploadField id="upload" />
                <UploadList />
            </Upload>,
        );

        const file = new File(['conteúdo'], 'arquivo.txt', {
            type: 'text/plain',
        });
        const secondFile = new File(['conteúdo'], 'arquivo01.txt', {
            type: 'text/plain',
        });

        const input = screen.getByTestId('upload');
        await userEvent.upload(input, [file, secondFile]);

        expect(onChange).toHaveBeenCalledWith(
            expect.arrayContaining([file, secondFile]),
        );
    });

    it('should not call onChange function on upload multiple files without multiple attribute', async () => {
        const onChange = jest.fn();
        render(
            <Upload onChange={onChange}>
                <Label htmlFor="upload">Enviar aquivo</Label>
                <UploadField id="upload" />
                <UploadList />
            </Upload>,
        );

        const file = new File(['conteúdo'], 'arquivo.txt', {
            type: 'text/plain',
        });
        const secondFile = new File(['conteúdo'], 'arquivo01.txt', {
            type: 'text/plain',
        });

        const input = screen.getByTestId('upload');
        await userEvent.upload(input, [file, secondFile]);

        expect(onChange).not.toHaveBeenCalledWith(
            expect.arrayContaining([file, secondFile]),
        );
    });
});
