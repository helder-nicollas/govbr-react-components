import { ComponentProps, forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

type Ref = HTMLSpanElement;

const MenuItemIcon = forwardRef<Ref, ComponentProps<'span'>>(
    ({ className, children, ...props }, ref) => {
        return (
            <span {...props} className={twMerge('icon', className)} ref={ref}>
                {children}
            </span>
        );
    },
);

MenuItemIcon.displayName = 'MenuItemIcon';
export { MenuItemIcon };
