import { ComponentProps, forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

type Ref = HTMLDivElement;

const TableTitle = forwardRef<Ref, ComponentProps<'div'>>(
    ({ className, children, ...props }, ref) => {
        return (
            <div
                {...props}
                ref={ref}
                className={twMerge('table-title', className)}
            >
                {children}
            </div>
        );
    },
);

TableTitle.displayName = 'TableTitle';
export { TableTitle };
