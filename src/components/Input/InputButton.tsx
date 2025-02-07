import { ComponentProps } from 'react';
import { Button } from '../Button';

export function InputButton({ children, ...props }: ComponentProps<'button'>) {
    <Button
        type="button"
        aria-label="Exibir senha"
        role="switch"
        aria-checked="false"
        {...props}
    >
        {children}
    </Button>;
}
