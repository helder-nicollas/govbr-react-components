import { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';

export function BreadcrumbList({
    className,
    children,
    ...props
}: ComponentProps<'ol'>) {
    return (
        <ol {...props} className={twMerge('crumb-list', className)} role="list">
            {children}
        </ol>
    );
}
