import { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';

export function BreadcrumbItem({
    className,
    children,
    ...props
}: ComponentProps<'li'>) {
    return (
        <li {...props} className={twMerge('crumb', className)}>
            <i className="icon fas fa-chevron-right"></i>
            {children}
        </li>
    );
}
