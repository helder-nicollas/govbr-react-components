import { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';

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

export { Breadcrumb };
