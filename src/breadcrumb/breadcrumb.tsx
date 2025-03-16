import { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';
import { BreadcrumbList } from './breadcrumb-list';
import { BreadcrumbHome } from './breadcrumb-home';
import { BreadcrumbItem } from './breadcrumb-item';
import { BreadcrumbCurrentPage } from './breadcrumb-current-page';

function Breadcrumb({ className, children, ...props }: ComponentProps<'nav'>) {
    return (
        <nav
            {...props}
            className={twMerge('br-breadcrumb', className)}
            aria-label="Breadcrumbs"
        >
            {children}
        </nav>
    );
}

Breadcrumb.List = BreadcrumbList;
Breadcrumb.Item = BreadcrumbItem;
Breadcrumb.CurrentPage = BreadcrumbCurrentPage;
Breadcrumb.Home = BreadcrumbHome;

export { Breadcrumb };
