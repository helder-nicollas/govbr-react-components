import { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';

export function CardHeader({
    className,
    children,
    ...props
}: ComponentProps<'div'>) {
    return (
        <div {...props} className={twMerge('card-header', className)}>
            {children}
        </div>
    );
}
