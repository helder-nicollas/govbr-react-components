import { ComponentProps } from 'react';
import { VariantProps } from 'tailwind-variants';
import { itemVariants } from './variants';
import '@govbr-ds/core/dist/components/item/item.min.css';

interface IItemProps
    extends ComponentProps<'div'>,
        VariantProps<typeof itemVariants> {}

export function Item({ className, state, children, ...props }: IItemProps) {
    return (
        <div
            {...props}
            role="listitem"
            className={itemVariants({ className, state })}
        >
            {children}
        </div>
    );
}
