import '@govbr-ds/core/dist/components/divider/divider.min.css';
import { ComponentProps } from 'react';
import { VariantProps } from 'tailwind-variants';
import { dividerVariants } from './variants';

export interface IDividerProps
    extends ComponentProps<'hr'>,
        VariantProps<typeof dividerVariants> {}

export function Divider({
    className,
    vertical,
    dashed,
    size,
    ...props
}: IDividerProps) {
    return (
        <hr
            {...props}
            className={dividerVariants({ className, dashed, size, vertical })}
            role="separator"
        />
    );
}
