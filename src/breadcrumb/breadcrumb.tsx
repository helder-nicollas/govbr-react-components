import { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';
import { BreadcrumbList } from './breadcrumb-list';
import { BreadcrumbHome } from './breadcrumb-home';
import { BreadcrumbItem } from './breadcrumb-item';
import { BreadcrumbItemCurrentPage } from './breadcrumb-current-page';
import '@govbr-ds/core/dist/components/breadcrumb/breadcrumb.min.css';

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
Breadcrumb.CurrentPage = BreadcrumbItemCurrentPage;
Breadcrumb.Home = BreadcrumbHome;

export { Breadcrumb };
