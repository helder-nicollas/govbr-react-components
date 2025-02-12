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
            className={twMerge('relative top-1', className)}
            type="button"
            aria-label="Exibir senha"
            role="switch"
            aria-checked="false"
            variant="transparent"
            {...props}
        >
            {children}
        </Button>
    );
}
