import { ComponentProps, forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

type Ref = HTMLDivElement;

const HeaderTop = forwardRef<Ref, ComponentProps<'div'>>(
    ({ className, children, ...props }, ref) => {
        return (
            <div
                {...props}
                className={twMerge('header-top', className)}
                ref={ref}
            >
                {children}
            </div>
        );
    },
);

HeaderTop.displayName = 'HeaderTop';
export { HeaderTop };
