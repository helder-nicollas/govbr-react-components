import { ComponentProps, forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

type Ref = HTMLDivElement;

const MenuPanel = forwardRef<Ref, ComponentProps<'div'>>(
    ({ className, children, ...props }, ref) => {
        return (
            <div
                {...props}
                className={twMerge('menu-panel', className)}
                ref={ref}
            >
                {children}
            </div>
        );
    },
);

MenuPanel.displayName = 'MenuPanel';
export { MenuPanel };
