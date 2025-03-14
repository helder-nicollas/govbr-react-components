import { ComponentProps, forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

type Ref = HTMLDivElement;

const HeaderLinks = forwardRef<Ref, ComponentProps<'div'>>(
    ({ className, children, ...props }, ref) => {
        return (
            <div
                {...props}
                className={twMerge('header-links dropdown', className)}
                ref={ref}
            >
                {children}
            </div>
        );
    },
);

HeaderLinks.displayName = 'HeaderLinks';
export { HeaderLinks };
