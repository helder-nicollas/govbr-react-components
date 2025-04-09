import { ComponentProps, forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

type Ref = HTMLDivElement;

type TableHeaderProps = ComponentProps<'div'> & {
    hiddenSearchIcon?: boolean;
};

const TableHeader = forwardRef<Ref, TableHeaderProps>(
    ({ className, children, hiddenSearchIcon, ...props }, ref) => {
        return (
            <div
                {...props}
                ref={ref}
                className={twMerge(
                    'table-header',
                    hiddenSearchIcon && 'show',
                    className,
                )}
            >
                {children}
            </div>
        );
    },
);

TableHeader.displayName = 'TableHeader';
export { TableHeader, type TableHeaderProps };
