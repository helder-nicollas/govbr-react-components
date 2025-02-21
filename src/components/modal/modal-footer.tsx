import { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';

export function ModalFooter({
    className,
    children,
    ...props
}: ComponentProps<'div'>) {
    return (
        <div
            className={twMerge(
                'br-modal-footer flex flex-col justify-end gap-2 lg:flex-row',
                className,
            )}
            {...props}
        >
            {children}
        </div>
    );
}
