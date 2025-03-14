import { ComponentProps, forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

type Ref = HTMLDivElement;

const HeaderInfo = forwardRef<Ref, ComponentProps<'div'>>(
    ({ className, children, ...props }, ref) => {
        return (
            <div
                {...props}
                className={twMerge('header-info', className)}
                ref={ref}
            >
                {children}
            </div>
        );
    },
);

HeaderInfo.displayName = 'HeaderInfo';
export { HeaderInfo };
