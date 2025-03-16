import { ComponentProps, forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

type Ref = HTMLDivElement;

const HeaderSearch = forwardRef<Ref, ComponentProps<'div'>>(
    ({ className, children, ...props }, ref) => {
        return (
            <div
                {...props}
                className={twMerge('header-search', className)}
                ref={ref}
            >
                {children}
            </div>
        );
    },
);

HeaderSearch.displayName = 'HeaderSearch';
export { HeaderSearch };
