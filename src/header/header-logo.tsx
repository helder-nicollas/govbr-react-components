import { ComponentProps, forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

type Ref = HTMLDivElement;

const HeaderLogo = forwardRef<Ref, ComponentProps<'div'>>(
    ({ className, children, ...props }, ref) => {
        return (
            <div
                {...props}
                className={twMerge('header-logo', className)}
                ref={ref}
            >
                {children}
            </div>
        );
    },
);

HeaderLogo.displayName = 'HeaderLogo';
export { HeaderLogo };
