import { ComponentProps, forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

type Ref = HTMLDivElement;

const HeaderBottom = forwardRef<Ref, ComponentProps<'div'>>(
    ({ className, children, ...props }, ref) => {
        return (
            <div
                {...props}
                className={twMerge('header-bottom', className)}
                ref={ref}
            >
                {children}
            </div>
        );
    },
);

HeaderBottom.displayName = 'HeaderBottom';
export { HeaderBottom };
