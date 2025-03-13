import { ComponentProps, forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

type Ref = HTMLDivElement;

const MenuTitle = forwardRef<Ref, ComponentProps<'div'>>(
    ({ className, children, ...props }, ref) => {
        return (
            <div
                {...props}
                className={twMerge('menu-title', className)}
                ref={ref}
            >
                {children}
            </div>
        );
    },
);

MenuTitle.displayName = 'MenuTitle';
export { MenuTitle };
