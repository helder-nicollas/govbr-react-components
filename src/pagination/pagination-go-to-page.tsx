import { ComponentProps, forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

type Ref = HTMLDivElement;

type PaginationGoToPageProps = ComponentProps<'div'>;

const PaginationGoToPage = forwardRef<Ref, PaginationGoToPageProps>(
    ({ className, children, ...props }, ref) => {
        return (
            <div
                {...props}
                className={twMerge('pagination-go-to-page', className)}
                ref={ref}
            >
                {children}
            </div>
        );
    },
);

PaginationGoToPage.displayName = 'PaginationGoToPage';

export { PaginationGoToPage, type PaginationGoToPageProps };
