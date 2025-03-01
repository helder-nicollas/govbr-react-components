import { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';

export function CardFooter({
    className,
    children,
    ...props
}: ComponentProps<'div'>) {
    return (
        <div {...props} className={twMerge('card-footer', className)}>
            {children}
        </div>
    );
}
