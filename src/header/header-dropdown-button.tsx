import { ComponentPropsWithoutRef } from 'react';
import { Button } from '../button';

export function HeaderDropdownButton({
    className,
    children,
    ...props
}: ComponentPropsWithoutRef<'button'>) {
    return (
        <Button
            {...props}
            className={className}
            size="small"
            circle
            variant="transparent"
            type="button"
            data-toggle="dropdown"
        >
            {children}
        </Button>
    );
}
