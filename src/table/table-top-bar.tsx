import { ComponentProps, forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

type Ref = HTMLDivElement;

type TableTopBarProps = ComponentProps<'div'>;

const TableTopBar = forwardRef<Ref, TableTopBarProps>(
    ({ className, children, ...props }, ref) => {
        return (
            <div {...props} className={twMerge('top-bar', className)} ref={ref}>
                {children}
            </div>
        );
    },
);

TableTopBar.displayName = 'TableTopBar';
export { TableTopBar, type TableTopBarProps };
