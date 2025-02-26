import { twMerge } from 'tailwind-merge';
import { ComponentProps } from 'react';

export function ModalBody({
    className,
    children,
    ...props
}: ComponentProps<'div'>) {
    return (
        <div className={twMerge('br-modal-body', className)} {...props}>
            {children}
        </div>
    );
}
