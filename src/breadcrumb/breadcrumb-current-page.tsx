import { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';

export function BreadcrumbItemCurrentPage({
    className,
    ...props
}: ComponentProps<'li'>) {
    return (
        <li
            {...props}
            className={twMerge('crumb', className)}
            data-active="active"
        >
            <i className="icon fas fa-chevron-right"></i>
            <span tabIndex={0} aria-current="page">
                Página atual
            </span>
        </li>
    );
}
