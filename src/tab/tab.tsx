import { ComponentProps, forwardRef } from 'react';
import { VariantProps } from 'tailwind-variants';
import { tabVariants } from './variants';

type Ref = HTMLDivElement;

type TabProps = ComponentProps<'div'> &
    VariantProps<typeof tabVariants> & {
        counter?: boolean;
    };

const Tab = forwardRef<Ref, TabProps>(
    ({ className, children, size, counter, ...props }, ref) => {
        return (
            <div
                {...props}
                {...(counter && { 'data-counter': true })}
                className={tabVariants({ size, className })}
                ref={ref}
            >
                {children}
            </div>
        );
    },
);

Tab.displayName = 'Tab';
export { Tab, type TabProps };
