import { ComponentProps, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

type CardProps = ComponentProps<'div'> & {
    disabled?: boolean;
    children: ReactNode;
};

function Card({ className, disabled, children, ...props }: CardProps) {
    return (
        <div
            {...props}
            className={twMerge('br-card', className, disabled && 'disabled')}
        >
            {children}
        </div>
    );
}

export { Card, type CardProps };
