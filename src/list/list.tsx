import { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';
import '@govbr-ds/core/dist/components/list/list.min.css';
import { ListTitle } from './list-title';
import { ListHeader } from './list-header';

interface ListProps extends ComponentProps<'div'> {
    horizontal?: boolean;
}

function List({ horizontal, children, className, ...props }: ListProps) {
    return (
        <div
            {...props}
            role="list"
            className={twMerge(
                'br-list',
                className,
                horizontal && 'horizontal',
            )}
        >
            {children}
        </div>
    );
}

List.Title = ListTitle;
List.Header = ListHeader;

export { List, type ListProps };
