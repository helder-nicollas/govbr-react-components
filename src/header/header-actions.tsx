import { ComponentProps, forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

type Ref = HTMLDivElement;

const HeaderActions = forwardRef<Ref, ComponentProps<'div'>>(
    ({ className, children, ...props }, ref) => {
        return (
            <div
                {...props}
                className={twMerge('header-actions', className)}
                ref={ref}
            >
                {children}
            </div>
        );
    },
);

HeaderActions.displayName = 'HeaderActions';
export { HeaderActions };
