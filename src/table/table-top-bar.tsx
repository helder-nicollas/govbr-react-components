import { ComponentProps, forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

type Ref = HTMLDivElement;

const TableTopBar = forwardRef<Ref, ComponentProps<'div'>>(
    ({ className, children, ...props }, ref) => {
        return (
            <div {...props} className={twMerge('top-bar', className)} ref={ref}>
                {children}
            </div>
        );
    },
);

TableTopBar.displayName = 'TableTopBar';
export { TableTopBar };
