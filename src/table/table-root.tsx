import { ComponentProps, forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

type Ref = HTMLDivElement;

const TableRoot = forwardRef<Ref, ComponentProps<'div'>>(
    ({ className, children, ...props }, ref) => {
        return (
            <div
                {...props}
                className={twMerge('br-table', className)}
                ref={ref}
            >
                {children}
            </div>
        );
    },
);

TableRoot.displayName = 'TableRoot';
export { TableRoot };
