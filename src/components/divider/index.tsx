import '@govbr-ds/core/dist/components/divider/divider.min.css';
import { ComponentProps } from 'react';
import { VariantProps } from 'tailwind-variants';
import { dividerVariants } from './variants';

type DividerProps = ComponentProps<'hr'> & VariantProps<typeof dividerVariants>;

function Divider({
    className,
    vertical,
    dashed,
    size,
    ...props
}: DividerProps) {
    return (
        <hr
            {...props}
            className={dividerVariants({ className, dashed, size, vertical })}
            role="separator"
        />
    );
}

export { Divider, DividerProps };
