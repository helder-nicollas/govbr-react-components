import { ComponentProps, forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

type Ref = HTMLDivElement;

type SearchBarProps = ComponentProps<'div'> & {
    show?: boolean;
};

const TableSearchBar = forwardRef<Ref, SearchBarProps>(
    ({ className, children, show, ...props }, ref) => {
        return (
            <div
                {...props}
                ref={ref}
                className={twMerge('search-bar', show && 'show', className)}
            >
                {children}
            </div>
        );
    },
);

TableSearchBar.displayName = 'TableSearchBar';
export { TableSearchBar };
