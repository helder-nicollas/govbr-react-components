/* eslint-disable no-unused-vars */
import { ComponentPropsWithoutRef, useEffect, useRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { UploadList } from './upload-list';
import { UploadField } from './upload-field';

import BRUpload from '@govbr-ds/core/dist/components/upload/upload';

type UploadProps = ComponentPropsWithoutRef<'div'> & {
    disabled?: boolean;
    defaultFile?: File | null;
    onChange?(file: File[] | null): void;
    multiple?: boolean;
};

function Upload({
    className,
    children,
    multiple,
    disabled,
    ...props
}: UploadProps) {
    const uploadRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const uploadTimeout = () => {
            return new Promise(resolve => {
                return setTimeout(resolve, 3000);
            });
        };

        if (uploadRef.current) {
            if (!uploadRef.current.querySelector('.upload-button')) {
                const brUpload = new BRUpload(
                    `br-upload`,
                    uploadRef.current,
                    uploadTimeout,
                );

                const target = uploadRef.current.querySelector(
                    '.upload-list',
                ) as HTMLDivElement;

                const observer = new MutationObserver(() => {
                    const files = brUpload._fileArray ?? [];
                    props.onChange?.(files);
                });

                observer.observe(target, { childList: true });

                if (props.defaultFile) {
                    brUpload._fileArray = [props.defaultFile];
                    brUpload._updateFileList();
                }
            }

            if (multiple) {
                const input = uploadRef.current.querySelector('input');
                input?.setAttribute('multiple', 'multiple');
            }
        }
    }, [props, uploadRef]);

    return (
        <div
            {...props}
            className={twMerge('br-upload', className, disabled && 'disabled')}
            ref={uploadRef}
        >
            {children}
            <span className="text-base" />
        </div>
    );
}

Upload.Field = UploadField;
Upload.List = UploadList;

export { Upload, type UploadProps };
