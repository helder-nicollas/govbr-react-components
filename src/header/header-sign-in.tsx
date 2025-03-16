import { ComponentProps, forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

type Ref = HTMLDivElement;

const HeaderSignIn = forwardRef<Ref, ComponentProps<'div'>>(
    ({ className, children, ...props }, ref) => {
        return (
            <div
                {...props}
                className={twMerge('header-sign-in', className)}
                ref={ref}
            >
                {children}
            </div>
        );
    },
);

HeaderSignIn.displayName = 'HeaderSignIn';
export { HeaderSignIn };
