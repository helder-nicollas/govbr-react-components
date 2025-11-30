import { ComponentProps, forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

type Ref = HTMLLIElement;
type BreadcrumbCurrentPageProps = ComponentProps<'li'>;

const BreadcrumbCurrentPage = forwardRef<Ref, BreadcrumbCurrentPageProps>(
    ({ className, children, ...props }) => (
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
    ),
);

BreadcrumbCurrentPage.displayName = 'BreadcrumbCurrentPage';

export { BreadcrumbCurrentPage, type BreadcrumbCurrentPageProps };
