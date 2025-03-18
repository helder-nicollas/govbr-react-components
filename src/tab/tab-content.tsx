import { ComponentProps, forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

type Ref = HTMLDivElement;

const TabContent = forwardRef<Ref, ComponentProps<'div'>>(
    ({ className, children, ...props }, ref) => {
        return (
            <div
                {...props}
                className={twMerge('tab-content', className)}
                ref={ref}
            >
                {children}
            </div>
        );
    },
);

TabContent.displayName = 'TabContent';
export { TabContent };
