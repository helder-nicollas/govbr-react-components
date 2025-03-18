import { ComponentProps, forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

type Ref = HTMLDivElement;

type TabPanelProps = ComponentProps<'div'> & {
    active?: boolean;
};

const TabPanel = forwardRef<Ref, TabPanelProps>(
    ({ className, children, active, ...props }, ref) => {
        return (
            <div
                {...props}
                className={twMerge('tab-panel', active && 'active', className)}
                ref={ref}
            >
                {children}
            </div>
        );
    },
);

TabPanel.displayName = 'TabPanel';
export { TabPanel };
