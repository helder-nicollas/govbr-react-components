import { ComponentProps, forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

type Ref = HTMLDivElement;
type CardHeaderProps = ComponentProps<'div'>;

const CardHeader = forwardRef<Ref, CardHeaderProps>(
    ({ className, children, ...props }, ref) => (
        <div {...props} className={twMerge('card-header', className)} ref={ref}>
            {children}
        </div>
    ),
);

CardHeader.displayName = 'CardHeader';

export { CardHeader, CardHeaderProps };
