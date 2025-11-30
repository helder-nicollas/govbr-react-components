import { ComponentProps, forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

type Ref = HTMLOListElement;

type BreadcrumbListProps = ComponentProps<'ol'>;

const BreadcrumbList = forwardRef<Ref, BreadcrumbListProps>(
    ({ className, children, ...props }, ref) => (
        <ol
            {...props}
            className={twMerge('crumb-list', className)}
            role="list"
            ref={ref}
        >
            {children}
        </ol>
    ),
);

BreadcrumbList.displayName = 'BreadcrumbList';

export { BreadcrumbList, type BreadcrumbListProps };
