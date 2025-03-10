import { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';

export function BreadcrumbCurrentPage({
    className,
    children,
    ...props
}: ComponentProps<'li'>) {
    return (
        <li
            {...props}
            className={twMerge('crumb', className)}
            data-active="active"
        >
            <i className="icon fas fa-chevron-right" />
            <span tabIndex={0} aria-current="page">
                {children}
            </span>
        </li>
    );
}
