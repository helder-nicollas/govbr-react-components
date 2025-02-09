import { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';

export function InputGroup({
    className,
    children,
    ...props
}: ComponentProps<'div'>) {
    return (
        <div className={twMerge('input-group', className)} {...props}>
            {children}
        </div>
    );
}
