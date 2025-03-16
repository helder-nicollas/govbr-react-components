import { ComponentProps, forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

type Ref = HTMLDivElement;

const HeaderAvatar = forwardRef<Ref, ComponentProps<'div'>>(
    ({ className, children, ...props }, ref) => {
        return (
            <div
                {...props}
                className={twMerge('header-avatar', className)}
                ref={ref}
            >
                {children}
            </div>
        );
    },
);

HeaderAvatar.displayName = 'HeaderAvatar';
export { HeaderAvatar };
