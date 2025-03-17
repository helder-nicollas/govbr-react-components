import { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';

export function Label({
    children,
    className,
    ...props
}: ComponentProps<'label'>) {
    return (
        <label {...props} className={twMerge('label', className)}>
            {children}
        </label>
    );
}
