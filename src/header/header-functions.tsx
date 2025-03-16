import { ComponentProps, forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

type Ref = HTMLDivElement;

const HeaderFunctions = forwardRef<Ref, ComponentProps<'div'>>(
    ({ className, children, ...props }, ref) => {
        return (
            <div
                {...props}
                className={twMerge('header-functions dropdown', className)}
                ref={ref}
            >
                {children}
            </div>
        );
    },
);

HeaderFunctions.displayName = 'HeaderFunctions';
export { HeaderFunctions };
