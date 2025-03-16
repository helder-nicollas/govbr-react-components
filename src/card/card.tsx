import { ComponentProps, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';
import { CardHeader } from './card-header';
import { CardContent } from './card-content';
import { CardFooter } from './card-footer';

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

Card.Header = CardHeader;
Card.Content = CardContent;
Card.Footer = CardFooter;

export { Card, type CardProps };
