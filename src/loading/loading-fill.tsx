import { ComponentProps, forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

type Ref = HTMLDivElement;

type LoadingFillProps = ComponentProps<'div'>;

const LoadingFill = forwardRef<Ref, LoadingFillProps>(
    ({ className, children, ...props }, ref) => {
        return (
            <div
                className={twMerge('br-loading-fill', className)}
                {...props}
                ref={ref}
            >
                {children}
            </div>
        );
    },
);

LoadingFill.displayName = 'LoadingFill';
export { LoadingFill, type LoadingFillProps };
