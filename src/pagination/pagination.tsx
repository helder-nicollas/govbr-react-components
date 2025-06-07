import { ComponentProps, forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

type Ref = HTMLDivElement;

type PaginationProps = ComponentProps<'div'>;

const Pagination = forwardRef<Ref, PaginationProps>(
    ({ className, children, ...props }, ref) => {
        return (
            <nav
                {...props}
                className={twMerge('br-pagination', className)}
                ref={ref}
                role="navigation"
            >
                {children}
            </nav>
        );
    },
);

Pagination.displayName = 'Pagination';

export { Pagination, type PaginationProps };
