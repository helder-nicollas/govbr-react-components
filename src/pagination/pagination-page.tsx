import { ComponentPropsWithoutRef, ElementType } from 'react';
import { twMerge } from 'tailwind-merge';

type PaginationPageProps<T extends ElementType = 'a'> =
    ComponentPropsWithoutRef<T> & {
        as?: T;
        active?: boolean;
    };

function PaginationPage<T extends ElementType = 'a'>({
    className,
    children,
    active,
    as,
    ...props
}: PaginationPageProps<T>) {
    const Component = as || 'a';

    return (
        <Component
            className={twMerge('page', active && 'active', className)}
            {...props}
        >
            {children}
        </Component>
    );
}

PaginationPage.displayName = 'PaginationPage';

export { PaginationPage, type PaginationPageProps };
