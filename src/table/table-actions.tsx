import { ComponentProps, forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

type Ref = HTMLDivElement;

const TableActions = forwardRef<Ref, ComponentProps<'div'>>(
    ({ className, children, ...props }, ref) => {
        return (
            <div
                {...props}
                className={twMerge('actions-trigger', className)}
                ref={ref}
            >
                {children}
            </div>
        );
    },
);

TableActions.displayName = 'TableActions';
export { TableActions };
