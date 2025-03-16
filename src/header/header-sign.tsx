import { ComponentProps, forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

type Ref = HTMLDivElement;

const HeaderSign = forwardRef<Ref, ComponentProps<'div'>>(
    ({ className, children, ...props }, ref) => {
        return (
            <div
                {...props}
                className={twMerge('header-sign', className)}
                ref={ref}
            >
                {children}
            </div>
        );
    },
);

HeaderSign.displayName = 'HeaderSign';
export { HeaderSign };
