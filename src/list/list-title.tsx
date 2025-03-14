import { ComponentProps, forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

type Ref = HTMLDivElement;

const ListTitle = forwardRef<Ref, ComponentProps<'div'>>(
    ({ className, children, ...props }, ref) => {
        return (
            <div {...props} className={twMerge('title', className)} ref={ref}>
                {children}
            </div>
        );
    },
);

ListTitle.displayName = 'ListTitle';
export { ListTitle };
