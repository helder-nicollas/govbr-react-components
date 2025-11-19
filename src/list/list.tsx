import { ComponentProps, forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

type ListProps = ComponentProps<'div'> & {
    horizontal?: boolean;
};
type Ref = HTMLDivElement;

const List = forwardRef<Ref, ListProps>(
    ({ horizontal, children, className, ...props }, ref) => {
        return (
            <div
                {...props}
                ref={ref}
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
    },
);

List.displayName = 'List';

export { List, type ListProps };
