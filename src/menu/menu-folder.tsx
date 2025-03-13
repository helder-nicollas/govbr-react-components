import { ComponentProps, forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

type Ref = HTMLDivElement;

const MenuFolder = forwardRef<Ref, ComponentProps<'div'>>(
    ({ className, children, ...props }, ref) => {
        return (
            <div
                {...props}
                className={twMerge('menu-folder', className)}
                ref={ref}
            >
                {children}
            </div>
        );
    },
);

MenuFolder.displayName = 'MenuFolder';
export { MenuFolder };
