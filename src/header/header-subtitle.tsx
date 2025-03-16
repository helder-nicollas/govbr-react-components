import { ComponentProps, forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

type Ref = HTMLHeadingElement;

const HeaderSubtitle = forwardRef<Ref, ComponentProps<'h2'>>(
    ({ className, children, ...props }, ref) => {
        return (
            <h2
                {...props}
                className={twMerge('header-subtitle', className)}
                ref={ref}
            >
                {children}
            </h2>
        );
    },
);

HeaderSubtitle.displayName = 'HeaderSubtitle';
export { HeaderSubtitle };
