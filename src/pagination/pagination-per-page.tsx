import { ComponentProps, forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

type Ref = HTMLDivElement;

type PaginationPerPageProps = ComponentProps<'div'>;

const PaginationPerPage = forwardRef<Ref, PaginationPerPageProps>(
    ({ className, children, ...props }, ref) => {
        return (
            <div
                {...props}
                className={twMerge('pagination-per-page', className)}
                ref={ref}
            >
                {children}
            </div>
        );
    },
);

PaginationPerPage.displayName = 'PaginationPerPage';

export { PaginationPerPage, type PaginationPerPageProps };
