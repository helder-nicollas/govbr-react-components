import { ComponentPropsWithoutRef, ElementType } from 'react';
import { buttonVariants, ButtonVariants } from './variants';

type ButtonProps<T extends ElementType = 'button'> = ButtonVariants & {
    as?: T;
} & ComponentPropsWithoutRef<T>;

function Button<T extends ElementType = 'button'>({
    as,
    className,
    children,
    circle,
    variant,
    loading,
    size,
    ...rest
}: ButtonProps<T>) {
    const Component = as || 'button';

    return (
        <Component
            {...rest}
            className={buttonVariants({
                variant,
                circle,
                size,
                loading,
                className,
            })}
        >
            {children}
        </Component>
    );
}

export { Button, type ButtonProps };
