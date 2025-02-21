import { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';

export function ModalTitle({
    children,
    className,
    ...props
}: { children: string } & ComponentProps<'div'>) {
    return (
        <div className={twMerge('modal-title', className)} {...props}>
            {children}
        </div>
    );
}
