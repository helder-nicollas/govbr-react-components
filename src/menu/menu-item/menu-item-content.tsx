import { ComponentProps, forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

type Ref = HTMLSpanElement;

const MenuItemContent = forwardRef<Ref, ComponentProps<'span'>>(
    ({ className, children, ...props }, ref) => {
        return (
            <span
                {...props}
                className={twMerge('content', className)}
                ref={ref}
            >
                {children}
            </span>
        );
    },
);

MenuItemContent.displayName = 'MenuItemContent';
export { MenuItemContent };
