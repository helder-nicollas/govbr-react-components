import { ComponentProps, forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { PaginationPage } from './pagination-page';

type Ref = HTMLDivElement;

type PaginationProps = ComponentProps<'div'>;

interface IPaginationComponent
    extends React.ForwardRefExoticComponent<
        PaginationProps & React.RefAttributes<Ref>
    > {
    Page: typeof PaginationPage;
}

const Pagination = forwardRef<Ref, PaginationProps>(
    ({ className, children, ...props }, ref) => {
        return (
            <nav
                {...props}
                className={twMerge('br-pagination', className)}
                ref={ref}
            >
                {children}
            </nav>
        );
    },
) as IPaginationComponent;

Pagination.displayName = 'Pagination';

Pagination.Page = PaginationPage;

export { Pagination, type PaginationProps };
