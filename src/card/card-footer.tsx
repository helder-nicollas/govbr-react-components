import { ComponentProps, forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

type Ref = HTMLDivElement;
type CardFooterProps = ComponentProps<'div'>;

const CardFooter = forwardRef<Ref, CardFooterProps>(
    ({ className, children, ...props }, ref) => (
        <div {...props} className={twMerge('card-footer', className)} ref={ref}>
            {children}
        </div>
    ),
);

CardFooter.displayName = 'CardFooter';

export { CardFooter, type CardFooterProps };
