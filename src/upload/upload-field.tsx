import { ComponentProps, forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

type UploadFieldProps = ComponentProps<'input'> & { id: string };
type Ref = HTMLInputElement;

const UploadField = forwardRef<Ref, UploadFieldProps>(
    ({ className, ...props }, ref) => {
        return (
            <input
                {...props}
                ref={ref}
                type="file"
                className={twMerge('upload-input', className)}
            />
        );
    },
);

UploadField.displayName = 'UploadField';
export { UploadField, type UploadFieldProps };
