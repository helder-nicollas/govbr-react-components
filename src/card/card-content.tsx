import { ComponentProps, forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

type Ref = HTMLDivElement;
type CardContentProps = ComponentProps<'div'>;

const CardContent = forwardRef<Ref, CardContentProps>(
    ({ className, children, ...props }, ref) => (
        <div
            {...props}
            className={twMerge('card-content', className)}
            ref={ref}
        >
            {children}
        </div>
    ),
);

CardContent.displayName = 'CardContent';

export { CardContent, type CardContentProps };
