import { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';

export function InputIcon({
    className,
    children,
    ...props
}: ComponentProps<'div'>) {
    return (
        <div className={twMerge('input-icon', className)} {...props}>
            {children}
        </div>
    );
}
