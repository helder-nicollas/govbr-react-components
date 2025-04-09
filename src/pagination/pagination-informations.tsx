import { ComponentProps, forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

type Ref = HTMLDivElement;

type PaginationInformationProps = ComponentProps<'div'>;

const PaginationInformation = forwardRef<Ref, PaginationInformationProps>(
    ({ className, children, ...props }, ref) => {
        return (
            <div
                {...props}
                className={twMerge('pagination-information', className)}
                ref={ref}
            >
                {children}
            </div>
        );
    },
);

PaginationInformation.displayName = 'PaginationInformations';

export { PaginationInformation, type PaginationInformationProps };
