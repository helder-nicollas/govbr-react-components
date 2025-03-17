import { ComponentProps, forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

type Ref = HTMLDivElement;

type TabItemProps = ComponentProps<'div'> & {
    active?: boolean;
};

const TabItem = forwardRef<Ref, TabItemProps>(
    ({ className, children, active, ...props }, ref) => {
        return (
            <div
                {...props}
                className={twMerge('tab-item', active && 'active', className)}
                ref={ref}
            >
                {children}
            </div>
        );
    },
);

TabItem.displayName = 'TabItem';
export { TabItem, type TabItemProps };
