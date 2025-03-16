import { ComponentProps, forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

type Ref = HTMLDivElement;

const HeaderMenuTrigger = forwardRef<Ref, ComponentProps<'div'>>(
    ({ className, children, ...props }, ref) => {
        return (
            <div
                {...props}
                className={twMerge('header-menu-trigger', className)}
                data-target="#main-navigation"
                ref={ref}
            >
                {children}
            </div>
        );
    },
);

HeaderMenuTrigger.displayName = 'HeaderMenuTrigger';
export { HeaderMenuTrigger };
