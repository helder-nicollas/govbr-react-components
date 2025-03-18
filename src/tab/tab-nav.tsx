import { ComponentProps, forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

type Ref = HTMLDivElement;

const TabNav = forwardRef<Ref, ComponentProps<'div'>>(
    ({ className, children, ...props }, ref) => {
        return (
            <div {...props} className={twMerge('tab-nav', className)} ref={ref}>
                <ul>{children}</ul>
            </div>
        );
    },
);

TabNav.displayName = 'TabNav';
export { TabNav };
