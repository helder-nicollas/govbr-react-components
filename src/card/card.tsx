import { ComponentProps, forwardRef, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

type CardProps = ComponentProps<'div'> & {
    disabled?: boolean;
    children: ReactNode;
};

type Ref = HTMLDivElement;

const Card = forwardRef<Ref, CardProps>(
    ({ className, disabled, children, ...props }, ref) => {
        return (
            <div
                {...props}
                ref={ref}
                className={twMerge(
                    'br-card',
                    className,
                    disabled && 'disabled',
                )}
            >
                {children}
            </div>
        );
    },
);

Card.displayName = 'Card';

export { Card, type CardProps };
