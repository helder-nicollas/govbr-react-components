import { ComponentProps, forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

type Ref = HTMLLIElement;
type BreadcrumbItemProps = ComponentProps<'li'>;

const BreadcrumbItem = forwardRef<Ref, BreadcrumbItemProps>(
    ({ className, children, ...props }, ref) => (
        <li
            {...props}
            className={twMerge('crumb text-gov-blue-warm-vivid-70', className)}
            ref={ref}
        >
            <i className="icon fas fa-chevron-right "></i>
            {children}
        </li>
    ),
);

BreadcrumbItem.displayName = 'BreadcrumbItem';

export { BreadcrumbItem, type BreadcrumbItemProps };
