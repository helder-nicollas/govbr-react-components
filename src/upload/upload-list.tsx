import { ComponentProps, forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

type UploadListProps = ComponentProps<'input'>;
type Ref = HTMLInputElement;

const UploadList = forwardRef<Ref, UploadListProps>(
    ({ className, children, ...props }, ref) => {
        return (
            <div
                {...props}
                className={twMerge('upload-list', className)}
                ref={ref}
            >
                {children}
            </div>
        );
    },
);

UploadList.displayName = 'UploadList';
export { UploadList, type UploadListProps };
