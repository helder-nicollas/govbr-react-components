import { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';
import '@govbr-ds/core/dist/components/list/list.min.css';

interface IListProps extends ComponentProps<'div'> {
    horizontal?: boolean;
}

function List({ horizontal, children, className, ...props }: IListProps) {
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

export { List, IListProps };
