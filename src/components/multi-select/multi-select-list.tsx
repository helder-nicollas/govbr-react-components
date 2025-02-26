import { ComponentProps } from 'react';
import { List } from '../list';

export function MultiSelectList({ children, ...props }: ComponentProps<'div'>) {
    return (
        <List tabIndex={0} {...props}>
            {children}
        </List>
    );
}
