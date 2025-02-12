import { ComponentProps } from 'react';

export function Label({ children, ...props }: ComponentProps<'label'>) {
    return <label {...props}>{children}</label>;
}
