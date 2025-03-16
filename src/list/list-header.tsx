import { ComponentProps, forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

type Ref = HTMLDivElement;

const ListHeader = forwardRef<Ref, ComponentProps<'div'>>(
    ({ className, children, ...props }, ref) => {
        return (
            <div {...props} className={twMerge('header', className)} ref={ref}>
                {children}
            </div>
        );
    },
);

ListHeader.displayName = 'ListHeader';
export { ListHeader };
