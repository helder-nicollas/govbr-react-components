import { ComponentProps, forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

type Ref = HTMLDivElement;

const MenuFooter = forwardRef<Ref, ComponentProps<'div'>>(
    ({ className, children, ...props }, ref) => {
        return (
            <div
                {...props}
                className={twMerge('menu-footer', className)}
                ref={ref}
            >
                {children}
            </div>
        );
    },
);

MenuFooter.displayName = 'MenuFooter';
export { MenuFooter };
