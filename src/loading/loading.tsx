import { ComponentProps, forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { LoadingFill } from './loading-fill';
import { LoadingMask } from './loading-mask';

type Ref = HTMLDivElement;

type LoadingProps = ComponentProps<'div'> & {
    medium?: boolean;
    progressValue?: number;
};

interface ILoadingComponent
    extends React.ForwardRefExoticComponent<
        LoadingProps & React.RefAttributes<Ref>
    > {
    Mask: typeof LoadingMask;
    Fill: typeof LoadingFill;
}

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
) as ILoadingComponent;

Loading.Fill = LoadingFill;
Loading.Mask = LoadingMask;

Loading.displayName = 'Loading';
export { Loading, type LoadingProps };
