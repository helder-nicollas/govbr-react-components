import { ElementType } from 'react';
import { VariantProps } from 'tailwind-variants';
import { itemVariants } from './variants';
import '@govbr-ds/core/dist/components/item/item.min.css';

type ItemProps<T> = T & {
    className?: string;
    children: React.ReactNode;
    Element?: ElementType;
} & VariantProps<typeof itemVariants>;

export function Item<T>({
    className,
    state,
    children,
    Element = 'div',
    ...props
}: ItemProps<T>) {
    return (
        <Element
            {...props}
            role="listitem"
            className={itemVariants({ className, state })}
        >
            {children}
        </Element>
    );
}
