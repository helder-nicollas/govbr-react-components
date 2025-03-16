import { ComponentProps, forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

type Ref = HTMLDivElement;

const HeaderLogin = forwardRef<Ref, ComponentProps<'div'>>(
    ({ className, children, ...props }, ref) => {
        return (
            <div
                {...props}
                className={twMerge('header-login', className)}
                ref={ref}
            >
                {children}
            </div>
        );
    },
);

HeaderLogin.displayName = 'HeaderLogin';
export { HeaderLogin };
