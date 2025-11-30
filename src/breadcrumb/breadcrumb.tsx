import { ComponentProps, forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

type Ref = HTMLDivElement;
type BreadcrumbProps = ComponentProps<'nav'>;

const Breadcrumb = forwardRef<Ref, BreadcrumbProps>(
    ({ className, children, ...props }, ref) => (
        <nav
            {...props}
            className={twMerge('br-breadcrumb', className)}
            aria-label="Breadcrumbs"
            ref={ref}
        >
            {children}
        </nav>
    ),
);

Breadcrumb.displayName = 'Breadcrumb';

export { Breadcrumb, type BreadcrumbProps };
