import { ComponentProps, forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

type Ref = HTMLSpanElement;

const TabResults = forwardRef<Ref, ComponentProps<'span'>>(
    ({ className, children, ...props }, ref) => {
        return (
            <span
                {...props}
                className={twMerge('results', className)}
                ref={ref}
            >
                {children}
            </span>
        );
    },
);

TabResults.displayName = 'TabResults';
export { TabResults };
