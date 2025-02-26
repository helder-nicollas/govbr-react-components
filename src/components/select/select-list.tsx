import { ComponentProps } from 'react';
import { List } from '../list';
import { twMerge } from 'tailwind-merge';

export function SelectList({
    children,
    className,
    ...props
}: ComponentProps<'div'>) {
    return (
        <List {...props} tabIndex={0} className={twMerge('z-50', className)}>
            {children}
        </List>
    );
}
