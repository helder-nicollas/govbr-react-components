import { ComponentProps, forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

type Ref = HTMLDivElement;

type TableActionsProps = ComponentProps<'div'>;

const TableActions = forwardRef<Ref, TableActionsProps>(
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
export { TableActions, type TableActionsProps };
