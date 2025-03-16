import { ComponentProps, forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

type Ref = HTMLHeadingElement;

const HeaderTitle = forwardRef<Ref, ComponentProps<'h1'>>(
    ({ className, children, ...props }, ref) => {
        return (
            <h1
                {...props}
                className={twMerge('header-title', className)}
                ref={ref}
            >
                {children}
            </h1>
        );
    },
);

HeaderTitle.displayName = 'HeaderTitle';
export { HeaderTitle };
