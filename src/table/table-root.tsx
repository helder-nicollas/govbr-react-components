import { ComponentProps, forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

type Ref = HTMLDivElement;

type TableRootProps = ComponentProps<'div'> & {
    size?: 'small' | 'medium' | 'large';
};

const TableRoot = forwardRef<Ref, TableRootProps>(
    ({ className, children, size = 'medium', ...props }, ref) => {
        return (
            <div
                {...props}
                className={twMerge('br-table', size, className)}
                ref={ref}
            >
                {children}
            </div>
        );
    },
);

TableRoot.displayName = 'TableRoot';
export { TableRoot, type TableRootProps };
