import { ComponentPropsWithoutRef, ElementType } from 'react';
import { VariantProps } from 'tailwind-variants';
import { itemVariants } from './variants';

type ItemProps<T extends ElementType = 'div'> = ComponentPropsWithoutRef<T> & {
    className?: string;
    children: React.ReactNode;
    as?: T;
} & VariantProps<typeof itemVariants>;

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

export { ItemProps, Item };
