import { ComponentProps, forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

type Ref = HTMLHeadingElement;

const HeaderTitle = forwardRef<Ref, ComponentProps<'h1'>>(
    ({ className, children, ...props }, ref) => {
        return (
            <div
                {...props}
                className={twMerge('header-title', className)}
                ref={ref}
            >
                {children}
            </div>
        );
    },
);

HeaderTitle.displayName = 'HeaderTitle';
export { HeaderTitle };
