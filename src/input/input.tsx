import { ComponentProps } from 'react';
import { VariantProps } from 'tailwind-variants';
import { inputVariants } from './variants';

type InputProps = ComponentProps<'div'> & VariantProps<typeof inputVariants>;

function Input({
    children,
    className,
    highlight,
    withButton,
    size,
    variant,
    ...props
}: InputProps) {
    return (
        <div
            className={inputVariants({
                highlight,
                size,
                withButton,
                variant,
                className,
            })}
            {...props}
        >
            {children}
        </div>
    );
}

export { Input, type InputProps };
