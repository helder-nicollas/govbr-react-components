import { ComponentProps, forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

type Ref = HTMLDivElement;

type LoadingMaskProps = ComponentProps<'div'> & {
    full?: boolean;
};

const LoadingMask = forwardRef<Ref, LoadingMaskProps>(
    ({ className, children, full, ...props }, ref) => {
        return (
            <div
                className={twMerge(
                    'br-loading-mask',
                    full && 'full',
                    className,
                )}
                {...props}
                ref={ref}
            >
                {children}
            </div>
        );
    },
);

LoadingMask.displayName = 'LoadingMask';
export { LoadingMask, type LoadingMaskProps };
