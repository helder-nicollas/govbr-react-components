import { ElementType } from 'react';
import { VariantProps } from 'tailwind-variants';
import { itemVariants } from './variants';
import '@govbr-ds/core/dist/components/item/item.min.css';

type ItemProps<T = void> = T & {
    className?: string;
    children: React.ReactNode;
    Element?: ElementType;
} & VariantProps<typeof itemVariants>;

function Item<T>({
    className,
    selected,
    active,
    children,
    Element = 'div',
    ...props
}: ItemProps<T>) {
    return (
        <Element
            {...props}
            role="listitem"
            className={itemVariants({ className, active, selected })}
        >
            {children}
        </Element>
    );
}

export { ItemProps, Item };
