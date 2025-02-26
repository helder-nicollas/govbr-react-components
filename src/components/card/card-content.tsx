import { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';

export function CardContent({
    className,
    children,
    ...props
}: ComponentProps<'div'>) {
    return (
        <div {...props} className={twMerge('card-content', className)}>
            {children}
        </div>
    );
}
