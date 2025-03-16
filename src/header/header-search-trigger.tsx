import { ComponentProps, forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

type Ref = HTMLDivElement;

const HeaderSearchTrigger = forwardRef<Ref, ComponentProps<'div'>>(
    ({ className, children, ...props }, ref) => {
        return (
            <div
                {...props}
                className={twMerge('header-search-trigger', className)}
                ref={ref}
            >
                {children}
            </div>
        );
    },
);

HeaderSearchTrigger.displayName = 'HeaderSearchTrigger';
export { HeaderSearchTrigger };
