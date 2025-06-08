import { ComponentProps, forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

type Ref = HTMLDivElement;

type LoadingProps = ComponentProps<'div'> & {
    medium?: boolean;
    progressValue?: number;
};

const Loading = forwardRef<Ref, LoadingProps>(
    ({ className, children, medium, progressValue, ...props }, ref) => {
        return (
            <div
                {...props}
                {...(progressValue !== undefined && {
                    'data-progress': String(progressValue),
                })}
                className={twMerge('br-loading', medium && 'medium', className)}
                ref={ref}
            >
                {children}
            </div>
        );
    },
);

Loading.displayName = 'Loading';
export { Loading, type LoadingProps };
