import { ComponentPropsWithoutRef, ElementType } from 'react';
import { ItemVariants, itemVariants } from './variants';

type ItemProps<T extends ElementType = 'div'> = ComponentPropsWithoutRef<T> & {
    as?: T;
} & ItemVariants;

function Item<T extends ElementType = 'div'>({
    className,
    selected,
    active,
    children,
    as,
    ...props
}: ItemProps<T>) {
    const Component = as || 'div';

    return (
        <Component
            {...props}
            role="listitem"
            className={itemVariants({ className, active, selected })}
        >
            {children}
        </Component>
    );
}

export { Item, type ItemProps };
