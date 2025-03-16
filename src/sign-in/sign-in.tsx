import { ComponentPropsWithoutRef, ElementType } from 'react';
import { SignInVariants, signInVariants } from './variants';

type SignInProps<T extends ElementType = 'button'> = SignInVariants & {
    as?: T;
} & ComponentPropsWithoutRef<T>;

function SignIn<T extends ElementType = 'button'>({
    as,
    className,
    children,
    circle,
    variant,
    size,
    ...rest
}: SignInProps<T>) {
    const Component = as || 'button';

    return (
        <Component
            {...rest}
            className={signInVariants({
                variant,
                circle,
                size,
                className,
            })}
        >
            {children}
        </Component>
    );
}

export { SignIn, type SignInProps };
