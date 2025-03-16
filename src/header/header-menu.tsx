import { ComponentProps, forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

type Ref = HTMLDivElement;

const HeaderMenu = forwardRef<Ref, ComponentProps<'div'>>(
    ({ className, children, ...props }, ref) => {
        return (
            <div
                {...props}
                className={twMerge('header-menu', className)}
                ref={ref}
            >
                {children}
            </div>
        );
    },
);

HeaderMenu.displayName = 'HeaderMenu';
export { HeaderMenu };
