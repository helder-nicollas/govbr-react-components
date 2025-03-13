import { ComponentProps, forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

type Ref = HTMLDivElement;

const MenuBody = forwardRef<Ref, ComponentProps<'div'>>(
    ({ className, children, ...props }, ref) => {
        return (
            <div
                {...props}
                className={twMerge('menu-body', className)}
                ref={ref}
                role="tree"
            >
                {children}
            </div>
        );
    },
);

MenuBody.displayName = 'MenuBody';
export { MenuBody };
