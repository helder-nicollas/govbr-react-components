import { ComponentProps } from 'react';
import { Button } from '../button';
import { twMerge } from 'tailwind-merge';

export function InputButton({
    children,
    className,
    ...props
}: ComponentProps<'button'>) {
    return (
        <Button
            className={twMerge('relative', className)}
            type="button"
            aria-checked="false"
            {...props}
        >
            {children}
        </Button>
    );
}
