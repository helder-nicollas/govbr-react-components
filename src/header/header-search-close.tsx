import { ComponentProps, forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

type Ref = HTMLDivElement;

const HeaderSearchClose = forwardRef<Ref, ComponentProps<'div'>>(
    ({ className, children, ...props }, ref) => {
        return (
            <div
                {...props}
                className={twMerge('search-close', className)}
                ref={ref}
            >
                {children}
            </div>
        );
    },
);

HeaderSearchClose.displayName = 'HeaderSearchClose';
export { HeaderSearchClose };
