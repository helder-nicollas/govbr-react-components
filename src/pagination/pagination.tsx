import { ComponentProps, forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { PaginationPage } from './pagination-page';
import { PaginationGoToPage } from './pagination-go-to-page';
import { PaginationPerPage } from './pagination-per-page';
import { PaginationInformation } from './pagination-informations';

type Ref = HTMLDivElement;

type PaginationProps = ComponentProps<'div'>;

interface IPaginationComponent
    extends React.ForwardRefExoticComponent<
        PaginationProps & React.RefAttributes<Ref>
    > {
    Page: typeof PaginationPage;
    GoToPage: typeof PaginationGoToPage;
    PerPage: typeof PaginationPerPage;
    Information: typeof PaginationInformation;
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
Pagination.GoToPage = PaginationGoToPage;
Pagination.Information = PaginationInformation;

export { Pagination, type PaginationProps };
